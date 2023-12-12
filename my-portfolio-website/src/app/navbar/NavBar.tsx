import Image from "next/image";
import logo from "../../assets/react.svg";
import { Button } from 'antd';
import Hamburger from "./Hamburger";
import   { useState } from "react";
'use client'
 const NavBar = () => {
  const [ham , setHam] = useState(false)
const handleHamburger=()=>{

}


  return (
    <div className="w-full px-8 py-2 flex justify-between  mt-8 h-10">
      <div className="basis-1/3 w-20 h-full flex-0 flex  items-center mr-12  gap-1">
        <Image alt="company" src={logo} />{" "}
        <h6 className="font-Zen Kaku Gothic Antique  text-[24px] text-[#333] font-black">
          MaeroSoft
        </h6>{" "}
      </div>
      <div className="sm:flex flex-grow justify-between hidden items-center font-sans font-medium text-[18px] text-[#333]  list-none    ">
        <li className="  ">Home</li>
        <li  className="font-sans font-medium text-[18px] text-[#333] ">About</li>
        <li  className="font-sans font-medium text-[18px] text-[#333] ">Services</li>
        <li  className="font-sans font-medium text-[18px] text-[#333]  ">Contact me</li>
        <Button type="primary" className="text-[20px] bg-[#07F] font-sans rounded-full text-center px-8 h-12 font-bold ml-12">Let's chat</Button >
      </div>
      <Button  onclick={handleHamburger}  className="sm:hidden flex hover:bg-slate-100 w-15 items-center justify-center   rounded-lg text-white"><Hamburger/></Button>
    </div>
  );
};

export default NavBar;
