'use client'
import { Button } from "antd";

 
const MobileMenu = () => {
    const styles =     "font-sans font-medium text-[18px]   text-[--color-secondary] hover:cursor-pointer hover:text-[--color-primary] hover:underline hover:underline-offset-8 hover:decoration-[3px] hover:decoration-[#07F]";

  return (
    <div className="list-none p-5 flex flex-col gap-5 items-center ">
      {" "}
      <li className={styles}>Home</li>
      <li className={styles}>About</li>
      <li className={styles}>
        Services
      </li>
      <li className={styles}>
        Contact me
      </li>
      <Button
          type="primary"
          className="text-[18px] bg-[#07F] font-sans rounded-full   px-5 h-12 font-bold  "
        >
          Let's chat
        </Button>
    </div>
  );
};

export default MobileMenu;
