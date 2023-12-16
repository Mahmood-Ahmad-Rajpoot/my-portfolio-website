"use client";
import { editCardBlue, editCardWhite } from "@/assets";
import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import "./strategy.css";
const Strategies: React.FC = () => {
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
      "scrollID"
    ) as HTMLDivElement;

    if (scrollElement) {
      const scrollAmount: number = 700;

      if (arg === 0) {
        // Scroll right
        scrollElement.scrollLeft += scrollAmount;
        setActive((prevActive) => prevActive + 1);
      } else {
        // Scroll left
        scrollElement.scrollLeft -= scrollAmount;
        setActive((prevActive) => prevActive - 1);
      }
    }
  };
  return (
    <div data-aos="fade-down">
      <div>
        <div className="w-full flex gap-5 md:justify-end justify-center mt-8 mb-8 px-[50px]">
          <Button
            disabled={active === 0}
            onClick={() => handleClick(1)}
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
      <div
        id="scrollID"
        className="w-full  h-auto md:pl-[80px] p-10 mb-5 flex scrollBar overflow-scroll  gap-5"
      >
        {cards.map((car, ind) => {
          console.log(ind);

          return (
            <div
              key={ind}
              onClick={() => setActive(ind)}
              className={`${
                active === ind ? 'bg-[--color-primary]' : 'bg-white border'
              } cursor-pointer  p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-5  md:w-[400px]   w-full h-[400px] rounded-md`}
            >
              <Image
                className=" w-[100px]  "
                src={active === ind ? editCardWhite : editCardBlue}
                alt="strategy"
              />
              <h1 className={`${active === ind ?  'text-white' : 'text-black'} text-[25px]  font-semibold`}>
                Website / App Design UX / UI Design 1
              </h1>
              <p className={`${active === ind ? 'text-white' : 'text-black'} text-[18px] leading-[28px]  font-light `}>
                Creating Engaging Digital Experiences for Websites and Apps
                through UX/UI Design
              </p>
              <Button
                type="link"
                className={`${active===ind?' text-white':'text-[--color-primary] '} gap-2  flex pl-0 `}
              >
                Learn more <EastIcon />
              </Button>
            </div>
          );
        })}
      </div>

      {/* <div className='w-full md:pl-[80px] p-10 mb-5'>
          {cards.map((item: string, index: number) => (
            <StrategyCard key={index} title={item} />
          ))}
        </div> */}
    </div>
  );
};

export default Strategies;
