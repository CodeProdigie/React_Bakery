import logo from "../assets/images/food-1.png";
import { NavItems } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme, toggletheme, countqty}) => {
  const [menu, setMenu] = useState(false);

  const navmenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="sticky z-20 top-0 w-full p-3 h-15  border-b border-grey-200 rounded-md bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} className="w-10 h-10" />
            <h2 className="text-3xl sm:text-2xl text-blue-400">Bakery</h2>
          </div>
          <ul className="hidden lg:flex">
            {NavItems.map((navmenu, index) => (
              <li key={index} className="px-2 text-lg  font-normal text-md">
                <a href={navmenu.href} className="text-white hover:text-blue-400 transition duration-200">
                  {navmenu.menu}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex">
            <i
              className={
                theme
                  ? "bx bx-sun text-blue-400 text-2xl cursor-pointer"
                  : "bx bx-moon text-blue-400 text-2xl cursor-pointer"
              }
              onClick={toggletheme}
            ></i>
            <Link to="/Checkout">
            <div className="cursor-pointer">
              <i className="bx bx-cart  text-blue-400 text-3xl"></i>
              <span className="text-xl  text-blue-400">{countqty}</span>
            </div>
            </Link>
            <i
              className={
                menu
                  ? "bx bx-x lg:hidden text-white text-3xl cursor-pointer"
                  : "bx bx-menu lg:hidden text-white text-3xl cursor-pointer"
              }
              onClick={navmenu}
            ></i>
          </div>
        </div>
        {menu && (
          <div className="fixed right-0 z-20 w-full bg-black border border-t-white rounded-md  flex flex-col justify-center items-center lg:hidden">
            <ul>
              {NavItems.map((item, index) => (
                <li key={index} className="py-4 text-xl font-normal">
                  <a href={item.href} className="text-white hover:text-blue-400 transition duration-200">
                    {item.menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
