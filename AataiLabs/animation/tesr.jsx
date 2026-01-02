import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Test = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: 200,
      duration: 1,
      borderRadius: "50%",
      backgroundColor: "black",
    });
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="w-24 h-24 bg-gray-300 rounded-md"
      ></div>
    </div>
  );
};

export default Test;