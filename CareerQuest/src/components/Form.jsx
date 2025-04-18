import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDUEbAbtCq8h5Biv-H6nO72IELxORMsdyQ",
});

async function generateQuestion(
    answer,
    answers,
    question,
    questions,
    setQuestion,
    count,
    setCount,
    setQuestions
) {
    if (count < 5) {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `Act as a professional Career Counselor.Ask one question at a time based on previous answers and questions and "questions should be humanized and small without symbols". Ask at most 6 questions.Be friendly and professional, questions asked:${questions} , answers given:${answers}.`
        });
        setQuestion(response.candidates[0].content.parts[0].text);
        setCount((count) => count + 1);
        setQuestions([...questions, question]);
        // console.log(questions);
    } else {
        console.log(response.text);
    }
  // console.log(response.candidates[0].content.parts[0].text);
}

function Form() {
  const [value, setValue] = useState("");
  const [question, setQuestion] = useState("Q. What are your hobbies?");
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState(["What are your hobbies?"]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex justify-center p-5">
        <h1 className="text-2xl md:text-3xl font-poppins font-bold h-10 p-5">
          Fill this form to{" "}
          <b className="text-teal-600 font-semibold">Find your Career Path</b>
        </h1>
      </div>
      <div className="bg-white w-200 h-150 m-2 shadow-xl flex flex-col">
        <div className="m-2 p-20">
          <h1 className="py-8 text-teal-600 font-semibold text-2xl">
            {question}
          </h1>
          <input
            type="text"
            className="m-2 p-1 border-b-2 w-full font-poppins focus:outline-none"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-teal-600 ml-auto mx-20 hover:text-white font-poppins font-semibold w-20 h-8 rounded-xl hover:bg-teal-700 hover:scale-110"
          onClick={() => {
            console.log(value);
            const arr=[...answers,value];
            setAnswers(arr)
            generateQuestion(
                value,
                arr,
                question,
                questions,
                setQuestion,
                count,
                setCount,
                setQuestions
            );
            setValue("");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Form;
