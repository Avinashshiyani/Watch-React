import React from "react";

const WatchChoice = () => {
  return (
    <div className="grid justify-center">
      <div className="flex justify-between bg-slate-100">
        <div className="grid px-3 justify-center p-5 space-y-5 sm:w-1/2 sm:space-y-0 md:py-16">
          {/* select your style div */}
          <div className="text-2xl font-bold sm:text-4xl sm:max-w-md">
            <span>Watch of Choice</span>
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
            <button className="bg-orange-500 text-white px-4 py-3">
              Show Watches
            </button>
          </div>
        </div>
        {/* hidden div in mobile */}
        <div className="hidden sm:block sm:flex sm:justify-center sm:mb-8 sm:w-1/2">
          <div className="p-5 sm:grid sm:justify-center">
            <div className="bg-indigo-800 h-full w-1/2 text-indigo-800">0</div>
            <img src={require("../../Assets/Images/popular3.png")} alt="" />
            <div className="bg-indigo-800 h-full w-1/2 text-indigo-800">0</div>
          </div>
        </div>
      </div>
      {/*  show watch 2 */}
      <div className="  flex justify-between bg-slate-100">
        {/* hidden div in mobile */}
        <div className="hidden sm:block sm:flex sm:justify-center sm:mb-8 sm:w-1/2">
          <div className="p-5 sm:grid sm:justify-center">
            <div className="bg-black h-full w-1/2">0</div>
            <img src={require("../../Assets/Images/popular2.png")} alt="" />
            <div className="bg-black h-full w-1/2">0</div>
          </div>
        </div>

        <div className="grid px-3 justify-center p-5 sm:space-y-10 sm:w-1/2 sm:space-y-0 md:py-16 hidden sm:block">
          {/* select your style div */}
          <div className="text-2xl font-bold sm:text-4xl sm:max-w-md">
            <span>Watch of Choice</span>
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
            <button className="bg-orange-500 text-white px-4 py-3">
              Show Watches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchChoice;
