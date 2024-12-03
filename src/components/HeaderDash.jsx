import React from 'react'

const HeaderDash = () => {
  return (
    <div className='absolute top-0 left-56 max-w-4xl  w-full  py-7 rounded-md flex items-center justify-around'>
       <h2 className='text-xl text-stone-600 font-medium text-center'>Admin Panel</h2>
       <div className='flex items-center gap-2'>
        <h2 className='tracking-wider'>BrandCode</h2>
        <i className='bx bx-user text-xl font-semibold text-blue-500'></i>
       </div>
    </div>
  )
}

export default HeaderDash