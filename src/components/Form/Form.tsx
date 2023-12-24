import { faCheckCircle, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GeneralContext } from '../../context/generalContext';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

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
    if(email.length> 0 && name.length> 0&&message.length >0){
        emailjs.sendForm(process.env.REACT_APP_API_EMAIL_SERVICE_ID!,process.env.REACT_APP_API_EMAIL_TEMPLATE_ID!,form.current!,process.env.REACT_APP_API_EMAIL_PUBLIC_KEY)
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
        setSubmitted(false)
      },2000)
    }
    },[submitted])
  
  return (
    <div ref={setRefs} id='contact' className='flex min-h-[100vh]  pb-[1rem] relative z-[202] justify-center md:bg-mobileShadowBg items-center'>
       
            <form ref={form} onSubmit={onSubmitHandler} className='flex bg-shadowBg flex-col min-h-[550px] sm:border-0 sm:bg-transparent p-[1rem] border-[1px] rounded-[0.5rem] border-white w-[350px] px-[1.5rem]  justify-center h-[300px] text-black'>
              <div className="w-[85%] mx-auto flex flex-col">
                <h2 className="text-white text-[1.5rem] pb-[1rem]">Contact</h2>
                 <div className={` mb-[1rem] ${errorMessage.length > 0 ? 'opacity-1 text-[#ff4343] ' :'opacity-0'}`}>
                  <FontAwesomeIcon className='mr-[0.3rem]' icon={faExclamationTriangle}/>
                  {errorMessage}
                </div>
                
                <label className='mb-[0.5rem] text-white' htmlFor="name">Name:</label>
                <input type="text" name="user_name" id='name' onChange={(e:any) => setName(e.target.value)} placeholder='Name' className=' p-[0.5rem] rounded-[0.2rem]'/>
                <label className='mb-[0.5rem] mt-[1rem] text-white' htmlFor="email">Email:</label>
                <input type='email' id='email' placeholder='Email' onChange={(e:any)=>setEmail(e.target.value)} name="user_email" className='p-[0.5rem] rounded-[0.2rem]'/>
                <label className='mb-[0.5rem] mt-[1rem] text-white' htmlFor="message">Message:</label>
                <textarea  name='message' onChange={(e:any) =>setMessage(e.target.value)}  id='message' placeholder='Message' className='resize-none  rounded-[0.2rem] h-[100px] p-[0.5rem]'/>
                <button type='submit'  className={` ${submitted ? 'bg-[#1fa32a] text-white' : 'hover:bg-white text-white border-white hover:bg-transparent   hover:text-black'} px-[1rem] mt-[1rem] p-[0.5rem] border-[2px] text-[1.1rem] transition-all  flex items-center justify-center rounded-[0.2rem] cursor-pointer`}>
                    <span>{submitted ? 'Submitted':'Submit'}</span>
                    { submitted ? 
                    <FontAwesomeIcon className='text-[1.2rem] ml-[0.5rem]' icon={faCheckCircle}/> :
                    <FontAwesomeIcon className='text-[1.2rem] ml-[0.5rem]' icon={faEnvelope}/> 
                    }
                </button>
              </div>
            </form>
    </div>
  )
  
})

export default Form