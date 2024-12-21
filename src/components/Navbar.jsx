import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav w-full bg-purple-700 flex justify-between p-5 font-bold text-white items-center px-8 ">
            <div className="logo text-2xl"><h1>TaskHandy</h1></div>
            <div className="categories flex gap-6"><h1>Home</h1><h1>Your Tasks</h1></div>
      </div>
    </div>
  )
}

export default Navbar
