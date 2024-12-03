import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Checkout = ({product}) => {

  return (
    <>
    <Navbar/>
   <div className="flex flex-wrap  justify-between mt-10 py-3 px-5">
       <div className="max-w-xl w-full border text-center py-2 px-3 ">
          <h2 className="text-2xl font-normal">Your Products</h2>
          <ul className="flex flex-wrap mt-10">
            {product.map((item,index)=>(
              <div className="w-full">
              <li key={index} className="flex items-center justify-around mb-4">
                 <img src={item.Image} className="w-12 h-12 rounded" alt="Image" />
                 <h2>{item.name}</h2>
                 <span>${item.price}</span>
              </li>
              </div>
            ))}
          </ul>
       </div>
       <div className="flex flex-col py-3 px-2 border-2 border-blue-400 w-full max-w-xl rounded-lg mt-4 lg:mt-0">
        <h2 className="text-center text-2xl font-normal ">Billing details</h2>
        <div className="mt-4 flex lg:flex-row md:flex-col lg:gap-3 lg:relative left-8">
           <div className="py-1">
           <h2>First Name</h2>
           <input type="text" placeholder="" className="md:max-w-96  px-3 py-2 outline-none border border-slate-400 rounded-md w-full" />
           </div>
           <div className="py-1">
           <h2>Last Name</h2>
           <input type="text" placeholder="" className="md:max-w-96 px-3 py-2 outline-none border border-slate-400 rounded-md w-full" />
           </div>
         </div>
        <div className="flex flex-col mt-4">
          <h2 className="lg:relative left-8">Country / Region</h2>
          <select className="mt-3 max-w-96 lg:relative left-8 border py-2 px-3 rounded-md border-slate-400 outline-none cursor-pointer">
            <option value="#" className="max-w-96">Select a Country</option>
            <option value="Cameroon" className="max-w-96">Cameroon</option>
            <option value="Canada" className="max-w-96">Canada</option>
            <option value="United States" className="max-w-96">United States</option>
          </select>
        </div>
         <div className="mt-4 flex flex-col lg:relative left-8">
           <div className="py-1">
           <h2>Company Name / optional</h2>
           <input type="text" placeholder="" className="max-w-96 px-3 py-2 outline-none border border-slate-400 rounded-md w-full" />
           </div>
           <div className="py-1">
           <h2>Phone Number</h2>
           <input type="number" placeholder="+237..." className="max-w-96 px-3 py-2 outline-none border border-slate-400 rounded-md w-full" />
           </div>
           <div className="py-1">
           <h2>Email Address</h2>
           <input type="email" placeholder="E.g brandcode@gmail.com" className="w-full max-w-96 px-3 py-2 outline-none border border-slate-400 rounded-md" />
           </div>
         </div>
         <button type="submit" className="mt-4 lg:relative left-8 max-w-96 w-full rounded-md px-5 py-2 bg-orange-500 hover:bg-slate-500 text-shite transition duration-300 cursor-pointer">Place Order</button>
       </div>
   </div>
   <Footer/>
    </>
  )
}

export default Checkout