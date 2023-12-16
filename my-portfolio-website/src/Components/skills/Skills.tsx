'use client'
import React,{useEffect} from "react";
import {
  css,
  html,
  github,
  javascript,
  react,
  next,
  bootstrap,
  tailwind,
} from "../../assets";
import Image from "next/image";
import "aos/dist/aos.css"; // Add the AOS styles
import AOS from "aos";
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const iconStyles =  "w-[100px] h-[100px]";
  const divStyles = "flex flex-col items-center p-5";
  const paraStyles = "text-[#555] font-semibold";
  return (
    <div data-aos="zoom-in" className=" mt-[80px] bg-[#F8F8F8] sm:grid grid-rows-4 lg:grid-rows-2 grid-flow-col justify-around h-auto px-5 w-full ">
      <div className={divStyles}>
        <Image className={iconStyles} src={react} alt="CSS" />

        <p className={paraStyles}>React Js</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={javascript} alt="CSS" />
        <p className={paraStyles}>JavaScript</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={next} alt="CSS" />
        <p className={paraStyles}>Next Js</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={tailwind} alt="CSS" />
        <p className={paraStyles}>Tailwind CSS</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={bootstrap} alt="CSS" />
        <p className={paraStyles}>Bootstrap</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={html} alt="CSS" />
        <p className={paraStyles}>HTML 5</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={css} alt="CSS" />
        <p className={paraStyles}>CSS</p>
      </div>
      <div className={divStyles}>
        <Image className={iconStyles} src={github} alt="CSS" />
        <p className={paraStyles}>GitHub</p>
      </div>
    </div>
  );
};

export default Skills;
