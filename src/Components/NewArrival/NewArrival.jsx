import React from "react";

const NewArrival = () => {
  return (
    // new arrrival div start
    <div className="flex justify-center">
      {/* container div */}
      <div className="container grid justify-center px-2">
        {/* new arrival information/ heading */}
        <div className="font-bold flex  text-2xl py-10">
          <span>New Arrival</span>
        </div>
        {/* images div start */}

        <div className="grid justify-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
          <div className="">
            <img src={require("../../Assets/Images/new_product1.png")} alt="" />
            {/* info of product div */}
            <div className="grid  text-center py-5 space-y-4 font-bold">
              <span className="text-lg">Rolex Oliaster Buggyman </span>
              <span className="text-orange-500">$ 45999</span>
            </div>
          </div>
          {/* secont product */}
          <div className="">
            <img src={require("../../Assets/Images/new_product2.png")} alt="" />
            {/* info of product div */}
            <div className="grid  text-center py-5 space-y-4 font-bold">
              <span className="text-lg">Rolex Oliaster Buggyman </span>
              <span className="text-orange-500">$ 45999</span>
            </div>
          </div>
          {/* third product */}
          <div className="">
            <img src={require("../../Assets/Images/new_product3.png")} alt="" />
            {/* info of product div */}
            <div className="grid  text-center py-5 space-y-4 font-bold">
              <span className="text-lg">Rolex Oliaster Buggyman </span>
              <span className="text-orange-500">$ 45999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
