export function randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export const generateRandomPosition = (position:string) => {
    if (typeof window !== "undefined") {
        // Client-side-only code
        if(position === 'x'){
            return randomIntFromInterval(window.innerHeight,0)

        }else{
            return randomIntFromInterval(window.innerWidth,0)
        }
        
      }
}  