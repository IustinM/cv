import React, { useContext, useEffect } from 'react';
import mars from '../../images/mars.png'
import phobos from '../../images/phobos.png'
import deimos from '../../images/deimos.png'
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const Journey = () => {

  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const {setBackgroundIndex} = useContext(GeneralContext);
    
  useEffect(() =>{
    if(inView){
      setBackgroundIndex(1);
    }
  },[inView]);

  return (
    <div ref={ref}  className='w-full min-h-[100vh] md:min-h-[800px]'>
        <div className="w-[70%] relative mx-auto z-[170] text-white md:w-full md:mx-0 md:border-0   md:min-h-[800px] md:bg-mobileShadowBg md:rounded-none bg-shadowBg rounded-[0.5rem] p-[3rem] md:p-0 ">
          <div className="md:w-[70%] xsm:w-[90%] relative z-[80] md:mx-auto xsm:mx-[2rem]">
            <h2 className="text-[2.3rem] lg:text-[1.6rem]">My journey through the universe </h2>
            <div className="text-[1.1rem] lg:text-[1rem] relative text leading-7 pt-[2rem] md:pb-[2rem]">
            My name is Moroșanu Iustin and I am a passionate Frontend Developer, specialized in creating interactive and engaging web experiences. In my free time, I like to read and I am extremely passionate about sports.
<br/>I had the opportunity to work in Romania for a year and a half for Harte Hanks. During this period, we collaborated with important clients such as Dove, Booking and Takeda, the most important being IBM.
I have been recognized for my UX and UI skills, bringing value to projects by applying innovative concepts and creating an intuitive user interface. I had a significant impact on clients projects, particularly for IBM, where I helped improve user experience and increase application performance. A notable achievement was the development of an application used by the DEERT team at IBM. I was also involved in the development of an application used internally for the optimization of employees' time, which led to the optimization of processes and increased operational efficiency of the company.
During the working period, I gained solid knowledge both in the frontend, working with technologies such as JavaScript, React, Next.js, TypeScript, React Testing, and many other libraries, and in the backend, working with Express.js and databases such as PostgreSQL.</div>
            </div>
            <FontAwesomeIcon className='absolute top-[50%] text-[5rem] md:text-[2rem] lg:text-[4rem] text-[#7f7f7fd5] left-[50%] translate-x-[-50%] z-[50] translate-y-[-50%]' icon={faCompass}/>
          </div>
          <img  src={mars} alt={'mars img'} className='top-[10%] w-[550px] h-[550px]   absolute xl:w-[450px] lg:h-[320px] lg:w-[320px] xl:h-[450px] md:w-[200px] md:h-[200px]' />
          <img  src={phobos} alt={'phobos img'} className='top-[30%] left-[32%] w-[250px] h-[250px]   absolute  lg:h-[220px] lg:w-[220px]  md:w-[120px] md:h-[120px]' />
          <img  src={deimos} alt={'deimos img'} className='top-[0%] left-[14%] w-[150px] h-[150px]   absolute  lg:h-[120px] lg:w-[120px]  md:w-[80px] md:h-[80px]' />
    </div>
  )
}

export default Journey