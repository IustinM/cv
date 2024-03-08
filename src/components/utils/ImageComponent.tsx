import React, { useRef } from 'react';
import { motion,useScroll,useSpring,useTransform,MotionValue} from 'framer-motion';

interface Props{
    src:any,
    alt:string,
    width:number,
    height:number,
    left:number,
    top:number,
    distance:number
}

const ImageComponent:React.FC<Props> = ({src ,alt,width,height,left,top,distance}) => {
  
  const ref = useRef(null);
  
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
  <motion.div className='' ref={ref} style={{ y, position: 'absolute', left: `${left}%`, top: `${top}%`, zIndex: 150 }}>
      <img width={width} height={height} src={src} alt={alt} />
  </motion.div>
   
  )
}

export default ImageComponent