import Image from "next/image";
import React from "react";
import { myPic } from "../../assets";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Introduction = () => {
  return (
    <div className="bg-white w-full px-8 pt-[100px] flex md:flex-row flex-col-reverse gap-3  justify-around">
      <div className="md:text-left text-center md:w-1/2 w-full flex flex-col   ">
        <p className="text-[--color-secondary] font-semibold text-[25px] leading-normal">
          Welcome to my Portfolio
        </p>
        <h3 className="text-[--color-secondary] font-bold leading-[75px] text-[60px]">
          Hi I'm
        </h3>
        <h1 className="text-[--color-primary] font-bold leading-[75px] text-[60px]">
          Mahmood Ahmad
        </h1>
        <h3 className="text-[--color-secondary] font-bold leading-[75px] text-[60px]">
          Web Developer
        </h3>
        <p className="  w-full sm:text-justify text-center text-light text-[25px] text-[--color-secondary] leading-[35px] text-light">
          Collaborating with highly skilled individuals, our agency delivers
          top-quality services.
        </p>
        <div className="flex md:flex-row flex-col w-full justify-left mt-12 gap-8">
          <Button
            type="primary"
            shape="round"
            className=" text-[18px] md:w-[160px] w-full    bg-[--color-primary]  font-sans   text-center   h-[50px]   font-semibold  "
          >
            Hire me!
          </Button>
          <Button
            className=" text-[18px] md:w-[250px] w-full border-[--color-primary] text-[--color-primary]    hover:text-white font-sans   text-center   h-[50px]   font-semibold  "
            shape="round"
            icon={<DownloadOutlined />}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 shrink w-full mb-5 flex items-center justify-center  ">
        {" "}
        <Image
          className="rounded-full shrink-none "
          width={500}
          src={myPic}
          alt="my-Profile-pic"
        />{" "}
      </div>
    </div>
  );
};

export default Introduction;
