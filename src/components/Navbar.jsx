function Navbar() {
  return (
    <nav className="bg-black border-white flex flex-row items-center justify-between mb-5">
      <div className="w-12 h-12 bg-white flex justify-center items-center">
        <span className="text-black text-center">MNC</span>
      </div>
      <div>
        <span className="text-white mx-1">about</span>
        <span className="text-white mx-1">projects</span>
        <span className="text-white mx-1">cv</span>
        <span className="text-white mx-1">contact</span>
      </div>
      <div className="flex">
        <span className="text-white mx-1">IN</span>
        <span className="text-white mx-1">GH</span>
      </div>
    </nav>
  );
}

export default Navbar;
