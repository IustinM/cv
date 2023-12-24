import { createContext, useState } from "react";

export const GeneralContext = createContext<any>('');

const  GeneralProvider = ({children}:{children:any}) =>{

    const [backgroundIndex,setBackgroundIndex] = useState<number>(0);
    return (
    <GeneralContext.Provider value={{backgroundIndex,setBackgroundIndex}}>
        {children}
    </GeneralContext.Provider>)
}

export default GeneralProvider;