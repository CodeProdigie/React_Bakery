import React from "react";
import food from "../assets/images/food-1.png";
import { DashMenus } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuaccess, setMenuaccess] = useState(false);

  const AccessMenu = () => {
    setMenuaccess(!menuaccess);
  };
  return (
    <>
      <div className="max-w-56 w-full h-5/6  rounded-md">
        <div className="flex items-center justify-around py-2 border-b-4 rounded-b border-slate-400 bg-gradient-to-r from-stone-200 to-stone-100">
          <img src={food} className="w-14 h-14 rounded" alt="menu" />
          <i
            className={
              menuaccess
                ? "bx bx-menu-alt-right flex text-4xl cursor-pointer text-stone-600"
                : "bx bx-x  flex text-4xl cursor-pointer text-stone-600"
            }
            onClick={AccessMenu}
          ></i>
        </div>
        <div
          className={
            menuaccess
              ? "py-3 h-full w-full bg-gradient-to-r from-stone-100 to-stone-200 rounded-md transition duration-400 -translate-x-64"
              : "py-3 h-full w-full bg-stone-200 rounded-md transition duration-400 overflow-x-hidden"
          }
        >
          {DashMenus.map((menu) => (
            <div className="w-full">
             <Link to={menu.destination}>
             <li key={menu.id} className="flex items-center cursor-pointer py-1 mt-3 mb-11 bg-gray-300 rounded-md hover:bg-slate-200 transition duration-200  px-5">
                <i className={menu.classname}></i>
                <h2 className="mx-auto font-semibold text-base text-blue-400 flex items-center">
                  {menu.name}
                </h2>
              </li>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
