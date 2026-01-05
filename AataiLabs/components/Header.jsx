import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-10">
      <ul className="flex justify-between items-center h-10">
        <li className="ml-4">
          <Link to="/">
            <img className="w-32" src="/assets/LabsLogo.png" alt="Logo" />
          </Link>
        </li>

        <li className="flex items-center space-x-3 mr-20">
          <img className="w-8 h-8" src="/assets/Home.png" alt="Home" />
          <img className="w-8 h-8" src="/assets/shop.png" alt="Shop" />
          <img className="w-9 h-9" src="/assets/contact.png" alt="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;