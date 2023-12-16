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
const ProjectImages = () => {
  const [projects, setProjects] = useState<string>("All");
  console.log(projects);

  return (
    <div className="mb-[100px]">
      <div
        data-aos="fade-up"
        className="w-full px-[80px] flex flex-wrap gap-8 justify-center"
      >
        <Button
          onClick={() => setProjects("All")}
          className={`w-[80px] px-3 rounded-full text-[15px] ${
            projects === "All"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          All
        </Button>

        <Button
          onClick={() => setProjects("React")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            projects === "React"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          React.js
        </Button>
        <Button
          onClick={() => setProjects("Redux")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            projects === "Redux"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          React/Redux
        </Button>
        <Button
          onClick={() => setProjects("Next")}
          className={`w-[150px] px-3 rounded-full text-[15px] ${
            projects === "Next"
              ? "text-white bg-[--color-primary] focus:bg-[--color-primary]"
              : "text-[--color-primary] focus:!bg-[--color-primary]"
          } cursor-pointer font-semibold border-1 border-[--color-primary] flex items-center justify-center`}
        >
          Next.js
        </Button>
      </div>

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
