export const hiddenTranslateVariant = (yVal:number) => {
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
      opacity: 1,
      y:`${yVal}%`,
      transition: {
        delayChildren: 0.5
      }
    }
  })
}