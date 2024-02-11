import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <nav className="bg-black border-black flex flex-row items-center justify-between h-12 mb-8 pr-2">
      <Link to="/">
        <div className="w-12 h-12 bg-gnarly-grey border-b-black border-b-2 flex justify-center items-center">
          <span className="text-white text-center">MNC</span>
        </div>
      </Link>
      <div>
        <Link to="/about">
          <span className="text-white mx-1">about</span>
        </Link>
        <Link to="/projects">
          <span className="text-white mx-1">projects</span>
        </Link>
        <Link to="/cv">
          <span className="text-white mx-1">cv</span>
        </Link>
        <Link to="/contact">
          <span className="text-white mx-1">contact</span>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <SocialIcon
          bgColor="#2F393A"
          style={{ height: 30, width: 30 }}
          url="https://www.linkedin.com/in/maximiliano-wullbrand-naddeo-a656a3257/"
          className="mr-2"
        />
        <SocialIcon
          bgColor="#2F393A"
          style={{ height: 30, width: 30 }}
          url="https://github.com/mwnCoding"
        />
      </div>
    </nav>
  );
}

export default Navbar;
