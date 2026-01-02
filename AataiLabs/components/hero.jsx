import React from "react";
import GetStarted from "./elements/getStarted";
const Hero = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="ml-34 ">
        <h1 className="font-saira text-8xl tracking-[0.1em] font-bold mt-39 px-2 py-1 rounded-2xl hover:bg-black hover:text-white transition duration-1000">
          Aaita Labs
        </h1>
        <h2 className="font-bigshoulders text-7xl mt-4 tracking-[0.12em] text-gray-900">
          Elevate Your Work
        </h2>
        <div className="mt-5">
          <GetStarted />
        </div>
      </div>
      <div className=" mt-5 mr-4">
        <img
          src="../Assets/blackstand.png"
          className="w-[600px] h-auto object-contain hover:scale-125 transition duration-700"
        />
      </div>
    </div>
  );
};
export default Hero;
