export const hiddenTranslateVariantY = (yInitial:number,yVal:number,duration:number,inView:boolean) => {
    return({
    hidden: { 
        y:'-30%',
        opacity: 0 
    },
    exit: { 
        y:'-2%',
        opacity: 0 
    },
    show: {
      opacity: inView ? 1 : 0,
      y: inView ? `${yVal}%` :`${yInitial}%`,
      transition: {
        duration:duration,
        delayChildren: 0.5
      }
    }
  })
}
export const hiddenTranslateVariantX = (xInitial:number,xVal:number,duration:number,inView:boolean) => {
    return({
    hidden: { 
        x:`${xInitial}%`,
        opacity: 0 
    },
    exit: { 
        x:`${xInitial}%`,
        opacity: 0 
    },
    show: {
      opacity: inView ? 1 : 0,
      x: inView ? `${xVal}%` :`${xInitial}%` ,
      transition: {
        duration:duration,
        delayChildren: 0.5
      }
    }
  })
}
export const hiddenTranslateVariantXY = (xInitial:number,yInitial:number,xVal:number,yVal:number,duration:number,inView:boolean) => {
    return({
    hidden: { 
        y:'-30%',
        x:'-30%',
        opacity: 0 
    },
    exit: { 
        y:'-2%',
        x:'-2%',
        opacity: 0 
    },
    show: {
      opacity: inView ? 1 : 0,
      x: inView ? `${xVal}%` :`${xInitial}%` ,
      y: inView ? `${yVal}%` :`${yInitial}%` ,
      transition: {
        duration:duration,
        delayChildren: 0.5
      }
    }
  })
}