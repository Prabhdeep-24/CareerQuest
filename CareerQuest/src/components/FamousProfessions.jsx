import React from "react";

function Professions({ profession, desc }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {profession.map((prof, idx) => (
        <div
          key={idx}
          className="mb-10 md:mb-12 w-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extrabold text-teal-600 mb-4 tracking-wide">
            {prof}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-dark-gray font-poppins leading-relaxed">
            {desc[prof]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Professions;