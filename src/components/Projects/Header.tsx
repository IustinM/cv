import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { GeneralContext } from '../../context/generalContext';
import saturn from '../../images/saturn.png';
import sonda from '../../images/sonda.png';
import uranus from '../../images/uranus.png';
import ImageComponent from '../utils/ImageComponent';
import Meteorites from '../utils/Meteorites';
const ProjectsHeader:React.FC<any> =  React.forwardRef(({},ref:any) => {
    const { ref : inViewRef, inView, entry } = useInView({
        threshold: 0.8,
      });
      const {setBackgroundIndex} = useContext(GeneralContext);
        
      useEffect(() =>{
        if(inView){
          setBackgroundIndex(3);
        }
      },[inView]);
      const setRefs = useCallback(
        (node: Element | null | undefined) => {
          ref.current = node;
          inViewRef(node);
        },
        [inViewRef],
      );

  return (
    <div ref={setRefs} className='w-full h-[100vh] min-h-[600px]'>
        <div className="w-[80%] md:bg-mobileShadowBg z-[201] relative md:rounded-none md:w-full md:border-0 md:min-h-[100vh] h-[50vh] flex flex-col justify-end md:justify-start md:items-start items-end mx-auto ">
            <div className="md:w-[70%] w-[50%] xsm:w-[90%] md:mx-auto xsm:mx-[2rem] md:flex md:flex-col md:justify-center md:h-[100vh]">
                <h2 className="text-[3rem] md:text-[1.5rem] ">Projects</h2>
                <p className='text-[1.2rem] md:text-[1rem] mt-[1rem]'>KeepInMind and AppriseMe are two projects that I created for my own use and that I am still working on, if you think it will help you feel free to use them for your own purpose.</p>
                <div className="flex flex-wrap">
                    <button className="w-[200px] border-[3px]  p-2 cursor-pointer flex justify-center items-center my-[3rem] text-[1.2rem] md:text-[1rem] md:w-[180px] md:my-[2rem]">CV page source code</button>
                        <div className="mx-[1.5rem]"></div>
                    {/* <div className="flex items-center text-[1.4rem] md:text-[1.1rem] cursor-pointer">
                        <h2 className="mr-2">
                            View projects
                        </h2>
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </div> */}
                </div>
            </div>
        </div>
        <img  src={saturn} alt={'saturn img'} className='bottom-[2%] w-[650px] h-[650px]   absolute xl:w-[550px] lg:h-[420px] lg:w-[420px] xl:h-[550px] md:w-[250px] md:h-[250px]' />
        <ImageComponent width={70} height={70} src={sonda} alt={'sonda img'} left={8} top={7} distance={40} />
        <img  src={uranus} alt={'uranus img'} className='bottom-[-30%] right-[5%] w-[400px] h-[400px]  absolute xl:w-[350px] lg:h-[300px] lg:w-[300px] xl:h-[350px] md:w-[150px] md:h-[150px]' />
    </div>
  )
}
)

export default ProjectsHeader