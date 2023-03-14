import React from "react";

const Navbar = () => {
  return (
    // navbar started
    <nav className="flex justify-center  p-2">
      <div className="container  flex justify-between">
        {/* Symbol div */}
        <div className="flex space-x-1">
          <span className="text-2xl font-bold">Time</span>
          <span className="text-2xl font-bold text-orange-500">Zone</span>
        </div>
        {/* symbol div over */}

        {/* menu div */}
        <div className="flex items-center">
          <div className="bg-black text-white font-semibold space-x-2 px-2 flex items-center">
            <span>Menu</span>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
    // navbar ended
  );
};

export default Navbar;
