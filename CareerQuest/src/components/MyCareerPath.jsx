import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../utilities/FormContext";
import { useNavigate } from "react-router-dom";

async function generateImage(topic, setImages) {
  const API_KEY = import.meta.env.VITE_IMAGE_KEY;
  const title = `${topic.title} working in the office`;
  const data = await fetch(`https://api.pexels.com/v1/search?query=${title}&per_page=1`, {
    headers: {
      'Authorization': API_KEY
    }
  });
  const response = await data.json();
  const img = response.photos[0].src.medium;

  if (img) {
    setImages((prevImage) => ({
      ...prevImage,
      [topic.title]: img
    }));
  }
}

function MyCareerPath() {
  const { careeroptions, changeCareerOptions } = useContext(FormContext);
  const [images, setImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const careers = JSON.parse(localStorage.getItem('careers'));
    if (!careers) {
      navigate('/Form');
    }
    const career = JSON.parse(localStorage.getItem('career'));
    if (career) {
      navigate(`/careerPath/${career}`);
    }
  });

  useEffect(() => {
    if (careeroptions.length > 0) {
      careeroptions.map((val, idx) => {
        generateImage(val, setImages);
      });
    }
  }, [careeroptions]);

  return (
    <div className="bg-gray-200 min-h-screen overflow-auto flex flex-wrap gap-8 justify-center">
      {careeroptions.map((val, idx) => {
        return (
          <div
            key={idx}
            className="bg-white flex flex-col justify-center items-center h-auto w-full sm:w-80 md:w-96 lg:w-[320px] xl:w-[400px] mx-6 my-10 hover:scale-102 duration-300"
          >
            <h1 className="p-5 text-2xl text-teal-600 md:text-3xl font-poppins font-bold text-gray-800 mb-4 tracking-tight">
              {val.title}
            </h1>

            <img src={images[val.title]} alt="" height="200px" width="200px" />

            <p className="font-poppins font-semibold text-l px-4 text-center">
              {val.description}
            </p>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <button
                className="m-2 cursor-pointer w-30 rounded-full text-white bg-teal-600 h-12 flex-end hover:bg-blue-600 hover:scale-105 duration-300 font-poppins font-semibold"
                onClick={() => navigate(`/career/${val.title}`, {
                  state: { title: `${val.title}` }
                })}
              >
                Explore More
              </button>
              <button
                className="m-2 cursor-pointer w-30 rounded-full text-white bg-teal-600 h-12 flex-end hover:bg-blue-600 hover:scale-105 duration-300 font-poppins font-semibold"
                onClick={() => {
                  navigate(`/careerPath/${val.title}`, {
                    state: { title: `${val.title}` }
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
