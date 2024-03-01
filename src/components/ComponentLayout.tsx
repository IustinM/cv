
export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <div className=' w-full relative min-h-[100vh] text-white '>
        {children}
        {/* <div id="stars-group  -1" className='z-[100] top-0 absolute'></div> */}
            {/* <div id="stars-group-2" className='z-[100] top-0 absolute'></div>
            <div id="stars-group-3" className='z-[100] top-0 absolute'></div>
            <div id="stars-group-4" className='z-[100] top-0 absolute'></div> */}
            {/* <div id="stars-group-5" className='z-[100] top-0 absolute'></div>
            <div id="stars-group-6" className='z-[100] top-0 absolute'></div> */}
            
        </div>
  
  )
}
