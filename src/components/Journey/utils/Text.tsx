import React from 'react'


const Text = ({x,y,text,year,infinite,currentDestination}:{x:number,y:number,text:string,year:string,infinite?:boolean,currentDestination?:boolean}) => {

  return (
    <div  style={{top:`${y}%`, left:`${x}%`}} className="absolute">
        <div className="flex relative">
        {currentDestination ? 
        <div className="w-[35px] h-[35px] md:w-[30px] md:h-[30px]  translate-x-[-20%] bg-black border-[5px] md:border-[4px] border-white rounded-full"></div>
        :<div className="w-[35px] h-[35px] md:w-[30px] md:h-[30px]  translate-x-[-20%] bg-white rounded-full"></div>
       }
          <div className="absolute top-[5px] left-[40px] w-[150px] md:text-[0.9rem] ">{text}</div>
          <div className={`${infinite ? "text-[1.2rem]" : ''} absolute top-[5px] left-[-60px] md:text-[0.9rem] w-[150px] text-left`}>{year}</div>

        </div>
    </div>
  )
}

export default Text