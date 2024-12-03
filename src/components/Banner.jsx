import background from "../assets/images/burger1.jpg";

const Banner = () => {
  return (
    <div
      className=" w-full h-full text-center text-white py-52"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-5xl text-blue-700 font-bold">
        Welcome to R-rated Bakery
      </h2>
      <p className="text-xl text-slate-400 font-semibold my-2">
        We offer the best deals you can find out there
      </p>
      <button className="py-2 px-6 border rounded-2xl cursor-pointer bg-gradient-to-r from-orange-400 to-orange-500">
        Join us today 
      </button>
    </div>
  );
};

export default Banner;
