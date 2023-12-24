import React, { useEffect, useMemo, useState } from 'react'
import ImageComponent from './ImageComponent'
import meteoriteImg from '../../images/meteorite.png';

const Meteorites =() => useMemo(() => {

    function randomIntFromInterval(min:number, max:number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateRandomPosition = (position:string) => {
    if (typeof window !== "undefined") {
        if(position === 'x'){
            return randomIntFromInterval(window.innerHeight,0)

        }else{
            return randomIntFromInterval(window.innerWidth,0)
        }
        
        }
    }  
    
    const [randomMeteoritesNumber,setRandomMeteoritesNumber] = useState<number[]>([]);
    const generateNumberMeteorite = (number:number) =>{
        const numberArray = [];
        for(let i = 0 ;i<=number;i++){
            numberArray.push(i);
        }
        setRandomMeteoritesNumber([...numberArray]);
        
    }
    useEffect(()=>{
        generateNumberMeteorite(20);
    },[]);

   

  return (
    <div> 
        {randomMeteoritesNumber.map(meteorite =>
            <ImageComponent width={150} height={150} src={meteoriteImg} alt={'meteorite img'} left={generateRandomPosition('x')!} top={generateRandomPosition('y')!} distance={0} />
        )}
    </div>
  )
},[])

export default Meteorites