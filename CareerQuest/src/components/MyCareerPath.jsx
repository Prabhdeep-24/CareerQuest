import React from "react";
import logo from '../assets/CareerQuestLogo.jpg'
function MyCareerPath() {
  return (
    <div className="bg-gray-200 h-screen verflow-hidden flex gap-4">
      <div className="bg-white flex flex-col items-center h-120 w-120 mx-2 my-20 hover:scale-102 duration-300">
        <h1 className=" p-5 text-2xl text-teal-600 md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight">
          Data Analyst
        </h1>

        <img src={logo} alt="" height='200px' width='200px'/>

        <p className="font-poppins font-semibold text-l">
          Data Analyst is a job that is very famous in market nowadays. In this
          you have to analyse the data and write reports and help company to
          understand the general trends of the markets...
        </p>
        <button className="m-10 cursor-pointer w-30 rounded-lg text-white bg-teal-600 h-10 flex-end hover:bg-teal-700 hover:scale-105 duration-300 font-poppins font-semibold">
          Explore More
        </button>
      </div>
      <div className="bg-white flex justify-center h-120 w-120 mx-2 my-20 hover:scale-102 duration-300"></div>
      <div className="bg-white flex justify-center h-120 w-120 mx-2 my-20 hover:scale-102 duration-300"></div>
    </div>
  );
}

export default MyCareerPath;
