import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderDash from "../components/HeaderDash";
import imgadd from "../assets/images/food-4.png"

const Addproducts = () => {
  return (
    <>
      <Sidebar />
      <HeaderDash />
      <div className="absolute top-28 left-64 max-w-4xl w-full">
        <h2 className="text-2xl text-stone-400 underline font-normal">
          Add Products
        </h2>
        <div className="mt-9 max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="max-w-2xl">
          <input
            type="file"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3 file:border-none file:bg-transparent file:cursor-pointer "
          />
          <input
            type="text"
            placeholder="Enter name of product"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3"
          />
          <input
            type="text"
            placeholder="Enter Product's Price"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3"
          />
          <button className="py-2 px-4 rounded-md cursor-pointer bg-slate-500 text-white transition duration-400 hover:bg-slate-800">
            Add product
          </button>
          </div>
          <div className="relative bottom-10 -right-10">
            <img src={imgadd} className="w-60 h-60" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproducts;
