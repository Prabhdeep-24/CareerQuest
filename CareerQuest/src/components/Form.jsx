import React, { useContext, useEffect, useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../utilities/FormContext";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_KEY,
});

async function generateQuestion(
  answers,
  questions,
  setQuestion,
  count,
  setCount,
  setQuestions,
  setTyped,
  changeCareerOptions,
  navigate
) {
  if (count < 5) {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Act as a professional Career Counselor.Ask one question at a time based on previous answers and 

                Important:

                questions and questions should be humanized and small without symbols. Ask at most 6 questions.Be friendly and professional.
                Also Provide with a very small and easy understanding example to explain the question.
                User's Responses:
                questions asked:${questions} , answers given:${answers}.`,
    });
    const newQuestion = response.candidates[0].content.parts[0].text;
    setQuestion(newQuestion);
    setCount();
    setQuestions([...questions, newQuestion]);
    setTyped(false);
  } else {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are a professional AI Career Counselor.

                Based on the following user responses, suggest exactly 3 careers.

                Return the output as a RAW JSON array of 3 objects.  
                Each object should have exactly these keys:
                - "title" (string, 2-3 words, e.g., "Software Developer")
                - "description" (string, short friendly description personalized to user's strengths)
                - "image (url): provide the url of a real image from the internet in context to the title" 

                Important Instructions:
                - Only return pure valid JSON, no explanation, no introduction, no markdown.
                - No words like 'JSON', no extra symbols. Only the raw JSON.
                - Ensure the JSON array is directly parsable.

                User Responses:
                Questions: ${questions}
                Answers: ${answers}
            `,
    });
    const cleanedText = response.candidates[0].content.parts[0].text
      .replace(/^```json\s*/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .replace(/^JSON\s*/i, "")
      .trim();

    changeCareerOptions(JSON.parse(cleanedText));
    navigate("/MyCareerPath");
  }
}

function Form() {
  const {
    value,
    changeValue,
    question,
    changeQuestion,
    count,
    changeCount,
    answers,
    changeAnswers,
    questions,
    changeQuestions,
    careeroptions,
    changeCareerOptions,
  } = useContext(FormContext);
  
  const [typed, setTyped] = useState(false);
  const typeRef = useRef();
  const navigate = useNavigate();

  function buttonClick(e){
    if(value){
      changeQuestion("Evaluating...");
      typeRef.current.focus();
      const arr = [...answers, value];
      changeAnswers(arr);
      generateQuestion(
        arr,
        questions,
        changeQuestion,
        count,
        changeCount,
        changeQuestions,
        setTyped,
        changeCareerOptions,
        navigate
      );
      changeValue("");
    }
  }
  function onEnter(e){
    if(e.key==="Enter"){
      buttonClick(e);
    }
  }
  
  useEffect(()=>{
    if(localStorage.getItem('career')){
      const path=JSON.parse(localStorage.getItem('career'))
      navigate(`/careerPath/${path}`)
      return;
    }
    if(careeroptions.length>0){
      navigate('/MyCareerPath');
    }
  })

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex justify-center p-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-center">
          Fill this form to{" "}
          <b className="text-teal-600 font-semibold">Find your Career Path</b>
        </h1>
      </div>
      <div className="bg-white w-full max-w-2xl m-2 shadow-xl flex flex-col p-6 sm:p-10 rounded-xl">
        <div className="m-2">
          <div className="py-8 text-teal-600 font-semibold text-lg md:text-2xl">
            {!typed ? (
              <Typewriter
                words={[question]}
                cursorBlinking={true}
                cursorStyle={"|"}
                typeSpeed={30}
                key={question}
                onFinishedTyped={() => setTyped(true)}
              />
            ) : (
              <span>{question}</span>
            )}
          </div>
          <input
            ref={typeRef}
            type="text"
            className="m-2 p-2 border-b-2 w-full font-poppins focus:outline-none text-base md:text-lg"
            value={value}
            onChange={(e) => {
              changeValue(e.target.value);
            }}
            onKeyDown={(e)=>onEnter(e)}
          />
        </div>
        <button
          className="bg-teal-600 ml-auto mr-2 mb-2 hover:text-white font-poppins font-semibold w-24 h-10 rounded-xl hover:bg-teal-700 hover:scale-105 transition-transform duration-200"
          onClick={(e) => {buttonClick(e)}}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Form;
