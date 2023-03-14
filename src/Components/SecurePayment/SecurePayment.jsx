import React from "react";

const SecurePayment = () => {
  return (
    // secure payment div start
    <div className="flex justify-center mt-5">
      <div className="container grid justify-center px-2 bg-orange-500">
        <div className="text-white grid justify-center space-y-10 sm:grid-cols-2 sm:space-y-3 md:grid-cols-3 ">
          {/* information about product start */}
          <div className="grid space-y-5 px-4 p-5">
            <i class="fa-solid fa-box-open fa-2x"></i>
            <span className="font-bold text-lg">Free Shipping Method</span>
            <span>
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </span>
          </div>

          <div className="grid space-y-3 px-4">
            <i class="fa-solid fa-lock fa-2x"></i>
            <span className="font-bold text-lg">Secure Payment System</span>
            <span>
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </span>
          </div>

          <div className="grid space-y-3 px-4">
            <i class="fa-solid fa-rotate fa-2x"></i>
            <span className="font-bold text-lg">Free Shipping Method</span>
            <span>
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </span>
          </div>
        </div>
      </div>
    </div>
    // secure payment div end
  );
};

export default SecurePayment;
