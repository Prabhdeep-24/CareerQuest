import React, { useState } from "react";
import BarGraph from "./BarGraph";
import { dataIndia , descIndia} from "../utilities/PackagesIndia";

import { dataWorld , descWorld} from "../utilities/PackagesWorld";
import Professions from "./Professions";

function Home() {
  const [region, setRegion] = useState("India");

  return (
    <div className="flex flex-col items-center py-16 bg-gradient-to-br from-teal-50 via-blue-100 to-blue-200 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-16 pb-10">
        <h1 className="text-4xl md:text-6xl font-poppins font-extrabold text-deep-blue mb-6 tracking-wide drop-shadow-md">
          Discover Your Dream Career
        </h1>
        <p className="text-lg text-dark-gray mb-8 max-w-lg text-center font-poppins leading-loose">
          Let Career Quest guide you to in-demand careers based on your
          passions!
        </p>
        <button className="bg-blue-400 text-white px-8 py-3 rounded-full font-poppins font-semibold cursor-pointer text-lg hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>

      {/* Introduction Section */}
      <div className="introduction px-6 md:px-20 mt-12 mb-16">
        <h1 className="text-3xl font-poppins font-extrabold text-deep-blue mb-4 tracking-wide">
          Introduction
        </h1>
        <p className="text-lg text-dark-gray font-poppins leading-relaxed">
          Embark on a journey to uncover the career that’s perfect for you with
          Career Quest. Powered by cutting-edge{" "}
          <span className="text-teal-600 font-semibold">Generative AI</span>, we
          analyze your passions, skills, and the latest market trends to reveal
          personalized career paths. Whether you’re a student dreaming big or a
          professional seeking a new horizon, our insights light the way to
          opportunities that matter.In a world of endless possibilities, finding
          the right career can feel overwhelming. That’s where Career Quest
          steps in. We blend advanced technology with real-world data to
          spotlight in-demand professions—both in India and across the globe.
          From tech innovators to healthcare heroes, explore the roles shaping
          tomorrow and see how you fit into the future.
        </p>
      </div>

      {/* Divider */}
      <hr className="w-1/2 border-t border-teal-400 border-2 my-12 rounded-full" />

      {/* Graphs Section */}
      <h1 className="text-3xl font-poppins font-extrabold text-deep-blue mb-4 tracking-wide">
        Famous Career Options
      </h1>
      <div className="flex flex-col items-center w-full gap-16 px-6">
        <p className="text-lg max-w-4xl text-dark-gray font-poppins leading-relaxed">
          Curious about what pays and what’s trending? Our interactive charts
          showcase the top careers driving India’s growth and the world’s
          economy. With average salary insights at your fingertips, you’ll gain
          a clear picture of where opportunity meets ambition. Let the numbers
          guide you as you chart your next big move.
        </p>
          {
            region==="India"?
            <div>
              <div className="flex justify-center gap-10 py-10">
                <button className="bg-teal-600 text-white px-8 py-1 rounded-full font-poppins font-semibold cursor-pointer text-lg" onClick={()=>setRegion("India")}>
                  India
                </button>
                <button className="bg-blue-400 text-white px-8 py-1 rounded-full font-poppins font-semibold cursor-pointer text-lg" onClick={()=>setRegion("World")}>
                  World
                </button>
              </div>
              <div className="flex flex-col items-center gap-10">
                <BarGraph data={dataIndia} place={"India"}/>
                <Professions desc={descIndia} profession={dataIndia.labels}/>
              </div>
            </div>
          :
          <div>
            <div className="flex justify-center gap-10 py-10">
              <button className="bg-blue-400 text-white px-8 py-1 rounded-full font-poppins font-semibold cursor-pointer text-lg" onClick={()=>setRegion("India")}>
                India
              </button>
              <button className="bg-teal-600 text-white px-8 py-1 rounded-full font-poppins font-semibold cursor-pointer text-lg" onClick={()=>setRegion("World")}>
                World
              </button>
            </div>
            <div className="flex flex-col items-center gap-10">
              <BarGraph data={dataWorld} place={"World"} />
              <Professions desc={descWorld} profession={dataWorld.labels}/>
            </div>
          </div>
          }

        <div className="flex justify-center w-full p-8 rounded-xl">
        </div>
        <div className="flex justify-center w-full p-8 rounded-xl">
        </div>
      </div>
    </div>
  );
}

export default Home;
