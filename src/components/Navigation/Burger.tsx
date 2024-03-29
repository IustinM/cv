import React, { useEffect } from 'react'

interface Props{
    hideBurgerNav:boolean,
    setHideBurgerNav:React.Dispatch<React.SetStateAction<boolean>>
}

const Burger:React.FC<Props> = ({setHideBurgerNav,hideBurgerNav}) => {

    useEffect(()=>{
        setHideBurgerNav(true)
    },[])

  return (
    <div onClick={() => setHideBurgerNav(!hideBurgerNav)} className="hidden cursor-pointer mxl:flex mxl:flex-col mxl:justify-center ">
        <div className="">
            <div className={`w-[30px] h-[3px] rounded-[1rem] ${!hideBurgerNav ? 'rotate-45 translate-y-[3px]' : ''} transition-all   bg-black `}></div>
            <div className={`w-[30px] h-[3px]  rounded-[1rem]  ${!hideBurgerNav ? 'hidden' : ''} transition-all bg-black my-2`}></div>
            <div className={`w-[30px] h-[3px]  rounded-[1rem]  ${!hideBurgerNav ? '-rotate-45' : ''} transition-all  bg-black`}></div>
        </div>
      </div>  
  )
}

export default Burger