import React from "react";
const Header = () => {
  return (
    <>
      <nav className="h-10">
        <ul className="flex justify-between  items-baseline h-10">
          <div className="ml-13">
            <li>
              <img className="w-30" src="../Assets/LabsLogo.png" alt="Logo" />
            </li>
          </div>
          <div className="flex items-baseline space-x-3 mr-20">
            <li >
              <img className="w-8 h-8" src="../Assets/Home.png" alt="Home" />
            </li>
            <li >
              <img className="w-8 h-8" src="../Assets/shop.png" alt="Shop" />
            </li>
            <li >
              <img
                className="w-9 h-9 pt-0.5"
                src="../Assets/contact.png"
                alt="contact"
              />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default Header;
