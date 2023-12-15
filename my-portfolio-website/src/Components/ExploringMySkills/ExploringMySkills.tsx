import { Button } from "antd";
import React from "react";

const ExploringMySkills = () => {
  return (
    <div data-aos="fade-up" className="w-full flex justify-center mt-[100px] px-4 py-2">
      <div className="md:w-[650px] w-full text-center  flex flex-col   ">
        <p className="text-[--color-primary] font-semibold text-[20px] tracking-[2px] leading-normal mb-5">
          SERVICES
        </p>
        <div className="flex items-center justify-center mb-5 flex-wrap gap-3">
          <h1 className="text-[--color-secondary] font-bold leading-[50px] text-[50px] ">
            Exploring My Design 
          </h1>
          <h1 className="text-[--color-primary] font-bold leading-[50px] text-[50px]">
            Skills
          </h1>
        </div>

        <p className="  w-full  text-center text-light text-[18px] text-[--color-secondary] leading-[25px] text-light">
          We transform your ideas into a distinctive web project that both
          inspires you and captivates your customers
        </p>
      </div>
    </div>
  );
};

export default ExploringMySkills;