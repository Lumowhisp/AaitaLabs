import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import GetStarted from "../components/elements/getStarted";
import AboutUs from "../components/AboutUs/aboutus";

const App = () => {
  
  return (
    <div className="min-h-screen bg-[#edeae5]">
      <div className="pt-4">
        <Header />
      </div>

      <div>
        <Hero />
      </div>
      {/* //Preview Mode */}
      <AboutUs/>
      
    </div>
  );
};
export default App;
