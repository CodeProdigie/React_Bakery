import React from "react";
import contactlogo from "../assets/images/food-5.png";

const Contact = ({ theme }) => {
  return (
    <div
      className={
        theme
          ? "mt-10 py-3 px-3 mx-auto bg-black text-white transition duration-500"
          : "mt-10 py-2 px-3 mx-auto transition duration-500"
      }
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-500">Contact Us</h2>
        <p className="text-xl text-blue-400">Get intouch with us for help</p>
        <div className="flex flex-wrap justify-around mt-10">
          <div>
            <h2>Customer Details</h2>
            <div className="mt-5 max-w-96">
              <input
                type="text"
                className="py-2 px-12 outline-none border border-slate-600 rounded mb-3 w-full text-black"
                placeholder="Enter your Full Names"
              />
              <input
                type="email"
                className="py-2 px-12 outline-none border border-slate-600 rounded mb-3 w-full text-black"
                placeholder="Enter your Email address"
              />
              <input
                type="number"
                className="py-2 px-12 outline-none border border-slate-600 rounded w-full text-black"
                placeholder="Enter your Number"
              />
              <button className="px-5 py-2 border border-slate-800 rounded-md cursor-pointer bg-red-500 text-white mt-2 hover:bg-slate-500 transition duration-500 w-full">
                Submit Details
              </button>
            </div>
          </div>
          <div className="py-16 md:py-0">
            <img src={contactlogo} className="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
