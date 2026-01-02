import React from "react";

const AboutUs = () => {
  return (
    <div className="flex">
      <div>
        <img
          src="../Assets/3dprinter.png"
          className="w-[500px] h-auto object-contain"
        />
      </div>

      <div className="w-[552px] ml-12 mt-12">
        <p className="text-4xl font-rajdhani leading-relaxed">
          At <span className="font-orbitron font-extrabold">Aaita Labs</span>,{" "}
          <span
            className="
              relative inline-block px-2
              text-white z-10
              before:content-['']
              before:absolute
              before:inset-0
              before:bg-black
              before:rounded
              before:z-[-1]
            "
          >
            better work
          </span>{" "}
          starts with{" "}
          <span
            className="
              relative inline-block px-2
              text-white z-10
              before:content-['']
              before:absolute
              before:inset-0
              before:bg-black
              before:rounded
              before:z-[-1]
            "
          >
            better design
          </span>
          . We
            build clean, functional desk essentials for modern setups
         
          
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
