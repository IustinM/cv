import React, { useContext, useEffect } from 'react';
import mars from '../../images/mars.png'
import phobos from '../../images/phobos.png'
import deimos from '../../images/deimos.png'
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { hiddenTranslateVariantY } from '../utils/variants';
import Header from '../utils/Header';

const Journey = () => {

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const {setBackgroundIndex} = useContext(GeneralContext);
    
  const skillsData = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React.JS','Next.JS', 'TailwindCSS', 'MaterialUI',"React Testing Library","Jest",'PostgreSQL', "MySql", 'Express.js','Node.JS','Authentication', "JWT",'Github','GIT']

console.log(inView)
  return (
    <div ref={ref}  className='relative w-full min-h-[100vh] mxl:pt-[2rem] mxl:mb-[5rem] overflow-hidden flex'>
        <div className="w-[80%] mx-auto flex items-center mxl:flex-col">

        <div className="w-[50%] lg:w-full lg:mb-[2rem] z-[50]">
          <div className="flex justify-center lg:inline-block">
            <Header title='About me'/>
          </div>
            <div className="text-[1rem] lg:text-[1rem] md:text-[0.9rem] relative text leading-7  md:pb-[2rem]">
                      My name is Moroșanu Iustin and I am a passionate Frontend Developer, specialized in creating interactive and engaging web experiences. In my free time, I like to read and I am extremely passionate about sports.During this period, we collaborated with important clients such as Dove, Booking and Takeda, the most important being IBM. I have been recognized for my UX and UI skills, bringing value to projects by applying innovative concepts and creating an intuitive user interface. I had a significant impact on clients projects, particularly for IBM, where I helped improve user experience and increase application performance.
              <br/>I had the opportunity to work in Romania as a Frontend Developer for a year for Harte Hanks. </div>
            </div>   
            <div className="mx-[2rem]"></div>
            <div className="w-[50%] lg:w-full z-[50]">
              <div className="flex justify-center lg:inline-block">
                <Header title='My skills'/>
              </div>
              <div className="lg:inline-block">
                {skillsData.map((skill:string) =>
                  <div className='px-[1rem] py-[0.5rem] bg-greyCard  mx-[0.5rem] mb-[1rem] mxl:mr-[0.5rem mxl:ml-[0rem] inline-block md:text-[0.9rem] text-white rounded-[0.2rem]'>{skill}</div>
                )}
              </div>
            </div>
        </div>
       <motion.svg  variants={hiddenTranslateVariantY(50,10,0.7,inView)} initial={'hidden'} exit={'exit'}  animate='show'  className='absolute w-[300px] ls:w-[250px] bottom-[2%] right-[8%] mxl:hidden'  id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(206, 0, 0, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(255, 68, 147.509, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M21.4,-24.8C27.8,-20,33.3,-13.4,32.9,-7C32.6,-0.7,26.4,5.5,22.7,14.2C19,22.9,17.8,34.2,13.1,35.7C8.5,37.2,0.5,28.9,-8,24.7C-16.5,20.4,-25.5,20.2,-29.9,15.8C-34.2,11.3,-33.9,2.7,-32.8,-6.2C-31.8,-15.2,-30,-24.4,-24.4,-29.4C-18.8,-34.3,-9.4,-34.9,-1,-33.8C7.5,-32.6,14.9,-29.6,21.4,-24.8Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0"></path>              </motion.svg>
        <motion.svg  variants={hiddenTranslateVariantY(-10,10,0.6,inView)} initial={'hidden'} exit={'exit'}  animate='show' className='absolute w-[400px] ls:w-[300px] top-[-10%] left-[-5%] mxl:hidden' id="sw-js-blob-svg7" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient7" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(86.912, 195.186, 212.159, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(172.514, 255, 164.936, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient7)" d="M26.7,-28.9C33.4,-26.2,36.8,-16.7,36.3,-8.1C35.7,0.4,31.3,7.9,25.4,11.5C19.6,15,12.4,14.6,5.8,17.7C-0.7,20.7,-6.5,27.3,-10.1,26.5C-13.7,25.7,-15.1,17.6,-20.7,10.6C-26.3,3.6,-36.2,-2.3,-37.5,-8.6C-38.7,-14.9,-31.3,-21.7,-23.6,-24.3C-15.9,-26.8,-8,-25.1,1,-26.3C10,-27.6,20,-31.7,26.7,-28.9Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0" stroke="url(#sw-gradient)"></path>              </motion.svg>
        <svg id="wave" className='absolute w-full mxl:flex hidden   bottom-[0%] right-0 '  style={{transform:"transform:rotate(0deg);", transition:  "transition: 0.3s" }}viewBox="0 0 1440 370" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-7" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(98.518, 223.542, 98.588, 1)" offset="0%"></stop><stop stop-color="rgba(60.132, 177.147, 241.757, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 0px);",opacity:" opacity:1"}} fill="url(#sw-gradient-7)" d="M0,37L30,61.7C60,86,120,136,180,160.3C240,185,300,185,360,172.7C420,160,480,136,540,135.7C600,136,660,160,720,160.3C780,160,840,136,900,148C960,160,1020,210,1080,246.7C1140,284,1200,308,1260,283.7C1320,259,1380,185,1440,154.2C1500,123,1560,136,1620,166.5C1680,197,1740,247,1800,246.7C1860,247,1920,197,1980,197.3C2040,197,2100,247,2160,222C2220,197,2280,99,2340,98.7C2400,99,2460,197,2520,252.8C2580,308,2640,321,2700,302.2C2760,284,2820,234,2880,185C2940,136,3000,86,3060,104.8C3120,123,3180,210,3240,203.5C3300,197,3360,99,3420,80.2C3480,62,3540,123,3600,141.8C3660,160,3720,136,3780,141.8C3840,148,3900,185,3960,185C4020,185,4080,148,4140,123.3C4200,99,4260,86,4290,80.2L4320,74L4320,370L4290,370C4260,370,4200,370,4140,370C4080,370,4020,370,3960,370C3900,370,3840,370,3780,370C3720,370,3660,370,3600,370C3540,370,3480,370,3420,370C3360,370,3300,370,3240,370C3180,370,3120,370,3060,370C3000,370,2940,370,2880,370C2820,370,2760,370,2700,370C2640,370,2580,370,2520,370C2460,370,2400,370,2340,370C2280,370,2220,370,2160,370C2100,370,2040,370,1980,370C1920,370,1860,370,1800,370C1740,370,1680,370,1620,370C1560,370,1500,370,1440,370C1380,370,1320,370,1260,370C1200,370,1140,370,1080,370C1020,370,960,370,900,370C840,370,780,370,720,370C660,370,600,370,540,370C480,370,420,370,360,370C300,370,240,370,180,370C120,370,60,370,30,370L0,370Z"></path><defs><linearGradient id="sw-gradient-8" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 90.235, 56.227, 1)" offset="0%"></stop><stop stop-color="rgba(255, 11, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 50px);",opacity:" opacity:0.9"}} fill="url(#sw-gradient-8)" d="M0,185L30,209.7C60,234,120,284,180,296C240,308,300,284,360,246.7C420,210,480,160,540,154.2C600,148,660,185,720,166.5C780,148,840,74,900,43.2C960,12,1020,25,1080,37C1140,49,1200,62,1260,55.5C1320,49,1380,25,1440,24.7C1500,25,1560,49,1620,61.7C1680,74,1740,74,1800,74C1860,74,1920,74,1980,61.7C2040,49,2100,25,2160,67.8C2220,111,2280,222,2340,246.7C2400,271,2460,210,2520,197.3C2580,185,2640,222,2700,197.3C2760,173,2820,86,2880,55.5C2940,25,3000,49,3060,74C3120,99,3180,123,3240,123.3C3300,123,3360,99,3420,123.3C3480,148,3540,222,3600,209.7C3660,197,3720,99,3780,74C3840,49,3900,99,3960,104.8C4020,111,4080,74,4140,67.8C4200,62,4260,86,4290,98.7L4320,111L4320,370L4290,370C4260,370,4200,370,4140,370C4080,370,4020,370,3960,370C3900,370,3840,370,3780,370C3720,370,3660,370,3600,370C3540,370,3480,370,3420,370C3360,370,3300,370,3240,370C3180,370,3120,370,3060,370C3000,370,2940,370,2880,370C2820,370,2760,370,2700,370C2640,370,2580,370,2520,370C2460,370,2400,370,2340,370C2280,370,2220,370,2160,370C2100,370,2040,370,1980,370C1920,370,1860,370,1800,370C1740,370,1680,370,1620,370C1560,370,1500,370,1440,370C1380,370,1320,370,1260,370C1200,370,1140,370,1080,370C1020,370,960,370,900,370C840,370,780,370,720,370C660,370,600,370,540,370C480,370,420,370,360,370C300,370,240,370,180,370C120,370,60,370,30,370L0,370Z"></path></svg>
        {/* <motion.svg ref={resf} variants={hiddenTranslateVariant(10)} initial={'hidden'} exit={'exit'}  whileInView="show" viewport={{ once: true, amount: 0.8 }} className='absolute w-[400px] top-[-5%] right-[10%]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient5" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 47.66, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(0, 185.887, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient5)" d="M16.8,-18.8C24.3,-13.8,34.4,-10.8,36.5,-5.4C38.7,0,32.8,7.8,28.1,16.4C23.3,25,19.6,34.5,13.1,37.6C6.5,40.7,-3,37.5,-12.3,34C-21.6,30.5,-30.7,26.8,-35.4,19.9C-40,13,-40.1,2.9,-38.3,-6.6C-36.4,-16.1,-32.5,-25.2,-25.8,-30.2C-19.1,-35.3,-9.6,-36.4,-2.4,-33.5C4.7,-30.6,9.4,-23.7,16.8,-18.8Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0" stroke="url(#sw-gradient5)"></path>              </motion.svg> */}
          {/* <img  src={mars} alt={'mars img'} className='top-[10%] w-[550px] h-[550px]   absolute xl:w-[450px] lg:h-[320px] lg:w-[320px] xl:h-[450px] md:w-[200px] md:h-[200px]' />
          <img  src={phobos} alt={'phobos img'} className='top-[30%] left-[32%] w-[250px] h-[250px]   absolute  lg:h-[220px] lg:w-[220px]  md:w-[120px] md:h-[120px]' />
          <img  src={deimos} alt={'deimos img'} className='top-[0%] left-[14%] w-[150px] h-[150px]   absolute  lg:h-[120px] lg:w-[120px]  md:w-[80px] md:h-[80px]' /> */}
    </div>
  )
}

export default Journey