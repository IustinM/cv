import {  faBrain, faCode, faCompass, faGear, faPalette, faServer, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import neptun from '../../images/neptun.png';
import Tehnology from './utils/Tehnology';
import projectplanet1 from '../../images/projectplanet1.png';
import projectplanet2 from '../../images/projectplanet2.png';
import React, { useCallback, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GeneralContext } from '../../context/generalContext';
import ImageComponent from '../utils/ImageComponent';

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
    threshold: 0.8,
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
  

  const returnPlanet = () =>{
    switch(index){
      case 1:{
        return   <img  src={neptun} alt={'neptun img'} className='bottom-[10%] w-[650px] h-[650px]   absolute xl:w-[500px]  xl:h-[500px]  lg:h-[370px] lg:w-[370px] md:w-[240px] md:h-[240px]' />
      }
      case 2:{
        return <img  src={projectplanet1} alt={'projectplanet1 img'} className='top-[5%] left-[60%] w-[450px] h-[450px]   absolute xl:w-[300px]  xl:h-[300px]  lg:h-[250px] lg:w-[250px] md:w-[140px] md:h-[140px]' />
      }
      case 3:{
        return <img  src={projectplanet2} alt={'projectplanet2 img'} className='top-[15%] left-[2%] w-[550px] h-[550px]   absolute xl:w-[400px]  xl:h-[400px]  lg:h-[320px] lg:w-[320px] md:w-[180px] md:h-[180px]' />
      }
      default: return;
    }
  }

  return (
    <div ref={inViewRef}  id='projects' className='w-full min-h-[100vh]  md:min-h-[800px]'>
    <div className="w-[80%] lg:w-[90%] md:min-h-[800px] relative rounded-[0.5rem] p-[2rem] md:w-full md:border-0  md:rounded-none md:bg-mobileShadowBg bg-shadowBg  min-h-[80vh] z-[170]  mx-auto ">
        <div className="flex items-center text-[2.5rem] md:text-[1.6rem]">
          <h2 className=''>{project.title}</h2>
          <div className="mx-2"></div>
          {returnIcon()}
        </div>
        
        <div className={`${index-1 === 0 ? 'pb-[5rem]' : ''}`}>
          <div className="font-bold text-[1.4rem] mt-[1.5rem] mxl:text-[1.3rem]">Description:</div>
          <div className={`${index -1  === 0 ? 'text-[1.4rem] ' : 'text-[1.2rem]'} mxl:text-[1rem] mt-[0.5rem]`}>{project.description}</div>
        </div>
        <div className="my-[2rem]">
          <div className="font-bold text-[1.4rem] ">Tehnologies:</div>
          <div className="flex flex-wrap mt-[0.5rem]">{project.tehnologies.map((tehnology:string) => <Tehnology text={tehnology} />)}</div>
        </div>
        <div className="flex flex-wrap">
          {!project.progress ?
          <a href={project.website_link} target="_blank" className='bg-white px-[1rem] my-[1rem] py-[0.5rem] border-[2px] text-[1.1rem] md:text-[0.9rem] border-white hover:bg-transparent hover:text-white transition-all text-black flex items-center rounded-[0.2rem] cursor-pointer hover:bg'>
            Discover website
            <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={faCompass}/>
          </a>
          :
          <div  className='bg-[#f84343] px-[1rem] my-[1rem] py-[0.5rem] text-[1.1rem] md:text-[0.9rem] transition-all text-white flex items-center rounded-[0.2rem] '>
            In progress
            <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={faGear}/>
          </div>
          }
          
          <div className="mx-[1rem]"></div>
          {index - 1 === 1 ? 
            <div className="flex">
            <a href={project.source_code.frontend} target="_blank" className='hover:bg-white px-[1rem] my-[1rem]  py-[0.5rem] border-[2px] text-[1.1rem] md:text-[0.9rem] text-white border-white hover:bg-transparent  transition-all  hover:text-black flex items-center rounded-[0.2rem] cursor-pointer '>
              View frontend
              <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={faCode}/>
            </a>
            <div className="mx-[1rem]"></div>
            <a href={project.source_code.backend} target="_blank" className='hover:bg-white px-[1rem] my-[1rem]  py-[0.5rem] border-[2px] text-[1.1rem] md:text-[0.9rem] text-white border-white hover:bg-transparent  transition-all  hover:text-black flex items-center rounded-[0.2rem] cursor-pointer'>
              View backend
              <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={faServer}/>
            </a>
            </div>
          : 
          <a href={project.source_code} target="_blank" className='hover:bg-white px-[1rem] my-[1rem]  py-[0.5rem] border-[2px] text-[1.1rem] md:text-[0.9rem] text-white border-white hover:bg-transparent  transition-all  hover:text-black flex items-center rounded-[0.2rem] cursor-pointer hover:bg'>
            View code
            <FontAwesomeIcon className='text-[1.2rem] ml-[0.3rem]' icon={faCode}/>
          </a>
      
          }
        </div>
    </div>
        {returnPlanet()}
   
</div>
  )
}
)

export default Project