import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import GetStarted from "../components/elements/getStarted";
import AboutUs from "../components/AboutUs/aboutus";
import Footer from "../components/Footer/footer";
import Box from "../components/QualityAssured/quality";


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
      <Box/>
      {/* close */}
      <div className="ml-29 mt-14">
        <AboutUs />
      </div>
      
      
      <div>
        <Footer/>
      </div>
      

    </div>
  );
};
export default App;
