import { Categories } from "../constants";
import { ProductList } from "../constants";



const Products = ({ theme, Addtocart }) => {

  return (
    <div
      className={
        theme
          ? "mx-auto w-full py-3 px-3 mt-5 md:mt-3 bg-black transition duration-500"
          : "mx-auto w-full py-3 px-3 mt-5 md:mt-3 transition duration-500"
      }
    >
      <h2 className="text-center text-lg py-3 font-semibold bg-gradient-to-r from-slate-600 to-blue-400 text-transparent bg-clip-text">
        Featured Products
      </h2>
      <div className="text-center">
        <p className="text-slate-400 font-semibold">Categories</p>
        <div className="flex flex-wrap items-center justify-center mt-5">
          {Categories.map((category, index) => (
            <button
              className="mb-2 lg:mb-0 px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer  mx-auto hover:bg-orange-400 transition duration-300 "
              key={index}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap">
          {ProductList.map((item) => (
            <div className="w-full lg:w-1/4 sm:w-1/2" key={item.id}>
              <div className="px-3 py-3 border border-transparent border-blue-300 rounded-md ml-1 my-2">
                <div className="flex items-center justify-around">
                  <img src={item.Image} className="w-24 h-24" alt="" />
                  <div className="flex flex-col">
                    <h2 className={theme ? "text-white" : "text-black"}>
                      {item.name}
                    </h2>
                    <p className={theme ? "text-white" : "text-black"}>
                      Price: $<span>{item.price}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <select className="cursor-pointer outline-none">
                    <option value="Select Quantity">Select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button
                    className="w-10 h-10 rounded-3xl bg-blue-500 py-2 px-1 text-white cursor-pointer hover:bg-orange-400 transition duration-300"
                    onClick={()=> Addtocart(item)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
