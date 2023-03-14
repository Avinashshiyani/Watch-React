import React from "react";

const PerfectStyle = () => {
  return (
    // perfect style starts
    <div className="flex justify-center">
      {/* container div starts */}
      <div className="container grid bg-slate-100 px-2">
        <div className="w-full flex justify-end space-x-3">
          {/* icons of perfect style starts */}
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>
            <i className="fa-regular fa-user"></i>
          </span>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          {/* icons of perfect style ends */}
        </div>

        {/* info div starts */}
        <div className="  flex justify-between bg-slate-100">
          <div className="grid px-3 justify-center p-5 space-y-5 sm:w-1/2 sm:space-y-0 md:py-16">
            {/* select your style div */}
            <div className="text-2xl font-bold sm:text-4xl sm:max-w-md">
              <span>Select Your New Perfect Style</span>
            </div>
            {/* select style info div */}
            <div className="text-md sm:text-xl md:text-2xl md:max-w-lg sm:max-w-xl max-w-lg">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                unde facere animi perspiciatis sit ex .
              </span>
            </div>
            {/* button div */}
            <div className="">
              <button className="bg-black text-white px-4 py-2">
                Shop Now
              </button>
            </div>
          </div>
          {/* hidden div in mobile */}
          <div className="hidden sm:block sm:flex sm:justify-center sm:mb-8 sm:w-1/2">
            <div className="p-5 sm:grid sm:justify-center">
              <div className="bg-orange-500 h-full w-1/2 text-orange-500">0</div>
              <img src={require('../../Assets/Images/popular4.png')} alt="" />
              <div className="bg-orange-500 h-full w-1/2 text-orange-500">0</div>
            </div>
          </div>
        </div>
        {/* info div ends */}
      </div>
      {/* container div ends */}
    </div>
    // perfect style ends
  );
};

export default PerfectStyle;
