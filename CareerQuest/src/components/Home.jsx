import React, { useState } from "react";
import BarGraph from "./BarGraph";
import { dataIndia, descIndia } from "../utilities/PackagesIndia";
import { dataWorld, descWorld } from "../utilities/PackagesWorld";
import Professions from "./FamousProfessions";

function Home() {
  const [region, setRegion] = useState("India");

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center pt-24 pb-16 bg-gradient-to-r from-blue-900 to-emerald-600 text-white px-6 md:px-24">
        <h1 className="text-5xl md:text-6xl font-poppins font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Discover Your Dream Career
        </h1>
        <p className="text-lg text-xl text-gray-200 mb-8 text-center font-poppins leading-relaxed">
          Let Career Quest guide you to in-demand careers based on your passions!
        </p>
        <button className="cursor-pointer bg-teal-600 text-white px-10 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-teal-700 transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Introduction Section */}
      <div className="introduction px-6 md:px-20 mt-10 mb-12">
        <h1 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight">
          Introduction
        </h1>
        <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
          Embark on a journey to uncover the career that’s perfect for you with
          Career Quest. Powered by cutting-edge{" "}
          <span className="text-teal-600 font-semibold">Generative AI</span>, we
          analyze your passions, skills, and the latest market trends to reveal
          personalized career paths. Whether you’re a student dreaming big or a
          professional seeking a new horizon, our insights light the way to
          opportunities that matter. In a world of endless possibilities, finding
          the right career can feel overwhelming. That’s where Career Quest
          steps in. We blend advanced technology with real-world data to
          spotlight in-demand professions—both in India and across the globe.
          From tech innovators to healthcare heroes, explore the roles shaping
          tomorrow and see how you fit into the future.
        </p>
      </div>

      {/* Divider */}
      <hr className="w-1/3 border-t-2 border-teal-500 my-10 rounded-md" />

      {/* Graphs Section */}
      <h1 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-6 tracking-tight">
        Famous Career Options
      </h1>
      <div className="flex flex-col items-center w-full gap-12 px-6 md:px-20">
        <p className="text-base md:text-lg max-w-3xl text-gray-700 font-poppins leading-relaxed text-center">
          Curious about what pays and what’s trending? Our interactive charts
          showcase the top careers driving India’s growth and the world’s
          economy. With average salary insights at your fingertips, you’ll gain
          a clear picture of where opportunity meets ambition. Let the numbers
          guide you as you chart your next big move.
        </p>
        {region === "India" ? (
          <div>
            <div className="flex justify-center gap-6 py-8">
              <button
                className="cursor-pointer bg-teal-600 text-white px-6 py-2 rounded-lg font-poppins font-semibold text-base hover:bg-teal-700 transition-all duration-300 shadow-md"
                onClick={() => setRegion("India")}
              >
                India
              </button>
              <button
                className="cursor-pointer bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-poppins font-semibold text-base hover:bg-teal-100 transition-all duration-300"
                onClick={() => setRegion("World")}
              >
                World
              </button>
            </div>
            <div className="flex flex-col items-center gap-12">
              <BarGraph data={dataIndia} place={"India"} />
              <Professions desc={descIndia} profession={dataIndia.labels} />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center gap-6 py-8">
              <button
                className="cursor-pointer bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-poppins font-semibold text-base hover:bg-teal-100 transition-all duration-300"
                onClick={() => setRegion("India")}
              >
                India
              </button>
              <button
                className="cursor-pointer bg-teal-600 text-white px-6 py-2 rounded-lg font-poppins font-semibold text-base hover:bg-teal-700 transition-all duration-300 shadow-md"
                onClick={() => setRegion("World")}
              >
                World
              </button>
            </div>
            <div className="flex flex-col items-center gap-12">
              <BarGraph data={dataWorld} place={"World"} />
              <Professions desc={descWorld} profession={dataWorld.labels} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;