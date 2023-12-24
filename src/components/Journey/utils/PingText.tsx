import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'


const PingText = ({x,y,text,year,infinite,currentDestination}:{x:number,y:number,text:string,year:string,infinite?:boolean,currentDestination?:boolean}) => {

    const [ping,setPing] = useState(false);
    const variants = {
        hidden: { 
           
            opacity: 0 
        },
        exit: { 
            opacity: 0 
        },
        show: {
          opacity: 1,
          scale:1.1,
          transition: {
            delayChildren: 0.5
          }
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            setPing(!ping);
        },800)
    },[ping])

  return (
    <div  style={{top:`${y}%`, left:`${x}%`}} className="absolute">
        <div className="flex relative">
               <AnimatePresence>{ping && <motion.div variants={variants} animate='show' initial='hidden' exit='exit' className=" w-[45px]  h-[45px] absolute top-[-5px] left-[-12px] bg-[#ffffff89] translate-x-[-20%] rounded-full"></motion.div>}</AnimatePresence> 
                <div className="w-[35px] h-[35px]  translate-x-[-20%] bg-black border-[5px] border-white rounded-full"></div>
                <div className="absolute top-[5px] left-[40px] w-[150px] ">{text}</div>
                <div className={`${infinite ? "text-[1.2rem]" : ''} absolute top-[5px] left-[-60px] w-[150px] text-left`}>{year}</div>
            
        </div>
    </div>
  )
}

export default PingText