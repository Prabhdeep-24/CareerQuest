import React, { useContext, useEffect } from "react";
import logo from "../assets/CareerQuestLogo.jpg";
import { FormContext } from "../utilities/FormContext";
import { generatePath, useNavigate } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";

// AIzaSyDZiAN3fq0zrDxv1akVEd_Qr4omq5JcWMM

function MyCareerPath() {
  const { careeroptions, changeCareerOptions } = useContext(FormContext);

  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 h-screen verflow-hidden flex gap-4">
      {careeroptions.map((val, idx) => {
        return (
          <div
            key={idx}
            className="bg-white flex flex-col items-center h-120 w-120 mx-2 my-20 hover:scale-102 duration-300"
          >
            <h1 className=" p-5 text-2xl text-teal-600 md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight">
              {val.title}
            </h1>

            <img src={val.image} alt="" height="200px" width="200px" />

            <p className="font-poppins font-semibold text-l">
              {val.description}
            </p>
            <div className="flex">
              <button
                className="m-10 cursor-pointer w-30 rounded-full text-white bg-teal-600 h-10 flex-end hover:bg-blue-600 hover:scale-105 duration-300 font-poppins font-semibold"
                onClick={() => navigate(`/career/${val.title}`,{
                  state:{title:`${val.title}`}
                })}
              >
                Explore More
              </button>
              <button className="m-10 cursor-pointer w-40 rounded-full text-white bg-teal-600 h-10 flex-end hover:bg-blue-600 hover:scale-105 duration-300 font-poppins font-semibold"
                onClick={()=>{
                  navigate(`/careerPath/${val.title}`,{
                    state:{title:`${val.title}`}
                  })
                }}
              >
                Choose Career
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyCareerPath;
