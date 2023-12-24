import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import icon from '../../images/icon.png';
import { hiddenTranslateVariant } from '../utils/variants';
import Burger from './Burger';

interface Props{
  navigateToRef:(refType: string) => void
}

const Navigation:React.FC<Props> = ({navigateToRef}) => {

  const [hideBurgerNav,setHideBurgerNav] = useState<boolean>(false);

  return (
    <nav className='items-center absolute mxl:fixed mxl:bg-shadowBg z-[202] bg-transparent w-full justify-between  text-white min h-[12vh] flex'>
        <div className="w-[70%] justify-between mx-auto sm:mx-[2rem] sm:w-full flex">
        <div className="flex  items-center">
            <div className='w-[80px] mxl:w-[60px]'>
                <img src={icon} alt='icon image'/>
            </div>
            <h2 className='ml-[1rem] text-[1.4rem] mxl:hidden '>Iustin Morosanu</h2>
        </div>
        <ul className="flex w-[15%] justify-between text-[1.2rem] mxl:hidden items-center mr-[4rem]">
            <li  onClick={() => navigateToRef('projects')}
            className='hover:bg-white px-[1.5rem] py-[0.5rem] border-[2px] text-[1.1rem] text-white border-white hover:bg-transparent  transition-all  hover:text-black flex items-center rounded-[0.2rem] cursor-pointer hover:bg'> 
                Projects
            </li>
            <div className="mx-[1rem]"></div>
            <li onClick={() => navigateToRef('contact')} className='bg-white px-[1.5rem] py-[0.5rem] border-[2px] text-[1.1rem] border-white hover:bg-transparent hover:text-white transition-all text-black flex items-center rounded-[0.2rem] cursor-pointer hover:bg'>
            Contact
            </li>
        </ul>
          <Burger hideBurgerNav={hideBurgerNav} setHideBurgerNav={setHideBurgerNav}/>
        </div>
        <AnimatePresence>
            {!hideBurgerNav &&
            <motion.ul variants={hiddenTranslateVariant(0)} animate={'show'} initial='hidden' exit='exit'  className="  hidden mxl:flex mxl:flex-col top-[12vh] mxl:justify-center mxl:items-center bg-shadowBg text-white  absolute w-full h-[20vh]">
                <li onClick={() => navigateToRef('projects')} className='text-[1.3rem] cursor-pointer'> Projects</li>
                <li onClick={() => navigateToRef('contact')} className='text-[1.3rem] mt-[1rem] cursor-pointer'> Contact </li>
            </motion.ul>
            }
          </AnimatePresence>
    </nav>
  )
}

export default Navigation