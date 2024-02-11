import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black border-black flex flex-row items-center justify-between h-12 mb-5">
      <Link to="/">
        <div className="w-12 h-12 bg-white border-b-black border-b-2 flex justify-center items-center">
          <span className="text-black text-center">MNC</span>
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
      <div className="flex">
        <a href="https://www.linkedin.com/in/maximiliano-wullbrand-naddeo-a656a3257/">
          <span className="text-white mx-1">IN</span>
        </a>
        <a href="https://github.com/mwnCoding">
          <span className="text-white mx-1">GH</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
