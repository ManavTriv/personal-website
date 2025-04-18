import React from "react";

const About = () => {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <h1 className="font-secondary text-sm sm:text-base md:text-md font-semibold text-indigo-300 tracking-wide">
        ABOUT ME
      </h1>
      <p className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
        hi i'm manav and i'm currently a student studying software engineering
        and economics at{" "}
        <span className="underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300">
          the university of queensland
        </span>
      </p>
    </div>
  );
};

export default About;
