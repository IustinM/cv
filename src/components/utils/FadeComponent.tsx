import { motion } from 'framer-motion'
import React from 'react'

const FadeComponent = ({inView}:{inView:boolean}) => {
    const variants = {
        hidden: { 
    
            opacity: 0 
        },
        exit: { 
         
            opacity: 0 
        },
        show: {
          opacity: 1,
       
          transition: {
            delayChildren: 0.5
          }
        }
    }

  return (
    <>
    {inView && <motion.div variants={variants}  animate={'show'} initial='hidden' exit='exit' className="absolute w-full bg-[#00000028] min-h-[100vh] "></motion.div>}
    </>
  )
}

export default FadeComponent