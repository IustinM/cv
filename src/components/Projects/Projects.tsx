import { faArrowDown, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { GeneralContext } from '../../context/generalContext';
import { projects } from '../data/ProjectsData';
import Header from '../utils/Header';
import Project from './Project';

const Projects:React.FC<any> =  React.forwardRef(({},ref:any) => {
    const { ref : inViewRef, inView, entry } = useInView();
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
    <div ref={setRefs} className='w-full '>
      <div className="w-[80%]  mx-auto">

        <div className=" flex justify-start w-full">
          <Header title='Projects'/>   
        </div>
        {projects.map((project,index) =><Project  index={index+1} project={project}/>)}
      </div>
        
    </div>
  )
}
)

export default Projects