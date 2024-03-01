import { faCheckCircle, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import Header from '../utils/Header';

const Form:React.FC<any> = React.forwardRef(({},myRef:any) => {

 
  const {setBackgroundIndex} = useContext(GeneralContext);

  const form = useRef(null);
  //local state -->
  const [email,setEmail] = useState<string>('');
  const [name,setName] = useState<string>('');
  const [submitted,setSubmitted] = useState<boolean>(true);
  const [message,setMessage] = useState<string>('');
  const [errorMessage,setErrorMessage] = useState<string>('')
  //<-- local state

  const { ref : inViewRef, inView } = useInView({
    threshold: 0.8,
  });

  const setRefs = useCallback(
    (node: Element | null | undefined) => {
      myRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  const onSubmitHandler = (e:any) =>{
   
    e.preventDefault();
    if( name.length< 2 && email.length> 0  &&message.length >10){
      setErrorMessage('Name should be at least 2 characters long');
      return;
    } else if( message.length< 10 &&name.length> 2 && email.length> 0){
      setErrorMessage('Message should be at least 10 characters long');
      return;
    }
    if(email.length> 0 && name.length> 0 &&message.length >0){
        emailjs.sendForm(process.env.REACT_APP_API_EMAIL_SERVICE_ID!,process.env.REACT_APP_API_EMAIL_TEMPLATE_ID!,e.target,process.env.REACT_APP_API_EMAIL_PUBLIC_KEY)
        .then(result => 
          setSubmitted(true))
        .catch(error => setErrorMessage('Something went wrong'))
    }else{
      setErrorMessage('Please complete all fields')
    }
    
  
  }
    
  useEffect(() =>{
    if(inView){
      setBackgroundIndex(7);
    }
  },[inView]);
  useEffect(() =>{
    setErrorMessage('');
  },[name,email,message]);

  useEffect(()=>{
    if(submitted){
      setTimeout(() => {
        setName('');
        setMessage('');
        setErrorMessage('');
        setSubmitted(false)
      },2000)
    }
    },[submitted])
  
  return (
    <div ref={setRefs} id='contact' className='flex min-h-[90vh] relative pb-[1rem]  z-[201] justify-center items-center'>
       
            <form ref={form} onSubmit={onSubmitHandler} className='flex relative z-[50] bg-greyBg flex-col min-h-[550px] sm:border-0 sm:bg-transparent p-[1rem] border-[1px] rounded-[0.5rem] border-white w-[350px] px-[1.5rem]  justify-center h-[300px] text-black'>
              <div className="w-[85%] mx-auto flex flex-col">
                  <div className="flex justify-center">
                    <Header title='Contact'/>
                  </div>
                 <div className={` mb-[1rem] ${errorMessage.length > 0 ? 'opacity-1 text-[#ff4343] ' :'opacity-0'}`}>
                  <FontAwesomeIcon className='mr-[0.3rem]' icon={faExclamationTriangle}/>
                  {errorMessage}
                </div>
                
                <label className='mb-[0.5rem] ' htmlFor="user_name">Name:</label>
                <input type="text" name="name" id='name'  onChange={(e:any) => setName(e.target.value)} placeholder='Name' className=' p-[0.5rem] border-[1px] border-black rounded-[0.2rem]'/>
                <label className='mb-[0.5rem] mt-[1rem] ' htmlFor="email">Email:</label>
                <input type='email'  id='email' placeholder='Email' onChange={(e:any)=>setEmail(e.target.value)} name="email" className='p-[0.5rem] border-[1px] border-black rounded-[0.2rem]'/>
                <label className='mb-[0.5rem] mt-[1rem] ' htmlFor="message">Message:</label>
                <textarea  name='message' onChange={(e:any) =>setMessage(e.target.value)}  id='message' placeholder='Message' className='resize-none  rounded-[0.2rem] h-[100px] p-[0.5rem] border-[1px] border-black'/>
                <button type='submit'  className={` px-[1rem] mt-[1rem] p-[0.5rem]  bg-black text-white hover:bg-greyCard rounded-[0.3rem] text-[1.1rem] transition-all  flex items-center justify-center  cursor-pointer`}>
                    <span>{submitted ? 'Submitted':'Submit'}</span>
                    { submitted ? 
                    <FontAwesomeIcon className='text-[1.2rem] ml-[0.5rem]' icon={faCheckCircle}/> :
                    <FontAwesomeIcon className='text-[1.2rem] ml-[0.5rem]' icon={faEnvelope}/> 
                    }
                </button>
              </div>
            </form>
            <svg className='absolute w-full mxl:flex hidden   bottom-[0%] right-0 ' id="wave" style={{transform:"transform:rotate(180deg);",transition: " transition: 0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-120" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(184.54, 62, 243, 1)" offset="0%"></stop><stop stop-color="rgba(11, 151.669, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 0px);", opacity: " opacity:1"}} fill="url(#sw-gradient-120)" d="M0,164L24,198.2C48,232,96,301,144,307.5C192,314,240,260,288,198.2C336,137,384,68,432,88.8C480,109,528,219,576,252.8C624,287,672,246,720,218.7C768,191,816,178,864,191.3C912,205,960,246,1008,252.8C1056,260,1104,232,1152,191.3C1200,150,1248,96,1296,61.5C1344,27,1392,14,1440,6.8C1488,0,1536,0,1584,0C1632,0,1680,0,1728,6.8C1776,14,1824,27,1872,68.3C1920,109,1968,178,2016,191.3C2064,205,2112,164,2160,136.7C2208,109,2256,96,2304,123C2352,150,2400,219,2448,232.3C2496,246,2544,205,2592,164C2640,123,2688,82,2736,95.7C2784,109,2832,178,2880,184.5C2928,191,2976,137,3024,123C3072,109,3120,137,3168,177.7C3216,219,3264,273,3312,287C3360,301,3408,273,3432,259.7L3456,246L3456,410L3432,410C3408,410,3360,410,3312,410C3264,410,3216,410,3168,410C3120,410,3072,410,3024,410C2976,410,2928,410,2880,410C2832,410,2784,410,2736,410C2688,410,2640,410,2592,410C2544,410,2496,410,2448,410C2400,410,2352,410,2304,410C2256,410,2208,410,2160,410C2112,410,2064,410,2016,410C1968,410,1920,410,1872,410C1824,410,1776,410,1728,410C1680,410,1632,410,1584,410C1536,410,1488,410,1440,410C1392,410,1344,410,1296,410C1248,410,1200,410,1152,410C1104,410,1056,410,1008,410C960,410,912,410,864,410C816,410,768,410,720,410C672,410,624,410,576,410C528,410,480,410,432,410C384,410,336,410,288,410C240,410,192,410,144,410C96,410,48,410,24,410L0,410Z"></path><defs><linearGradient id="sw-gradient-10" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 62, 172.685, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"transform:translate(0, 50px);",opacity:" opacity:0.9" }}fill="url(#sw-gradient-10)" d="M0,82L24,116.2C48,150,96,219,144,259.7C192,301,240,314,288,307.5C336,301,384,273,432,218.7C480,164,528,82,576,68.3C624,55,672,109,720,164C768,219,816,273,864,300.7C912,328,960,328,1008,328C1056,328,1104,328,1152,334.8C1200,342,1248,355,1296,348.5C1344,342,1392,314,1440,259.7C1488,205,1536,123,1584,88.8C1632,55,1680,68,1728,68.3C1776,68,1824,55,1872,68.3C1920,82,1968,123,2016,116.2C2064,109,2112,55,2160,34.2C2208,14,2256,27,2304,88.8C2352,150,2400,260,2448,252.8C2496,246,2544,123,2592,116.2C2640,109,2688,219,2736,239.2C2784,260,2832,191,2880,170.8C2928,150,2976,178,3024,170.8C3072,164,3120,123,3168,129.8C3216,137,3264,191,3312,239.2C3360,287,3408,328,3432,348.5L3456,369L3456,410L3432,410C3408,410,3360,410,3312,410C3264,410,3216,410,3168,410C3120,410,3072,410,3024,410C2976,410,2928,410,2880,410C2832,410,2784,410,2736,410C2688,410,2640,410,2592,410C2544,410,2496,410,2448,410C2400,410,2352,410,2304,410C2256,410,2208,410,2160,410C2112,410,2064,410,2016,410C1968,410,1920,410,1872,410C1824,410,1776,410,1728,410C1680,410,1632,410,1584,410C1536,410,1488,410,1440,410C1392,410,1344,410,1296,410C1248,410,1200,410,1152,410C1104,410,1056,410,1008,410C960,410,912,410,864,410C816,410,768,410,720,410C672,410,624,410,576,410C528,410,480,410,432,410C384,410,336,410,288,410C240,410,192,410,144,410C96,410,48,410,24,410L0,410Z"></path></svg>
    </div>
  )
  
})

export default Form