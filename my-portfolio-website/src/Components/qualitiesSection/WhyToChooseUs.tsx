import React from 'react'
import Boxes from './Boxes';
 
const WhyToChooseUs = () => {
    const arr:number[]=[1,2,3,4];
  return (
    <div className='bg-[--color-primary] w-full   h-auto px-[80px] py-[100px] flex flex-col items-center'>
        <div className='md:w-[55%] w-full text-center '>
            <p className="text-white font-semibold text-[20px] tracking-[2px] leading-normal mb-4">OUR MILESTONE</p>
            <h1 className="text-white font-bold text-[50px] leading-[50px] mb-5">
            What sets our studio apart for your projects?
            </h1>
        </div>
        <div className='mt-[100px] flex md:flex-row flex-col w-full   gap-8 '>
        {
            arr.map((_,ind)=>{
                return <Boxes key={ind}/>
            })
        }
        </div>
        

    </div>
  )
}

export default WhyToChooseUs