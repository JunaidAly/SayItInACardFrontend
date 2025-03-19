import React from 'react'
import { IoMdCart } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
function Navbar() {
  return (
    <div className="w-full h-[100px] fixed z-50 shadow-[2px_2px_10px_0px_#00000040] flex items-center justify-center gap-28">
      {/* Web Icon */}
      <img
        className="w-[75px] h-[75px]"
        src="/assets/SayItIcon.png"
        alt="icon"
      />
      {/* Navbar */}
      <ul className="flex gap-6 relative left-20 w-[725px] h-[27px] font-poppins text-[18px] leading-[100%] cursor-pointer text-black font-medium">
        <li>Home</li>
        <li>Shop</li>
        <li>Special Cards</li>
        <li>About</li>
        <li>Dates</li>
        <li>Contacts</li>
        <li>Store Policy</li>
      </ul>

      {/* Search and  Icon */}
      <div className="flex gap-4 w-[115px] h-[35px] items-center ">
        <h5 className="font-inter font-[400] text-[20px] leading-[100%] text-black">
          Search
        </h5>
        <MdOutlineSearch className="w-[35px] h-[35px] text-[#13547E]" />
      </div>

      {/* Cart Icon */}
      <IoMdCart className="w-8 h-8 text-[#13547E]" />
    </div>
  );
}

export default Navbar