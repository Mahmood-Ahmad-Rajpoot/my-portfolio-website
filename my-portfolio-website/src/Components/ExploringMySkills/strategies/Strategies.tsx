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
  const activeBoxStyles: string =
    "bg-[--color-primary] p-[30px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col shrink-0 gap-5  md:w-[400px] md:h-[400px] w-full h-auto rounded-md";
  const disableBoxStyles: string =
    "border border-solid shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-1 p-[30px] flex flex-col shrink-0 gap-5  md:w-[400px] md:h-[400px] w-full h-auto rounded-md";
  const activeTitle: string = "text-[25px] text-white font-semibold ";
  const disableTitle: string = "text-[25px] text-black font-semibold ";
  const activePara: string =
    "text-[18px] leading-[28px] text-white font-light ";
  const disablePara: string =
    "text-[18px] leading-[28px] text-black font-light ";
  const activeBtn: string = "gap-2 flex text-white pl-0";
  const disableBtn: string = "gap-2 flex text-[--color-primary] pl-0";
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
      const scrollAmount = 250;

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
            onClick={() =>   handleClick(1)}
            className={btnStyles}
            shape="circle"
          >
            <KeyboardBackspaceIcon />
          </Button>
          <Button
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
        className="w-full md:pl-[80px] p-10 mb-5 flex scrollBar   overflow-scroll  gap-5"
      >
        {cards.map((car, ind) => {
          console.log(ind);

          return (
            <div
              className={active === ind ? activeBoxStyles : disableBoxStyles}
            >
              <Image
                className=" w-[100px]  "
                src={active === ind ? editCardWhite : editCardBlue}
                alt="strategy"
              />
              <h1 className={active === ind ? activeTitle : disableTitle}>
                Website / App Design UX / UI Design 1
              </h1>
              <p className={active === ind ? activePara : disablePara}>
                Creating Engaging Digital Experiences for Websites and Apps
                through UX/UI Design
              </p>
              <Button
                type="link"
                className={active === ind ? activeBtn : disableBtn}
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
