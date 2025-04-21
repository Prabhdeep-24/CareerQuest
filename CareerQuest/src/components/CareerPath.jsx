import { GoogleGenAI } from '@google/genai'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_KEY,
});

async function generatePath(careerPath,setPath){
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: ` Given a career title, generate a well structured and well detailed  step-by-step career path in a format ready for a flowchart.

            Structure the output in clearly separated stages.
            For each stage, include:

            Stage Title (e.g., 'Learn Python Basics')

            What to Learn

            Best Free Resources (YouTube links, Coursera links, etc.)

            Output/Goal after completing this stage (e.g., 'Able to write basic Python programs')

            Maintain the order of learning: starting from basics to mastery.

            Format the output like this:

            [
            {
                "stage": "Foundation Stage",
                "title": "Learn Python Basics",
                "description": "Understand syntax, loops, conditionals, functions, data structures in Python.",
                "resources": [
                {"type": "YouTube", "name": "Python for Beginners – freeCodeCamp", "link": "https://youtu.be/rfscVS0vtbw"},
                {"type": "Coursera", "name": "Programming for Everybody", "link": "https://www.coursera.org/learn/python"}
                ],
                "goal": "Able to code basic programs and algorithms using Python."
            },
            {
                "stage": "Mathematical Foundation",
                "title": "Learn Statistics and Probability",
                ...
            },
            ...
            ]

            Output only the array JSON (no extra explanation).
            Keep it clean so it can be used to directly build a flowchart.

            Career Title: ${careerPath}

            `,
      });
      const cleanedPath = response.candidates[0].content.parts[0].text
      .replace(/^```json\s*/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .replace(/^JSON\s*/i, "")
      .trim();
      
      setPath(JSON.parse(cleanedPath));
      return cleanedPath;
}


function CareerPath() {
    const location=useLocation();
    let {title}=useParams();
    const [path,setPath]=useState([]);
    let prevStage=useRef(null);

    useEffect(()=>{
        const item=localStorage.getItem('career');
        if(!item){
            const data=async ()=>{
                const reqPath=await generatePath(title,setPath)
                localStorage.setItem('careerPath',reqPath);
                localStorage.setItem('career',JSON.stringify(title));
            }
            data();
        }
        else{
            setPath(JSON.parse(localStorage.getItem('careerPath')));
        }
    },[title])

    return (
        <div className='w-full'>
            {
                path.length>0?
                <div className='flex flex-col items-center'>
                    <div className="bg-gradient-to-r from-teal-400 to-blue-600 shadow-xl w-full">
                        <h1 className="p-8 text-3xl md:text-5xl font-extrabold font-poppins text-white drop-shadow-sm text-center">
                            {title}
                        </h1>
                    </div>

                    
                    {
                        path.map((val,idx)=>{
                            const newStage=prevStage.current!==val.stage;
                            if(newStage) prevStage.current=val.stage
                            return <div className='p-10 rounded-lg bg-white w-full max-w-3xl my-10 flex flex-col justify-center hover:scale-105 duration-300'>
                                {newStage && <>
                                    <h1 className="text-teal-600 text-2xl md:text-3xl font-poppins font-bold h-10 p-5">{val.stage}</h1>
                                    <hr className="w-1/3 md:w-full border-t-2 border-teal-500 my-10 rounded-md" />
                                </>}
                                <h2 className="text-xl md:text-2xl font-poppins font-bold h-10 p-5">{val.title}</h2>
                                <p className='p-5 text-lg md:text-xl font-poppins font-semibold'>{val.description}</p>
                                <ul className='list-disc list-inside'>
                                    {
                                        val.resources.map((res,id)=>{
                                            return <li className='font-semibold font-poppins px-15 py-2'>
                                                    <a href={res.link} target='_blank' rel="noreferrer">
                                                        {res.name} ({res.type})
                                                    </a>
                                                </li>
                                        })
                                    }
                                </ul>
                                <p className='px-10 font-semibold'>Goal: <span className='text-teal-600'>{val.goal}</span></p>
                            </div>
                        })
                    }
                </div>
                :
                <div className='text-teal-600 font-semibold text-2xl flex justify-center items-center min-h-[50vh]'>
                    <Typewriter
                        words={["Generating..."]}
                        loop={true}
                        typeSpeed={30}
                        cursor={'|'}
                        cursorBlinking={true}
                    />
                </div>
            }
        </div>
    )
}

export default CareerPath