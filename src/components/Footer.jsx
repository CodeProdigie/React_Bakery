import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={
        theme
          ? "w-full py-3 px-4 bg-black flex items-center justify-center mt-10 rounded-md transition duration-500"
          : "w-full py-3 px-4 bg-gradient-to-r from-slate-600 to-blue-200 flex items-center justify-center mt-10 rounded-md transition duration-500"
      }
    >
      <p className="text-white text-xl font-light text-center">
        Copyright; &copy;2024 Designed by BrandCode
      </p>
    </footer>
  );
};

export default Footer;
