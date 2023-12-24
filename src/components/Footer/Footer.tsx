import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='bg-black relative z-[150] text-white h-[120px] flex justify-around items-center '>
        <div className="">
            <h2> &copy; Iustin Morosanu</h2>
            <h4>2023</h4>
        </div>
        <div className="">
            <div className="text-[1.4rem]">
                <a href='https://www.linkedin.com/in/morosanu-iustin-b10990222/' target="_blank" ><FontAwesomeIcon className='cursor-pointer' icon={faLinkedin}/></a>
                <a href='https://github.com/IustinM' target="_blank" ><FontAwesomeIcon className='ml-[0.5rem] cursor-pointer' icon={faGithub}/></a>
            </div>
            <div className="text-[0.9rem]">
                <h4>morosanuiustin@gmail.com</h4>
                <h5>07435292135</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer