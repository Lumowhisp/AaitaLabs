import React from "react"
import Header from "../../components/Header";
import Hero from "../../components/hero";
import Box from "../../components/QualityAssured/quality";
import AboutUs from "../../components/AboutUs/aboutus";
import Footer from "../../components/Footer/footer";

const Landing =()=>{
    return(
        <div className="min-h-screen bg-[#edeae5]">
      <div className="pt-4">
        <Header/>
      </div>

      <div>
        <Hero/>
      </div>
      {/* //Preview Mode */}
      <Box/>
      {/* close */}
      <div className="ml-29 mt-14">
        <AboutUs/>
      </div>
      
      
      <div>
        <Footer/>
    
      </div>
      

    </div>
    )

}
export default Landing;