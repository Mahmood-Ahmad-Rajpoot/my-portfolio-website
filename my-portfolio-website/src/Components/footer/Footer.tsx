'use client'
import { fb, gamail, linkedin, react } from "@/assets";
 import Image from "next/image";
import Link from "next/link";
 import React from "react";

const Footer = () => {
    // const navigate = useNavigate();
    const handleMail = () => {
        // Construct the mailto link
        const mailtoLink = 'mailto:mahmood.test.37@gmail.com?subject=Subject&body=Message%20body'; 
        // Open the mailto link in a new window
        window.open(mailtoLink, '_blank');
      };
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center justify-center gap-8">
      <div className="flex md:flex-row flex-col justify-center  gap-5 items-center">
        <div className="  h-full flex-0 flex   items-center   gap-1">
          <Image width={50} alt="company" src={react} />
          <h6 className="font-Zen Kaku Gothic Antique  text-[25px] leading-[25px] text-white font-black">
            MaeroSoft
          </h6>{" "}
          
        </div>
        <p className="text-[#79B2F2] text-[16px] leading-[16px]">© Copyright 2023. All Rights Reserved.</p>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-[18px] text-[#79B2F2] leading-[18px] font-semibold">FOLLOW US: {"  "}</p>
        <Link href={'https://web.facebook.com/mahmood.ahmad1222/'}>
        <Image  className="cursor-pointer"    src={fb} alt="facebook"></Image>

        </Link>
        <Link href={'https://www.linkedin.com/in/mahmood-ahmad-59a6b1223/'}>
        <Image  className="cursor-pointer"   src={linkedin} alt="linkedin"></Image>
        </Link>
         
        <Image onClick={handleMail} className="cursor-pointer"   src={gamail} alt="gmail"></Image>
 
      </div>
    </div>
  );
};

export default Footer;
