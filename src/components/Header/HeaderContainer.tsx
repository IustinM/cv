import earth from '../../images/earth.png';
import moon from '../../images/moon.png';
import satellite from '../../images/satellite.png';
import satellite2 from '../../images/satellite2.png';
import { useContext, useEffect} from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import ImageComponent from '../utils/ImageComponent';
// import pdf from '../../../public/morosanu_iustin_cv.pdf'
const HeaderContainer = () => {

    const {setBackgroundIndex} = useContext(GeneralContext);

    const downloadFile = () => {
        // Înlocuiește 'link-ul-catre-pdf' cu URL-ul real către fișierul PDF
        const pdfUrl = '../../../public/morosanu_iustin_cv.pdf';
        // Creează un element de tip <a> pentru a iniția descărcarea
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'morosanu_iustin_cv.pdf'; // Numele cu care va fi salvat fișierul
    
        // Adaugă elementul <a> în DOM și declanșează descărcarea
        document.body.appendChild(link);
        link.click();
    
        // Sterge elementul <a> după ce descărcarea a fost inițiată
        document.body.removeChild(link);
      };
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(()=>{
        if(inView){
            setBackgroundIndex(0);
        }
    },[inView]);
   
  return (
    <div ref={ref} className='w-full relative min-h-[100vh] text-white pt-[15vh] md:pt-0'>
        <div className="flex items-center h-[70vh] md:bg-mobileShadowBg md:w-full md:border-0 md:min-h-[100vh] md:p-0  mxl:rounded-[0.5rem] relative mxl:p-[2rem] z-[200] w-[70%] mx-auto">
            <div className="md:[w-70%] md:mx-auto xsm:mx-[2rem] ">
                <h2 className="text-[2.5rem] ls:text-[2rem] sm:text-[1.5rem] md:font-bold">Frontend Developer</h2>
                <p className="flex-1 my-[1.5rem] text-[1.8rem] ls:text-[1.3rem] sm:text-[1.1rem] md:font-bold">The journey of a developer's universe</p>
                {/* <button onClick={downloadFile} className='hover:bg-white w-[180px] flex items-center justify-center px-[1.5rem] my-[1rem] py-[0.5rem] border-[2px] text-[1.1rem] sm:text-[0.9rem] sm:px-[1rem] text-white border-white   hover:bg-transparent  transition-all  hover:text-black rounded-[0.2rem] cursor-pointer hover:bg' >
                    Download CV
                </button> */}
                <div className="text-[3rem] sm:text-[2rem]">
                    <a href='https://www.linkedin.com/in/morosanu-iustin-b10990222/' target="_blank" ><FontAwesomeIcon className='cursor-pointer' icon={faLinkedin}/></a>
                    <a href='https://github.com/IustinM' target="_blank" ><FontAwesomeIcon className='ml-[1.5rem] cursor-pointer' icon={faGithub}/></a>
                </div>
            </div>
        </div>
        <img  src={earth} alt={'earth img'}  style={{right:'15%',bottom:'10%'}} className='w-[350px] absolute h-[350px] xl:w-[250px] xl:h-[250px] sm:w-[180px] sm:h-[180px]'/>
        <img src={moon} alt={'moon img'}  style={{right:'25%',top:'20%'}} className='w-[200px] absolute h-[200px] xl:w-[150px] xl:h-[150px] sm:w-[120px] sm:h-[120px]'/>
        {/* <ImageComponent width={200} height={200} src={moon} alt={'moon img'} left={59} top={22} distance={35} /> */}
        <ImageComponent width={40} height={40} src={satellite} alt={'satellite img'} left={75} top={42} distance={100} />
        <ImageComponent width={50} height={50} src={satellite2} alt={'satellite2 img'} left={85} top={76} distance={70} />         
    </div>
  )
}

export default HeaderContainer
