import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import icon from '../../images/icon.png';
import {  hiddenTranslateVariantY } from '../utils/variants';
import Burger from './Burger';

interface Props{
  navigateToRef:(refType: string) => void
}

const Navigation:React.FC<Props> = ({navigateToRef}) => {

  const [hideBurgerNav,setHideBurgerNav] = useState<boolean>(false);

  return (
    <nav className='items-center  mxl:fixed  z-[202] w-full justify-between mxl:bg-white  text-white min h-[12vh] flex'>
        <div className="w-[82%]  justify-between mx-auto   flex">
        <div className="flex  items-center text-black">
          
            <div className='w-[80px] mxl:w-[60px]'>
                <img src={icon} alt='icon image'/>
            </div>
            {/* <h2 className='ml-[1rem] text-[1.4rem] mxl:hidden '>Iustin Morosanu</h2> */}
        </div>
        <ul className="flex w-[15%] relative z-[50] justify-between text-black font-bold text-[1rem]  mxl:hidden items-center mr-[4rem]">
            <li  onClick={() => navigateToRef('projects')} className='cursor-pointer'> 
                PROJECTS
            </li>
            <div className="mx-[1rem]"></div>
            <li onClick={() => navigateToRef('contact')} className='cursor-pointer'>
            CONTACT
            </li>
        </ul>
          <Burger hideBurgerNav={hideBurgerNav} setHideBurgerNav={setHideBurgerNav}/>
        </div>
        <AnimatePresence>
            {!hideBurgerNav &&
            <motion.ul variants={hiddenTranslateVariantY(-20,0,0.3,true)} animate={'show'} initial='hidden' exit='exit'  className="hidden mxl:flex mxl:flex-col top-[12vh] mxl:justify-center mxl:items-center  bg-white text-black  absolute w-full h-[90vh]">
                <li onClick={() => navigateToRef('projects')} className='text-[1.3rem] cursor-pointer'> Projects</li>
                <li onClick={() => navigateToRef('contact')} className='text-[1.3rem] mt-[1rem] cursor-pointer'> Contact </li>
            </motion.ul>
            }
          </AnimatePresence>
    </nav>
  )
}

export default Navigation