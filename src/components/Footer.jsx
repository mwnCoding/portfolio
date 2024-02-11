import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex justify-center items-center bg-black text-white w-screen py-4 mt-auto"
    >
      <Link to="/">
        <span className="mx-2">home</span>
      </Link>
      <Link to="/about">
        <span className="mx-2">about</span>
      </Link>
      <Link to="/projects">
        <span className="mx-2">projects</span>
      </Link>
      <Link to="/cv">
        <span className="mx-2">cv</span>
      </Link>
      <Link to="contact">
        <span>contact</span>
      </Link>
    </footer>
  );
}

export default Footer;
