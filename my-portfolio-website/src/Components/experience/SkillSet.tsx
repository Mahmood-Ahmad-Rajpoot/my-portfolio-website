"use client";
import {   Button } from "antd";
import React, { useState } from "react";

const SkillSet = () => {
  const [skillSet, setSkillSet] = useState(1);
const btnStyles = " text-[18px] md:w-[160px] w-full focus:text-white hover:text-white   focus:bg-[--color-primary]  font-sans   text-center   h-[50px]   font-semibold  "
  
  return (
    <div>

    
    <div className="gap-8 flex md:flex-row flex-col w-full">
      <Button
      onClick={()=>setSkillSet(1)}
        shape="round"
        className={btnStyles}
      >
        Main Skills
      </Button>
      <Button
       onClick={()=>setSkillSet(2)}
        shape="round"
        className={btnStyles}
      >
        Awards
      </Button>
      <Button
        onClick={()=>setSkillSet(3)}
        shape="round"
        focus={skillSet===3}
        className={btnStyles}
      >
        Education
      </Button>
    </div>
    
    {skillSet===1&&<h1>Main skills</h1>}
    {skillSet===2&&<h1>Awards</h1>}
   { skillSet===3&&<h1>Education</h1>}
    
    </div>
  );
};

export default SkillSet;
