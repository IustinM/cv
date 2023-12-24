import React from 'react'

interface Props{
    text:string
}
const Tehnology:React.FC<Props> = ({text}) => {
    const getTehnologyColor = (tehnology:string) =>{
        switch(tehnology.toLowerCase()){
          case 'react':{
            return 'bg-[#194cba] text-white'
          }
          case 'next':{
            return 'bg-black border-white border-[1px] text-white'
          }
          case 'react query':{
            return 'bg-[#182d8b]  text-white'
          }
          case 'react table':{
            return 'bg-[#32a852]  text-white'
          }
          case 'typescript':{
            return 'bg-[#288e9e]  text-white'
          }
          case 'express.js':{
            return 'bg-[#54f542] text-black'
          }
          case 'tailwind':{
            return 'bg-[#15e6ed] text-black'
          }
          case 'jwt':{
            return 'bg-[#a115ed] text-white'
          }
          case 'framer motion':{
            return 'bg-[#ed1547] text-white'
          }
          case 'mysql':{
            return 'bg-[#000d70] text-white'
          }
          default: {
            return 'bg-white text-black'
          }
        }
      }
  return (
    <div>
        <div className={`${getTehnologyColor(text)} px-[1rem]  py-[0.3rem] my-[1rem] mr-[1rem] rounded-[0.2rem] mxl:text-[0.9ren]`}>{text}</div>
    </div>
  )
}

export default Tehnology