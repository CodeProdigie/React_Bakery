import welcomeimg from "../assets/images/food-2.png"

const WelcomeAdmin = () => {
  return (
    <div className="absolute top-64 left-1/2 max-w-72 w-full ">
       <img src={welcomeimg}  className="w-44 h-44 rounded" alt="" />
       <p className=" text-2xl text-gray-300 font-semibold -translate-x-10">Welcome back Admin</p>
        </div>
  )
}

export default WelcomeAdmin