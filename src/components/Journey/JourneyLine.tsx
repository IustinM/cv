import  { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { GeneralContext } from '../../context/generalContext';
import jupiter from '../../images/jupiter.png'
import ImageComponent from '../utils/ImageComponent';
import PingText from './utils/PingText';
import Text from './utils/Text';

const JourneyLine = () => {

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const {setBackgroundIndex} = useContext(GeneralContext);
    
  useEffect(() =>{
    if(inView){
      setBackgroundIndex(2);
    }
  },[inView]);

  return (
    <div ref={ref}   className='w-full h-[100vh]  min-h-[800px] md:min-h-[100vh]  overflow-hidden'>
      <div className="w-full min-h-[100vh]   pt-[1rem] relative z-[201] md:bg-mobileShadowBg">
        <div className="w-[70%] mx-auto  xsm:w-[90%] md:mx-auto xsm:mx-[2rem]">
            <div className="text-[2.5rem] md:text-[1.6rem] mb-[1rem]">Next Destination?</div>
        </div>
        <div className=" pt-[1rem] w-[50%] md:w-[40%] mx-auto">
            <div className="h-[80vh] w-[10px] md:w-[9px] bg-white relative">
                <div className="">
                  <Text x={-50} y={-2} text="Born on Earth" year={'2002'}/>
                  <Text x={-50} y={15} text="Finished Highschool" year={'2021'}/>
                  <Text x={-50} y={30} text="First FrontEnd Developer Job" year={'2022'}/>
                  <Text x={-50} y={45} text="Moved To UK" year={'2023'}/>
                  <PingText x={-55} y={60} text="Next destination?" year={'2024'} currentDestination/>
                  <Text x={-50} y={97} text="No limit" year={'∞'} infinite/>
                </div>
            </div>
        </div>
      </div>
        {/* <ImageComponent width={850} height={850} src={jupiter} alt={'jupiter img'} left={55} top={-20} distance={10} /> */}
    </div>
  )
}

export default JourneyLine