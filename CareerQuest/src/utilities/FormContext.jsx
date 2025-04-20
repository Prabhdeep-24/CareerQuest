import React, { createContext, useEffect, useState } from 'react'

export const FormContext=createContext();

export const FormProvider=({children})=>{
    const [value, setValue] = useState("");
    const [question, setQuestion] = useState("Q. What are your hobbies?");
    const [count, setCount] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState(["What are your hobbies?"]);
    const [careeroptions,setCareeroptions]= useState([]);

    function changeValue(val){
        setValue(val);
    }

    function changeQuestion(ques){
        setQuestion(ques);
    }

    function changeCount(){
        setCount((prev)=>prev+1);
    }

    function changeAnswers(ans){
        setAnswers(ans);
    }

    function changeQuestions(ques){
        setQuestions(ques);
    }

    function changeCareerOptions(options){
        localStorage.setItem('career',JSON.stringify(options));
        setCareeroptions(options);
    }

    useEffect(()=>{
        const storedOptions=localStorage.getItem('career');
        if(storedOptions){
            setCareeroptions(JSON.parse(storedOptions));
        }
    },[])

    return(
        <FormContext.Provider value={{value,changeValue,question,changeQuestion,count,changeCount,answers,changeAnswers,questions,changeQuestions,careeroptions,changeCareerOptions}}>
            {children}
        </FormContext.Provider>
    )
}