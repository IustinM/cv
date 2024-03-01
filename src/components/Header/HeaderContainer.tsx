
import { useContext, useEffect} from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blob from '../../images/blob.svg'
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import ImageComponent from '../utils/ImageComponent';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { hiddenTranslateVariantX, hiddenTranslateVariantXY, hiddenTranslateVariantY } from '../utils/variants';
// import pdf from '../../../public/morosanu_iustin_cv.pdf'
const HeaderContainer = () => {

    const {setBackgroundIndex} = useContext(GeneralContext);
    const controls = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.7,
    });

    useEffect(()=>{
        console.log(inView)
        if(inView){
            controls.start('show')
        }else{
            controls.stop()
        }
    },[inView]);
    
  return (
    <div ref={ref} className='w-full relative min-h-[100vh]   text-black md:pt-0'>
   
           <div className="min-h-[60vh]  relative z-[50] w-[80%] xl:w-[80%] mxl:min-h-[95vh] mx-auto flex flex-col justify-center">
                <div className="">
                    <h2 className="text-[2.8rem]  ls:text-[2rem] sm:text-[1.5rem] font-bold">IUSTIN MOROSANU</h2>
                    <h6 className='my-[2rem] text-[1.2rem] mxl:text-[1rem] '>I am an <span className='    bg-gradient-to-r from-[#2e2beb]  to-[#0962d8] inline-block text-transparent bg-clip-text '>experienced</span> and  <span className='bg-gradient-to-r from-[#e34800]  to-[#f57206] inline-block text-transparent bg-clip-text'>dedicated</span> Frontend developer <br/> based in <span className='bg-gradient-to-r from-[#2e2beb]  to-[#d809ce] inline-block text-transparent bg-clip-text '>Manchester, United Kingdom.</span></h6>   
                    {/* <div className='w-[100px] h-[100px]' style={ {backgroundImage: "url(../../images/blob.svg)"}}></div> */}
                    <div className="text-[3rem] sm:text-[2rem]">
                        <a href='https://www.linkedin.com/in/morosanu-iustin-b10990222/' target="_blank" ><FontAwesomeIcon className='cursor-pointer' icon={faLinkedin}/></a>
                        <a href='https://github.com/IustinM' target="_blank" ><FontAwesomeIcon className='ml-[1.5rem] cursor-pointer' icon={faGithub}/></a>
                    </div>
                    {/* <button  onClick={() => {}}className='border-[1px] mt-[2rem] border-black text-[1rem] bg-black text-white px-[1.8rem] py-[0.5rem] rounded-[0.2rem]'> Projects</button> */}
                </div>
           </div>
            <div className="min-h-[20vh] mxl:min-h-[5vh] relative z-[50] flex animate-bounce items-center flex-col mxl:justify-start justify-end">
                <FontAwesomeIcon icon={faArrowDown}/>
                {/* <p className="mt-[0.5rem]">About me</p>  */}
            </div>
                <motion.svg  variants={hiddenTranslateVariantY(-10,10,0.6,inView)} initial={'hidden'} exit={'exit'} animate='show'  className='absolute w-[400px] ls:w-[300px] lg:w-[200px] mxl:hidden  top-[-12%] ls:top-[-10%] lg:top-[5%] ls:right-[6%] right-[10%] tall:w-[300px]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient5" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(0, 47.66, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(0, 185.887, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient5)" d="M16.8,-18.8C24.3,-13.8,34.4,-10.8,36.5,-5.4C38.7,0,32.8,7.8,28.1,16.4C23.3,25,19.6,34.5,13.1,37.6C6.5,40.7,-3,37.5,-12.3,34C-21.6,30.5,-30.7,26.8,-35.4,19.9C-40,13,-40.1,2.9,-38.3,-6.6C-36.4,-16.1,-32.5,-25.2,-25.8,-30.2C-19.1,-35.3,-9.6,-36.4,-2.4,-33.5C4.7,-30.6,9.4,-23.7,16.8,-18.8Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0" stroke="url(#sw-gradient5)"></path>              </motion.svg>
                <motion.svg variants={hiddenTranslateVariantX(50,10,0.6,inView)} initial={'hidden'} exit={'exit'} animate='show' className='absolute w-[400px] ls:w-[300px] lg:w-[200px] mxl:hidden   bottom-[20%] ls:bottom-[15%] lg:bottom-[30%] right-0 tall:w-[300px]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(248, 143.599, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(251, 31, 31, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient2)" d="M15.8,-22.3C19.8,-15.4,22.1,-9.8,25,-3C27.9,3.9,31.5,12.1,29.1,17.4C26.8,22.8,18.4,25.3,10.2,28.5C1.9,31.7,-6.2,35.7,-11.2,33C-16.2,30.2,-17.9,20.8,-17.3,13.9C-16.6,7,-13.6,2.6,-12.9,-2.5C-12.3,-7.5,-14.1,-13.2,-12.3,-20.6C-10.6,-27.9,-5.3,-36.9,0.3,-37.2C5.9,-37.5,11.7,-29.2,15.8,-22.3Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;" }} stroke-width="0"></path>              </motion.svg>
            {/* <ssvg className='absolute w-[500px] bottom-[2rem] right-0'  id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(58.387, 195.05, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(63.932, 4.773, 238.114, 1)" offset="100%"></stop></linearGradient> </defs> <path fill="url(#sw-gradient)" d="M26.6,-21.8C31.1,-15.5,29.3,-4.6,26.7,5.9C24.2,16.4,20.9,26.6,15.4,27.5C9.9,28.4,2.1,20.1,-8.3,15.7C-18.6,11.3,-31.6,10.7,-33.3,6.6C-35.1,2.5,-25.6,-5.2,-18.2,-12.2C-10.8,-19.1,-5.4,-25.3,2.8,-27.6C11,-29.8,22,-28.1,26.6,-21.8Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0"></path></ssvg> */}
            <motion.svg variants={hiddenTranslateVariantXY(-50,20,0,10,0.7,inView)} initial={'hidden'} exit={'exit'} animate='show' className='absolute w-[300px] ls:w-[280px] lg:w-[200px] mxl:hidden   bottom-[20%] tall:w-[300px] ls:bottom-[30%] lg:bottom-[30%] lg:right-[15%] right-[20%] ls:right-[17%]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient4" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(71.238, 55, 248, 1)" offset="0%"></stop>                            <stop id="stop3" stop-color="rgba(255, 0, 203.453, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient4)" d="M18.7,-23.4C23.6,-18.1,26.7,-11.7,30.4,-3.5C34,4.7,38.2,14.6,35.4,21.2C32.5,27.9,22.5,31.2,13,33.9C3.5,36.5,-5.6,38.4,-13,35.7C-20.4,33,-26.1,25.7,-31.8,17.5C-37.5,9.4,-43.1,0.4,-41,-6.5C-39,-13.4,-29.2,-18.2,-21,-23C-12.9,-27.8,-6.5,-32.5,0.2,-32.7C6.9,-33,13.7,-28.8,18.7,-23.4Z" width="100%" height="100%" transform="translate(50 50)" style={{transition:"transition: all 0.3s ease 0s;"}} stroke-width="0" stroke="url(#sw-gradient)"></path>              </motion.svg>
            {/* <svg className='absolute w-full mxl:flex hidden s  bottom-[0%] right-0 ' id="wave" style={{transform:"transform:rotate(0deg);", transition: " transition: 0.3s"}} viewBox="0 0 1440 180" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(5.831, 157.921, 255, 1)" offset="0%"></stop><stop stop-color="rgba(0, 68.762, 168.9, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 0px);",opacity:" opacity:1" }}fill="url(#sw-gradient-0)" d="M0,90L21.8,90C43.6,90,87,90,131,96C174.5,102,218,114,262,123C305.5,132,349,138,393,129C436.4,120,480,96,524,81C567.3,66,611,60,655,63C698.2,66,742,78,785,87C829.1,96,873,102,916,105C960,108,1004,108,1047,96C1090.9,84,1135,60,1178,48C1221.8,36,1265,36,1309,54C1352.7,72,1396,108,1440,123C1483.6,138,1527,132,1571,135C1614.5,138,1658,150,1702,135C1745.5,120,1789,78,1833,75C1876.4,72,1920,108,1964,105C2007.3,102,2051,60,2095,63C2138.2,66,2182,114,2225,129C2269.1,144,2313,126,2356,108C2400,90,2444,72,2487,57C2530.9,42,2575,30,2618,30C2661.8,30,2705,42,2749,45C2792.7,48,2836,42,2880,60C2923.6,78,2967,120,3011,123C3054.5,126,3098,90,3120,72L3141.8,54L3141.8,180L3120,180C3098.2,180,3055,180,3011,180C2967.3,180,2924,180,2880,180C2836.4,180,2793,180,2749,180C2705.5,180,2662,180,2618,180C2574.5,180,2531,180,2487,180C2443.6,180,2400,180,2356,180C2312.7,180,2269,180,2225,180C2181.8,180,2138,180,2095,180C2050.9,180,2007,180,1964,180C1920,180,1876,180,1833,180C1789.1,180,1745,180,1702,180C1658.2,180,1615,180,1571,180C1527.3,180,1484,180,1440,180C1396.4,180,1353,180,1309,180C1265.5,180,1222,180,1178,180C1134.5,180,1091,180,1047,180C1003.6,180,960,180,916,180C872.7,180,829,180,785,180C741.8,180,698,180,655,180C610.9,180,567,180,524,180C480,180,436,180,393,180C349.1,180,305,180,262,180C218.2,180,175,180,131,180C87.3,180,44,180,22,180L0,180Z"></path></svg> */}
            
            <svg className='absolute  mxl:flex hidden   bottom-[0%] right-0 ' id="wave" style={{transform:"transform:rotate(0deg);",transition :" transition: 0.3s"}} viewBox="0 0 1440 230" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(51.913, 20.23, 255, 1)" offset="0%"></stop><stop stop-color="rgba(11, 184.735, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 0px);",opacity: "opacity:1"}} fill="url(#sw-gradient-0)" d="M0,115L40,115C80,115,160,115,240,95.8C320,77,400,38,480,49.8C560,61,640,123,720,145.7C800,169,880,153,960,122.7C1040,92,1120,46,1200,46C1280,46,1360,92,1440,92C1520,92,1600,46,1680,23C1760,0,1840,0,1920,7.7C2000,15,2080,31,2160,30.7C2240,31,2320,15,2400,7.7C2480,0,2560,0,2640,15.3C2720,31,2800,61,2880,76.7C2960,92,3040,92,3120,92C3200,92,3280,92,3360,76.7C3440,61,3520,31,3600,49.8C3680,69,3760,138,3840,149.5C3920,161,4000,115,4080,99.7C4160,84,4240,100,4320,122.7C4400,146,4480,176,4560,191.7C4640,207,4720,207,4800,203.2C4880,199,4960,192,5040,172.5C5120,153,5200,123,5280,111.2C5360,100,5440,107,5520,107.3C5600,107,5680,100,5720,95.8L5760,92L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(142.193, 35.045, 221.266, 1)" offset="0%"></stop><stop stop-color="rgba(255, 11, 242.876, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 50px);",opacity:" opacity:0.9"}} fill="url(#sw-gradient-1)" d="M0,207L40,207C80,207,160,207,240,172.5C320,138,400,69,480,42.2C560,15,640,31,720,49.8C800,69,880,92,960,99.7C1040,107,1120,100,1200,99.7C1280,100,1360,107,1440,103.5C1520,100,1600,84,1680,65.2C1760,46,1840,23,1920,30.7C2000,38,2080,77,2160,103.5C2240,130,2320,146,2400,138C2480,130,2560,100,2640,72.8C2720,46,2800,23,2880,34.5C2960,46,3040,92,3120,99.7C3200,107,3280,77,3360,65.2C3440,54,3520,61,3600,61.3C3680,61,3760,54,3840,69C3920,84,4000,123,4080,122.7C4160,123,4240,84,4320,61.3C4400,38,4480,31,4560,57.5C4640,84,4720,146,4800,164.8C4880,184,4960,161,5040,130.3C5120,100,5200,61,5280,69C5360,77,5440,130,5520,161C5600,192,5680,199,5720,203.2L5760,207L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(232.65, 62.571, 7.948, 1)" offset="0%"></stop><stop stop-color="rgba(255, 175.574, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 100px);",opacity:" opacity:0.8"}} fill="url(#sw-gradient-2)" d="M0,161L40,145.7C80,130,160,100,240,95.8C320,92,400,115,480,126.5C560,138,640,138,720,118.8C800,100,880,61,960,38.3C1040,15,1120,8,1200,11.5C1280,15,1360,31,1440,49.8C1520,69,1600,92,1680,95.8C1760,100,1840,84,1920,69C2000,54,2080,38,2160,34.5C2240,31,2320,38,2400,65.2C2480,92,2560,138,2640,145.7C2720,153,2800,123,2880,95.8C2960,69,3040,46,3120,49.8C3200,54,3280,84,3360,95.8C3440,107,3520,100,3600,107.3C3680,115,3760,138,3840,153.3C3920,169,4000,176,4080,184C4160,192,4240,199,4320,180.2C4400,161,4480,115,4560,88.2C4640,61,4720,54,4800,65.2C4880,77,4960,107,5040,111.2C5120,115,5200,92,5280,103.5C5360,115,5440,161,5520,157.2C5600,153,5680,100,5720,72.8L5760,46L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"></path></svg>
            <svg  className='absolute w-full lsm:flex tall:hidden   bottom-[0%] right-0 '  id="wave" style={{transform:"transform:rotate(0deg);",transition : "transition: 0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(5.831, 157.921, 255, 1)" offset="0%"></stop><stop stop-color="rgba(0, 68.762, 168.9, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 0px);", opacity : " opacity:1"}} fill="url(#sw-gradient-0)" d="M0,147L40,155.2C80,163,160,180,240,163.3C320,147,400,98,480,98C560,98,640,147,720,204.2C800,261,880,327,960,359.3C1040,392,1120,392,1200,400.2C1280,408,1360,425,1440,424.7C1520,425,1600,408,1680,400.2C1760,392,1840,392,1920,326.7C2000,261,2080,131,2160,81.7C2240,33,2320,65,2400,114.3C2480,163,2560,229,2640,277.7C2720,327,2800,359,2880,383.8C2960,408,3040,425,3120,432.8C3200,441,3280,441,3360,424.7C3440,408,3520,376,3600,334.8C3680,294,3760,245,3840,228.7C3920,212,4000,229,4080,269.5C4160,310,4240,376,4320,400.2C4400,425,4480,408,4560,334.8C4640,261,4720,131,4800,98C4880,65,4960,131,5040,138.8C5120,147,5200,98,5280,130.7C5360,163,5440,278,5520,294C5600,310,5680,229,5720,187.8L5760,147L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(232.65, 165.638, 23.712, 1)" offset="0%"></stop><stop stop-color="rgba(255, 86.824, 0, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 50px);", opacity :" opacity:0.9"}} fill="url(#sw-gradient-1)" d="M0,441L40,432.8C80,425,160,408,240,367.5C320,327,400,261,480,212.3C560,163,640,131,720,155.2C800,180,880,261,960,302.2C1040,343,1120,343,1200,310.3C1280,278,1360,212,1440,187.8C1520,163,1600,180,1680,204.2C1760,229,1840,261,1920,269.5C2000,278,2080,261,2160,261.3C2240,261,2320,278,2400,310.3C2480,343,2560,392,2640,343C2720,294,2800,147,2880,81.7C2960,16,3040,33,3120,81.7C3200,131,3280,212,3360,261.3C3440,310,3520,327,3600,351.2C3680,376,3760,408,3840,416.5C3920,425,4000,408,4080,400.2C4160,392,4240,392,4320,326.7C4400,261,4480,131,4560,138.8C4640,147,4720,294,4800,334.8C4880,376,4960,310,5040,236.8C5120,163,5200,82,5280,57.2C5360,33,5440,65,5520,65.3C5600,65,5680,33,5720,16.3L5760,0L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 28.869, 228.441, 1)" offset="0%"></stop><stop stop-color="rgba(86.248, 0, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 100px);" ,opacity: " opacity:0.8"}} fill="url(#sw-gradient-2)" d="M0,0L40,73.5C80,147,160,294,240,351.2C320,408,400,376,480,334.8C560,294,640,245,720,261.3C800,278,880,359,960,343C1040,327,1120,212,1200,196C1280,180,1360,261,1440,261.3C1520,261,1600,180,1680,155.2C1760,131,1840,163,1920,196C2000,229,2080,261,2160,277.7C2240,294,2320,294,2400,285.8C2480,278,2560,261,2640,236.8C2720,212,2800,180,2880,147C2960,114,3040,82,3120,114.3C3200,147,3280,245,3360,253.2C3440,261,3520,180,3600,138.8C3680,98,3760,98,3840,155.2C3920,212,4000,327,4080,367.5C4160,408,4240,376,4320,343C4400,310,4480,278,4560,220.5C4640,163,4720,82,4800,98C4880,114,4960,229,5040,294C5120,359,5200,376,5280,367.5C5360,359,5440,327,5520,261.3C5600,196,5680,98,5720,49L5760,0L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path></svg>
        </div>
   
  )
}

export default HeaderContainer
