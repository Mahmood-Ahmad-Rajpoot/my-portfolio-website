'use client'
// Ensure you have the necessary type declarations for Ant Design components
import React, { useEffect,   } from "react";
import NavBar from "./navbar/NavBar";
import Introduction from "./introduction/Introduction";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import ExploringMySkills from "./ExploringMySkills/ExploringMySkills";
import AOS from "aos";
import "aos/dist/aos.css"; // Add the AOS styles
import Strategies from "./ExploringMySkills/strategies/Strategies";
import WhyToChooseUs from "./qualitiesSection/WhyToChooseUs";
import Projects from "./Projects/Projects";
import Clients from "./Clients/Clients";
import ContactUs from "./ContactUs/ContactUs";
 
const Main: React.FC = () => {
 

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <Introduction />
      <Skills />
      <Experience />
      <ExploringMySkills />
      <Strategies />
      <WhyToChooseUs />
      <Projects />
      <Clients/>
      <ContactUs/>
 
       
    </div>
  );
};

export default Main;


