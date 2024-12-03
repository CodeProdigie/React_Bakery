import aboutpic from "../assets/images/food-1.png";



const About = ({theme}) => {
  return (
    <div
      className={
        theme
          ? "text-center bg-black w-full mt-5 mx-auto px-10 rounded-md transition duration-500"
          : "text-center bg-gradient-to-r from-slate-600 to-blue-200 w-full mt-5 mx-auto px-10 rounded-md transition duration-500"
      }
    >
      <div className="relative top-10">
        <h2 className="text-center text-2xl text-slate-500 font-semibold fadedown">
          About Us
        </h2>
        <p className="text-slate-300">Get to discover us</p>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <div className="relative top-24 max-w-full w-96 p-2 text-white md:text-center">
          <p className="mb-3 md:text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quia excepturi aspernatur suscipit tempore, aut at
            quis assumenda nostrum repellat.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            cumque deleniti a quas quae sunt quos facilis delectus! Possimus,
            debitis maiores tempora voluptas magnam laborum earum numquam ut
            deleniti voluptatum.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            cumque deleniti a quas quae sunt quos facilis delectus! Possimus,
            debitis maiores tempora voluptas magnam laborum earum numquam ut
            deleniti voluptatum.
          </p>
          <button className="py-2 px-7 rounded-3xl bg-gradient-to-l from-slate-600 to-blue-200 cursor-pointer text-white hover:text-blue-950 transition duration-500">
            Read More
          </button>
        </div>
        <div className="py-20 lg:py-0">
          <img src={aboutpic} />
        </div>
      </div>
    </div>
  );
};

export default About;
