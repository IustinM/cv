import {  faBrain, faCode, faCompass, faGear, faPalette, faServer, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import neptun from '../../images/neptun.png';
import Tehnology from './utils/Tehnology';

import React, { useCallback, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GeneralContext } from '../../context/generalContext';
import ImageComponent from '../utils/ImageComponent';
import Header from '../utils/Header';
import { title } from 'process';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import keepinmind from '../../images/keepinmind.png';
import { motion } from 'framer-motion';
import { hiddenTranslateVariantXY, hiddenTranslateVariantX } from '../utils/variants';
interface Props{
  index:number,
  title:string,
  tehnologies:string[],
  description:string,
  type:string,
  progress?:boolean
}

const Project:React.FC<any> =  React.forwardRef(({index,project}) => {


  const { ref : inViewRef, inView, entry } = useInView({
    threshold: index - 1 === 0 ?0.4 : 0.8,
  });
  const {setBackgroundIndex} = useContext(GeneralContext);
    
  const returnIcon = () =>{
    switch(project.ype){
      case 'movies':
        return <FontAwesomeIcon icon={faVideo}/>
    
      case 'mind':
        return <FontAwesomeIcon icon={faBrain}/>
      case 'habit':
        return <FontAwesomeIcon icon={faPalette}/>
      default:
        return '';
    }

  }
  useEffect(() =>{
    if(inView){
      setBackgroundIndex(index+3);
    }
  },[inView]);
  
const Link:React.FC<{text:string,link:string,icon:any}> = ({text,icon,link}) =>{
  return(
    <a href={link} target="_blank" className='px-[1rem] mr-[1rem] w-[180px] bg-black py-[0.5rem] mt-[1rem]  text-[1rem] md:text-[0.9rem] text-white   transition-all  hover:text-white hover:bg-greyCard flex justify-center items-center rounded-[0.3rem]  cursor-pointer '>
      <span className='inline-block'>{text}</span>
      <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={icon}/>
    </a>
  )}
  return (
    <div ref={inViewRef}  id='projects' className='w-full relative md:min-h-[100vh]  min-h-[80vh] mb-[2rem] md:mb-[0rem]  flex justify-center items-center  '>
    <div className=" py-[1rem] flex ls:flex-col ls:px-[2rem] md:px-[0rem]  relative z-[60] rounded-[0.3rem] bg-greyBg md:bg-transparent">
      <div className="ml-[2rem] ls:ml-[0rem] w-[50%] ls:w-full   ">
        <div className="inline-block   ">
            <Header title={project.title}/>
        </div>
        <div className='ls:mb-[2rem] ls:mr-[4rem] md:mr-[0rem]' >
          <div className="font-semibold text-[1.1rem] ">Description:</div>
          <div className={` text-[1rem] mt-[0.5rem] ls:text-[0.9rem]`}>{project.description}</div>
        </div>
        <div className="ls:hidden flex-wrap mb-[0.5rem] flex mt-[2rem] md:mb-[2rem]">
              <Link text='View project' link={project.source_code} icon={faCompass}/> 
              <Link text='View code' link={project.source_code} icon={faCode}/>       
          </div>
      </div>
      <div className="mx-[0.5rem]"></div>
      <div className="w-[50%] ls:w-full ls:ml-[0rem]  mr-[1rem]">
        <div style={{backgroundImage:`url(${keepinmind}`}} className="bg-center w-[90%] md:w-full rounded-[0.3rem] md:h-[300px] sm:h-[200px] h-[230px] xl:w-[400px] xl:h-[200px]   bg-cover bg-no-repeat"></div>
          {/* <img className='w-[450px] h-[250px] xl:w-[400px] xl:h-[200px] object-fit' src={keepinmind} alt="project" /> */}
       
        <div className="my-[1.5rem]">
          <div className="font-semibold text-[1.1rem] ">Tehnologies:</div>
          <div className="flex flex-wrap mt-[0.5rem]">{project.tehnologies.map((tehnology:string) => <Tehnology text={tehnology} />)}</div>
        </div>
        <div className="hidden flex-wrap  ls:flex mb-[1rem] md:mb-[2rem]">
              <Link text='View project' link={project.source_code} icon={faCompass}/> 
              <Link text='View code' link={project.source_code} icon={faCode}/>       
          </div>
    </div>
      </div>
      {index-1 === 0 ?
      <>
         <motion.svg  variants={hiddenTranslateVariantX(50,10,0.4,inView)} initial={'hidden'} exit={'exit'}  animate='show'  className='absolute z-[10] md:hidden w-[300px] top-[-22%] right-[-17%] mxl:hidden' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient9" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(86.912, 195.186, 212.159, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(164.936, 224.487, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient9)" d="M5.8,-8.1C9.2,-5.5,14.8,-6.1,19.2,-3.6C23.6,-1.2,26.7,4.2,27.8,11.6C29,19.1,28.3,28.5,23.3,34.7C18.3,41,9.2,44,2.8,40.3C-3.7,36.5,-7.3,25.8,-8.8,18.4C-10.3,11.1,-9.6,7,-13.2,2.7C-16.9,-1.6,-24.9,-6.2,-27.7,-12.6C-30.6,-19,-28.2,-27.2,-22.7,-29.1C-17.2,-31,-8.6,-26.5,-3.7,-21.4C1.2,-16.3,2.4,-10.6,5.8,-8.1Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0" stroke="url(#sw-gradient9)"></path>              </motion.svg>
         <motion.svg  variants={hiddenTranslateVariantXY(40,-10,20,0,0.7,inView)} initial={'hidden'} exit={'exit'}  animate='show'  className='absolute md:hidden z-[10] w-[500px] bottom-[-22%] right-[-17%] mxl:hidden'id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient10" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(255, 178.999, 94.383, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(255, 0, 168.896, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient10)" d="M9.2,-19C10,-15.4,7.4,-9.1,9.7,-5.5C12,-1.9,19.2,-0.9,21,1.1C22.9,3.1,19.5,6.2,18.6,12.2C17.7,18.3,19.3,27.3,16.6,29.3C14,31.3,7,26.4,-0.5,27.2C-8,28.1,-16,34.8,-18.8,32.8C-21.6,30.9,-19.2,20.3,-21.1,13.4C-22.9,6.5,-28.9,3.3,-31.2,-1.4C-33.6,-6,-32.3,-11.9,-27.4,-13.5C-22.5,-15.1,-14,-12.3,-8.8,-13.4C-3.6,-14.5,-1.8,-19.5,1.2,-21.5C4.2,-23.6,8.4,-22.7,9.2,-19Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0"></path>              </motion.svg>
      </>
      :
      <>
       <motion.svg  variants={hiddenTranslateVariantXY(-50,-30,22,10,0.8,inView)} initial={'hidden'} exit={'exit'}  animate='show'  className='absolute z-[10] w-[500px] bottom-[-22%] left-[-17%] mxl:hidden'  id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient11" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(94.383, 255, 233.234, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(0, 116.773, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient11)" d="M23.2,-39.3C30.4,-36,36.7,-30.4,40.4,-23.5C44.1,-16.6,45.2,-8.3,41.2,-2.3C37.3,3.7,28.2,7.4,23.4,12.4C18.5,17.3,17.9,23.6,14.7,29.4C11.5,35.3,5.8,40.6,1.4,38.2C-2.9,35.7,-5.7,25.3,-10.9,20.6C-16.1,15.9,-23.6,16.9,-29.6,14.4C-35.6,12,-40.2,6,-41.8,-0.9C-43.4,-7.8,-42,-15.7,-36.3,-18.6C-30.5,-21.5,-20.3,-19.5,-13.5,-22.9C-6.7,-26.4,-3.4,-35.4,2.3,-39.4C8,-43.4,16,-42.5,23.2,-39.3Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0"></path>              </motion.svg>
      </>
      }
    
</div>
  )
}
)

export default Project