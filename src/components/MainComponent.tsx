import { motion } from 'framer-motion'
import React, { useContext, useRef } from 'react'
import { GeneralContext } from '../context/generalContext'
import ComponentLayout from './ComponentLayout'
import { projects } from './data/ProjectsData'
import Footer from './Footer/Footer'
import Form from './Form/Form'
import HeaderContainer from './Header/HeaderContainer'
import Journey from './Journey/Journey'
import JourneyLine from './Journey/JourneyLine'
import Navigation from './Navigation/Navigation'
import ProjectsHeader from './Projects/Header'
import Project from './Projects/Project'

const MainComponent = () => {

    const {backgroundIndex} = useContext(GeneralContext);
    const contactsRef = useRef<null | HTMLDivElement>(null);
    const projectsRef = useRef<null | HTMLDivElement>(null);

    const navigateToRef = (refType:string) =>{
      switch(refType.toLowerCase()){
        case 'contact':{
          console.log(contactsRef)
          if(contactsRef.current !== null){
            contactsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }else{
            return;
          }
          return;
        }
        case 'projects':{
          if(projectsRef.current !== null){
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }else{
            return;
          }
          return;
        }
      }
    }

  return (
    <div className='relative  bg-black  style'  >
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: backgroundIndex  === 0 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed w-[100%] min-h-[100vh] "
        style={{ backgroundImage: 'radial-gradient(circle at bottom, rgba(0,25,91,1) 4%, rgba(0,0,0,1) 100%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 1  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'radial-gradient(circle at bottom, rgba(91,0,0,1) 4%, rgba(0,0,0,1) 100%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 2  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: ' radial-gradient(circle at bottom, rgba(78,31,2,1) 0%, rgba(0,0,0,1) 98%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 3  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'radial-gradient(circle at bottom, rgba(78,74,0,1) 4%, rgba(0,0,0,1) 100%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 4  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'linear-gradient(285deg, rgba(2,73,77,1) 0%, rgba(1,4,4,1) 50%, rgba(0,0,0,1) 55%, rgba(1,51,113,1) 100%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 5  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'linear-gradient(225deg, hsla(288, 100%, 81%, 1) 10%, hsla(261, 100%, 30%, 1) 56%, hsla(234, 100%, 16%, 1) 89%'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 6  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'radial-gradient(circle at bottom, rgba(60,78,121,1) 0%, rgba(0,0,0,1) 100%)'}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: backgroundIndex  === 7  ? 1 : 0 }}
        transition={{ duration: 1 }}
        className=" fixed   w-[100%] min-h-[100vh]  "
        style={{ backgroundImage: 'radial-gradient(circle at bottom, rgba(32,32,32,1) 4%, rgba(0,0,0,1) 100%)'}}
        ></motion.div>
        <Navigation navigateToRef={navigateToRef}/>
        <ComponentLayout><HeaderContainer/></ComponentLayout>
        <ComponentLayout><Journey/></ComponentLayout>
        <ComponentLayout><JourneyLine/></ComponentLayout>
        <ComponentLayout><ProjectsHeader ref={projectsRef}/></ComponentLayout>
        {projects.map((project,index) =><ComponentLayout><Project  index={index+1} title={project.title} tehnologies={project.tehnologies} description={project.description} type={project.type} progress={project.progress}/></ComponentLayout>)}
        <ComponentLayout><Form ref={contactsRef}/> </ComponentLayout>
        <Footer/>
    </div>
  )
}

export default MainComponent