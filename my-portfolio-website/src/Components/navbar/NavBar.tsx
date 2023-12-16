"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
 import { Button } from "antd";
 
import Hamburger from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import { CloseOutlined } from "@ant-design/icons";
import { useOutsideClick } from "./useOutsideClick";
import { react } from "@/assets";

const NavBar = () => {
  const [ham, setHam] = useState(false);
  const ref = useOutsideClick(() => {
    setHam(false);
  });
  const styles =
    "font-sans font-medium xl:text-[18px] text-[15px] text-[--color-secondary] hover:cursor-pointer hover:text-[--color-primary] hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:decoration-[#07F]";
  return (
    <div ref={ref} className="flex flex-col sm:items-end items-center px-8 mb-11  ">
      <div className="w-full py-2 flex justify-between gap-5  mt-8 h-10">
        <div className="    h-full flex-0 flex  items-center   gap-1">
          <Image width={80} alt="company" src={react} />
          <h6 className="font-Zen Kaku Gothic Antique  text-[24px] text-[#333] font-black">
            MaeroSoft
          </h6>{" "}
        </div>
        <div className="md:flex   justify-between hidden items-center      ">
          <div className="md:flex gap-8  hidden items-center   list-none    ">
            <li className={styles}>Home</li>
            <li className={styles}>About</li>
            <li className={styles}>Services</li>
            <li className={styles}>Contact me</li>
          </div>
          <Button
            type="primary"
          
            className="xl:text-[18px] text-[15px] bg-[--color-primary] ml-10 font-sans rounded-full text-center px-8 h-12 font-bold  "
          >
            Let's chat
          </Button>
        </div>
        <Button
          style={{ color: "black" }}
          onClick={() => setHam(!ham)}
          className="md:hidden flex hover:bg-slate-100 text-[--color-secondary] items-center justify-center   rounded-full text-white"
        >
          {ham ? <CloseOutlined /> : <Hamburger />}
        </Button>
      </div>              
      {ham && (
        <div className="md:hidden  w-full mt-3 bg-blue-100 rounded-md flex items-center justify-center">
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default NavBar;
