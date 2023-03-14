import React from "react";

const PopularItems = () => {
  return (
    // popular items main div start
    <div className="flex justify-center">
      <div className="container grid px-2 justify-center">
        {/* new arrival info div */}
        <div className="grid justify-center text-center space-y-5 mt-5">
          <span className="font-bold text-2xl">Popular Items</span>
          <span className="px-2">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore . Quis ipsum suspendisse ultrices
            gravida.
          </span>
        </div>
        {/* popular products show case */}
        <div className="grid justify-center mt-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
            {/* popular 1 */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular1.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
            {/* popular 2  */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular2.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
            {/* popular 3 */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular3.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
            {/* popular 4 */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular4.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
            {/* popular 5 */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular5.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
            {/* popular 6 */}
            <div className="grid justify-center">
                <img src={require('../../Assets/Images/popular6.png')} alt="" />
                <div className="grid  text-center font-bold space-y-4">
                    <span className="text-lg">Rolex Ampmaster Pro</span>
                    <span className="text-slate-700">$ 20999</span>
                </div>
            </div>
        </div>
      </div>
    </div>
    // popular items main div end
  );
};

export default PopularItems;
