import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className=' relative z-[150] text-black h-[120px] md:h-[150px] flex md:flex-col md:justify-center justify-around items-center '>
        <div className="md:flex">
            <h2> &copy; Iustin Morosanu</h2>
            <div className="mx-[1rem]"></div>
            <h4>{(new Date()).getFullYear()}</h4>
        </div>
        <div className="md:flex md:flex-col md:items-center md:mt-[1rem]">
            <div className="text-[1.4rem]">
                <a href='https://www.linkedin.com/in/morosanu-iustin-b10990222/' target="_blank" ><FontAwesomeIcon className='cursor-pointer' icon={faLinkedin}/></a>
                <a href='https://github.com/IustinM' target="_blank" ><FontAwesomeIcon className='ml-[0.5rem] cursor-pointer' icon={faGithub}/></a>
            </div>
            <div className="text-[0.9rem] md:flex md:flex-col md:items-center">
                <h4>morosanuiustin@gmail.com</h4>
                <h5>07435292135</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer