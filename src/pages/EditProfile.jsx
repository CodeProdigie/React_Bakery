
import Sidebar from '../components/Sidebar'
import HeaderDash from '../components/HeaderDash'
import imgupdate from "../assets/images/pasta.jpg"


const EditProfile = () => {
  return (
    <>
    <Sidebar/>
    <HeaderDash/>
    <div className="absolute top-28 left-64 max-w-4xl w-full">
        <h2 className="text-2xl text-stone-400 underline font-normal">
          Update Profile
        </h2>
        <div className="mt-9 max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="max-w-2xl">
          <input
            type="text" placeholder='Enter Your User Name'
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3 "
          />
          <input
            type="password"
            placeholder="Enter Your Former Password"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3"
          />
          <input
            type="text"
            placeholder="Enter Your New Password"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3"
          />
          <input
            type="text"
            placeholder="Confirm Your New Password"
            className="w-full mb-6 h-12 border border-slate-400 rounded-md py-1 px-3"
          />
          <button className="py-2 px-4 rounded-md cursor-pointer bg-slate-500 text-white transition duration-400 hover:bg-slate-800">
            Update Profile Now
          </button>
          </div>
          <div className="relative bottom-10 -right-14">
            <img src={imgupdate} className="w-64 h-64" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile