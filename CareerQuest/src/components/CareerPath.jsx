import { GoogleGenAI } from '@google/genai'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const ai = new GoogleGenAI({
    apiKey: "AIzaSyAXIuwnGgdgkhVinFtwGaEdPmriPBIGW-w",
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
      
      console.log(cleanedPath);
      setPath(JSON.parse(cleanedPath));
}


function CareerPath() {
    const location=useLocation();
    const {title}=location.state||{};
    const [path,setPath]=useState([]);

    useEffect(()=>{
        generatePath(title,setPath)
    },[])

    return (
        <div className='m-10'>
            {
                path.length>0?
                <div className='flex justify-center text-poppins text-2xl font-bold'>
                    {title}
                </div>
                :
                <div className='text-teal-600 font-semibold text-2xl'>
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