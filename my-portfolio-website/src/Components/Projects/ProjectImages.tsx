"use client";
import { Button } from "antd";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/assets";
import Buttons from "./Buttons";
const ProjectImages = () => {
  const [projects, setProjects] = useState<string>("All");
  console.log(projects);

  return (
    <div className="mb-[100px]">
      <Buttons func={setProjects} name={projects}/>

      {/* images */}
      <div
        data-aos="fade-up"
        className="w-full flex flex-wrap px-[50px] py-[80px] gap-5 justify-center "
      >
        {(projects === "Redux" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project1}
            alt="project1"
          />
        )}

        {(projects === "React" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project2}
            alt="project1"
          />
        )}
        {(projects === "Redux" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project3}
            alt="project1"
          />
        )}
        {(projects === "React" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project4}
            alt="project1"
          />
        )}
        {(projects === "React" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project5}
            alt="project1"
          />
        )}
        {(projects === "Next" || projects === "All") && (
          <Image
            className="md:w-[400px] flex shrink-0 w-full h-[360px] rounded-xl mb-5"
            src={project6}
            alt="project1"
          />
        )}
      </div>

      {/* Add other buttons as needed */}
    </div>
  );
};

export default ProjectImages;
