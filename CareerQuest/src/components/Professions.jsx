import React from "react";

function Professions({ profession, desc }) {
  return (
    <div>
      {profession.map((prof, idx) => (
        <div
          key={idx}
          className="p-6 mb-10 md:mb-12 w-full mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-poppins font-extrabold text-teal-600 mb-4 tracking-wide">
            {prof}
          </h1>
          <p className="text-lg md:text-xl text-dark-gray font-poppins leading-relaxed">
            {desc[prof]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Professions;