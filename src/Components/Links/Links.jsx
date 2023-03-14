import React from "react";

const Links = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="container grid px-2 justify-center px-20">
        <div className="grid space-y-4">
          <span className="text-2xl font-bold">
            Time
            <span className="text-orange-500">Zone</span>
          </span>
          <span>
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem
          </span>
        </div>
        {/* links started */}
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 ">

        <div className="grid mt-8">
          <div className="text-lg font-bold">
            <span>Quick Links</span>
          </div>
          <div className="space-y-4 grid mt-5 p-1 text-gray-700">
            <a href="#">About</a>
            <a href="#">Offers And Discound</a>
            <a href="#">Get Coupon</a>
            <a href="#">Contact US</a>
          </div>
        </div>

        {/* newProduct */}
        <div className="grid mt-8">
          <div className="text-lg font-bold">
            <span>New Product</span>
          </div>
          <div className="space-y-4 grid mt-5 p-1 text-gray-700">
            <a href="#">Women Cloth</a>
            <a href="#">Fashion Accessiories</a>
            <a href="#">Man Assessiories</a>
            <a href="#">Rubber Made Toys</a>
          </div>
        </div>
        {/* support */}
        <div className="grid mt-8">
          <div className="text-lg font-bold">
            <span>Support</span>
          </div>
          <div className="space-y-4 grid mt-5 p-1 text-gray-700">
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Terms And Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Report a Payment Issue</a>
          </div>
        </div>
        {/* copyright */}
        <div className="flex justify-center mt-8">
          <span>
            Copyright ©2023 All rights reserved | This template is made with by
            <span className="text-orange-500"> Avinash .</span>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
