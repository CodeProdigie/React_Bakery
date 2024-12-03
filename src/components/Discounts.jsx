import discountlogo from "../assets/images/food-6.png";

const Discounts = ({ theme }) => {
  return (
    <div
      className={
        theme
          ? "mt-10 w-full  rounded-lg py-8 sm:py-6 px-4 bg-black transition duration-500"
          : "mt-10 w-full  rounded-lg py-8 sm:py-6 px-4 bg-gradient-to-r from-slate-600 to-blue-200 transition duration-500"
      }
    >
      <h2 className="text-center text-2xl font-semibold bg-gradient-to-r from-slate-600 to-blue-400 text-transparent bg-clip-text py-6 lg:py-0">
        Discounts
      </h2>
      <div className=" flex flex-wrap justify-around">
        <div className="flex flex-col items-center justify-center py-5 lg:py-0">
          <h2 className="text-white font-normal">
            Get Daily Updates About Our Products
          </h2>
          <input
            type="email"
            className="max-w-72 w-full h-10 py-2 px-5 outline-none border-x-2 border-y-2 border-slate-300 rounded-md placeholder:divide-white"
            placeholder="enter your email"
          />
          <button className="max-w-48 w-full h-10 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-white cursor-pointer">
            Submit Now
          </button>
        </div>
        <div className="flex flex-wrap items-center">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 text-transparent bg-clip-text sm:text-center">
            60%
          </h2>
          <img src={discountlogo} className="w-80 h-80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discounts;
