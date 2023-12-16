"use client";
import { editCardBlue, editCardWhite, myPic } from "@/assets";
 
import { Button, Rate } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ClientsHeadings from './ClientsHeadings'

const Clients = () => {
    const btnStyles: string =
    "border-grey-700 text-[--color-primary]  border-[--color-primary] flex items-center justify-center focus:bg-[--color-primary] focus:text-white hover:bg-[--color-primary] hover:!text-white   w-[50px] h-[50px]";
  const cards: string[] = [
    "Website / App Design UX / UI Design 1",
    "Website / App Design UX / UI Design 2",
    "Website / App Design UX / UI Design 3",
    "Website / App Design UX / UI Design 3",
  ];
  const [active, setActive] = useState(0);
  console.log(active);
  const handleClick = (arg: number) => {
    const scrollElement: HTMLDivElement | null = document.getElementById(
      "scrollID1"
    ) as HTMLDivElement;
  
    if (scrollElement) {
      const scrollAmount: number = 700;
  
      if (arg === 0) {
        // Scroll right
        scrollElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setActive((prevActive) => prevActive + 1);
      } else {
        // Scroll left
        scrollElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setActive((prevActive) => prevActive - 1);
      }
    }
  };
  return (
    <div className='w-full m-0 h-auto' data-aos="fade-down">
        <ClientsHeadings/>

      <div  data-aos="fade-down">
        <div  className="w-full flex gap-5   justify-center mt-8 mb-8 px-[50px]">
          <Button
            disabled={active === 0}
            onClick={() =>   handleClick(1)}
            className={btnStyles}
            shape="circle"
          >
            <KeyboardBackspaceIcon />
          </Button>
          <Button
          autoFocus 
            disabled={active === 3}
            onClick={() => handleClick(0)}
            className={btnStyles}
            shape="circle"
          >
            <EastIcon />
          </Button>
        </div>
      </div>
      <div  data-aos="fade-down"
        id="scrollID1"
        className="w-full md:pl-[80px] p-10 mb-5 flex scrollBar overflow-scroll overflow-x gap-5"
      >
       
   

        {cards.map((car, ind) => {
         

          return (
            <div key={ind}
            onClick={()=>setActive(ind)}
              className={`${active === ind ? 'bg-[--color-primary]' : 'bg-white border'} cursor-pointer  p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-5 items-center md:w-[300px]   w-full h-auto rounded-md`}
            >
               
              <Image
                className=" w-[100px] rounded-full  "
                src={myPic}
                alt="strategy"
              />
              <Rate disabled defaultValue={5} />
              
              <p className={`${active === ind ? ' text-white' : 'text-black'} text-[16px] leading-[20px] text-left  font-light`}>
              Lorem ipsum dolor sit amet consectetur. Tortor odio purus morbi amet.
               Donec bibendum et cursus felis sollicitudin vulputate
                cursus odio. Aliquam cursus eu in aliquam nisl
              </p>
              <h5 className={`${active===ind?'text-white':'text-black' } font-medium text-[16px]`}>Cameron Williamson</h5>
              <p className={`${active===ind?'text-white':'text-[grey]' } text-[16px]`}>Marketing Coordinator</p>
               
            </div>
          );
        })}
     
      </div>
 
    </div>
  );
  
}

export default Clients