import { motion } from 'framer-motion'
import React, { useContext, useRef } from 'react'
import { GeneralContext } from '../context/generalContext'
import Footer from './Footer/Footer'
import Form from './Form/Form'
import HeaderContainer from './Header/HeaderContainer'
import Journey from './Journey/Journey'
import Navigation from './Navigation/Navigation'
import Projects from './Projects/Projects'


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
    <div className='relative text-black  bg-mainBg style'  >
        
        <Navigation navigateToRef={navigateToRef}/>
        <HeaderContainer/>
        <Journey/>
        {/* <JourneyLine/> */}
        <Projects ref={projectsRef}/>
        <Form ref={contactsRef}/> 
        <Footer/>
    </div>
  )
}

export default MainComponent