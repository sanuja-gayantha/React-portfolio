import React from 'react'

const Life = () => {

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="life-wrapper bg-[#fff9ee] flex justify-center ">
      <div className="life-container flex flex-col max-w-[1366px] px-2 py-2 md:px-4  w-full">


        <div className="life-content flex lg:flex-row flex-col gap-4">

          <div className="left flex basis-1/2 flex-col">
            <div className="title font-saintecolombe text-[80px] md:text-[148px] lg:text-[176px] text-[#32512a] ">Life</div>

            <span className="font-obviously text-[14px] mb-3">I describe myself as a self-learning, and passionate developer who loves coding and designing. My journey with technology began in my early days when I first started working with computers.</span> 
            
            <span className="font-obviously text-[14px] mb-3">The thrill of solving problems and creating something out of nothing quickly turned into a lifelong passion for coding.</span>
            
            <span className="font-balto text-[14px] mb-3 font-medium">Over the years, my fascination with technology has only grown stronger. I constantly seek to expand my knowledge and skills, delving deeper into the intricate world of software development. </span>

            <span className="font-balto text-[14px] mb-6 font-medium">I am always excited to take on new challenges and collaborate with others who share my passion for technology. <span className="underline text-primary font-bold">Let's create something amazing together!</span></span>
            
            <div className="social flex flex-row gap-6">
              <span onClick={() => openInNewTab("https://www.linkedin.com/in/sanuja-gayantha-630115201/")} className="flex flex-row items-center gap-1 cursor-pointer">
                <img src="/img/linkedin.svg" alt="" srcSet="" className="w-4 h-4"/>
                <span className="font-balto text-[14px]">LinkedIn</span>
              </span>
              
              <span onClick={() => openInNewTab("https://github.com/sanuja-gayantha")} className="flex flex-row items-center gap-1 cursor-pointer">
                <img src="/img/github.svg" alt="" srcSet="" className="w-4 h-4"/>
                <span className="font-balto text-[14px]">GitHub</span>
              </span>
            </div>
          </div>
          
          <div className="right basis-1/2 ">
            <div className="img-container flex ">
              <img src="/img/me.webp" alt="sanuja's face image" srcSet="" className=""/>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Life