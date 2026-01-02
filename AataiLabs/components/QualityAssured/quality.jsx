import React from "react";
const Box = () => {
  return (
    <div>
      <div className="flex mt-2 bg-black pt-5 pb-5 mx-17 rounded-2xl
       text-white justify-center space-x-5 hover:scale-104 transition-transform duration-500">
          <div className="flex items-center"> 
            <img className="h-8" src="Assets/Quality/Shipping.png"/><p className="ml-2">Free Shipping</p>
          </div>
          <div className="flex items-center">
            <img className="h-8" src="Assets/Quality/support.png"/>
            <p className="ml-2">24/7 Support</p>
          </div>
          <div className="flex items-center">
            <img  className="h-8" src="Assets/Quality/secure.png"/>
            <p className="ml-2">Secure Payment</p>
          </div>
          <div className="flex items-center">
            <img className="h-7"src="Assets/Quality/quality.png"/>
            <p className="ml-2">Quality Assured</p>
          </div>
        </div>
     
    </div>
  );
};
export default Box;
