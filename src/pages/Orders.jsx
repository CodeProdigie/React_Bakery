import React from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDash from '../components/HeaderDash'
import img1 from "../assets/images/food-2.png"
import img2 from "../assets/images/food-3.png"
import img3 from "../assets/images/food-5.png"
import img4 from "../assets/images/food-6.png"

const Orders = () => {
  return (
    <>
    <Sidebar/>
    <HeaderDash/>
    <div className='absolute top-32 left-96 max-w-2xl w-full py-2'>
      <h2 className='text-2xl font-normal text-stone-400 underline'>Recent Orders</h2>
       <div className='mt-10 w-full -translate-x-10'>
         <li className='flex flex-1 items-center justify-around mb-3'>
           <img src={img1} className='w-16 h-16' alt="" />
           <h2 className='text-slate-500'>Pizza round</h2>
           <span className='text-slate-500'>$ 300</span>
           <div className='flex gap-2'>
             <i className='bx bx-trash font-medium text-xl text-red-500 cursor-pointer'></i>
             <i className='bx bx-check-square font-medium text-xl text-green-600 cursor-pointer'></i>
           </div>
         </li>
         <li className='flex flex-1 items-center justify-around mb-3'>
           <img src={img2} className='w-16 h-16' alt="" />
           <h2 className='text-slate-500'>Bread Burger</h2>
           <span className='text-slate-500'>$ 600</span>
           <div className='flex gap-2'>
             <i className='bx bx-trash font-medium text-xl text-red-500 cursor-pointer'></i>
             <i className='bx bx-check-square font-medium text-xl text-green-600 cursor-pointer'></i>
           </div>
         </li>
         <li className='flex flex-1 items-center justify-around mb-3'>
           <img src={img3} className='w-16 h-16' alt="" />
           <h2 className='text-slate-500'>Soda Drink</h2>
           <span className='text-slate-500'>$ 700</span>
           <div className='flex gap-2'>
             <i className='bx bx-trash font-medium text-xl text-red-500 cursor-pointer'></i>
             <i className='bx bx-check-square font-medium text-xl text-green-600 cursor-pointer'></i>
           </div>
         </li>
         <li className='flex flex-1 items-center justify-around mb-3'>
           <img src={img4} className='w-16 h-16' alt="" />
           <h2 className='text-slate-500'>Fried Cheese</h2>
           <span className='text-slate-500'>$ 900</span>
           <div className='flex gap-2'>
             <i className='bx bx-trash font-medium text-xl text-red-500 cursor-pointer'></i>
             <i className='bx bx-check-square font-medium text-xl text-green-600 cursor-pointer'></i>
           </div>
         </li>
       </div>
    </div>
    </>
  )
}
export default Orders