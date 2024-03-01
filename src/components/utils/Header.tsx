import React from 'react'

interface Props{
    title:string,
    blue?:boolean
}

const Header:React.FC<Props> = ({title,blue}) => {
  return (
    <div className="flex flex-col items-center">
        <h2 className="text-[1.5rem] lg:text-[1.3rem] mxl:tetx-[1.2rem] font-bold text-center">{title}</h2>
        {blue ? 
        <div className="h-[5px] w-full mb-[2rem] mt-[0.2rem] bg-gradient-to-r from-[#2e2beb]  to-[#0962d8] rounded-full"></div>
        :
        <div className="h-[5px] w-full mb-[2rem] mt-[0.2rem] bg-gradient-to-r from-[#e34800]  to-[#f57206] rounded-full"></div>
        }
    </div>
  )
}

export default Header