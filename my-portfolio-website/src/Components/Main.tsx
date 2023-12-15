'use client'
import React, { useEffect } from "react";
import NavBar from './navbar/NavBar'
import Introduction from './introduction/Introduction'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import ExploringMySkills from './ExploringMySkills/ExploringMySkills'
 
import "aos/dist/aos.css"; // Add the AOS styles
import AOS from "aos";
import Strategies from "./ExploringMySkills/strategies/Strategies";
import WhyToChooseUs from "./qualitiesSection/WhyToChooseUs";
import Projects from "./Projects/Projects";
 const Main = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
        <NavBar/>
        <Introduction/>
        <Skills/>
        <Experience/>
        <ExploringMySkills/>
        <Strategies/>
        <WhyToChooseUs/>
        <Projects/>
         </>
  )
}

export default Main