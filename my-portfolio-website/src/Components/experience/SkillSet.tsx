"use client";
import {   Button } from "antd";
import React, { useState } from "react";
import MainSkills from "./Skillset/MainSkills";
import Education from "./Skillset/Education";
import Awards from "./Skillset/Awards";

const SkillSet = () => {
  const [skillSet, setSkillSet] = useState(1);
const btnStyles = " text-[18px] md:w-[160px] w-full text-[--color-primary] border-[--color-primary] focus:text-white hover:!text-white hover:!bg-[--color-primary]   focus:!bg-[--color-primary]   text-center   h-[50px]   font-semibold  "
  
  return (
    <div className="">

    
    <div className="gap-8 flex md:flex-row flex-col flex-wrap justify-center w-full">
      <Button
       autoFocus={skillSet===1}
      onClick={()=>setSkillSet(1)}
        shape="round"
        className={btnStyles}
      >
        Main Skills
      </Button>
      <Button
        autoFocus={skillSet===2}
       onClick={()=>setSkillSet(2)}
        shape="round"
        className={btnStyles}
      >
        Awards
      </Button>
      <Button
        onClick={()=>setSkillSet(3)}
        shape="round"
        autoFocus={skillSet===3}
        
        className={btnStyles}
      >
        Education
      </Button>
    </div>
    
    {skillSet===1&&<MainSkills/>}
    {skillSet===2&&<Awards/>}
   { skillSet===3&&<Education/>}
    
    </div>
  );
};

export default SkillSet;
