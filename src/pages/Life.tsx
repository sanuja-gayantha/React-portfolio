

const Life = () => {

  const TechStack_frontend = ["React", "Angular", "HTML5", "CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Sass"];
  const TechStack_backend = ["Node.js", "Python", "SQL", "MongoDB", "REST API"];
  const Tools = ["Vite", "Git", "GitHub", "Windows", "Linux"];

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section id='life' className="life-wrapper bg-[#fff9ee] flex justify-center ">
      <div className="life-container flex flex-col max-w-[1366px] px-2 py-[50px] lg:py-[100px] md:px-4  w-full">
        <div className="title font-saintecolombe text-[65px] md:text-[148px] lg:text-[176px] text-[#32512a] text-center">Life</div>

        <div className="life-content flex lg:flex-row flex-col gap-4">

          <div className="right basis-1/2 flex flex-col items-end">
            <div className="img-container flex flex-col max-w-[500px]">
              <img src="/img/me.webp" alt="sanuja's face image" srcSet="" className="" />
            </div>

          </div>

          <div className="left flex basis-1/2 flex-col">

            <span className="font-obviously text-[14px] mb-3">I describe myself as a self-learning, and passionate developer who loves coding and designing. My journey with technology began in my early days when I first started working with computers.</span>

            <span className="font-obviously text-[14px] mb-3">The thrill of solving problems and creating something out of nothing quickly turned into a lifelong passion for coding.</span>

            <span className="font-balto text-[14px] mb-3 font-medium">Over the years, my fascination with technology has only grown stronger. I constantly seek to expand my knowledge and skills, delving deeper into the intricate world of software development. </span>

            <span className="font-balto text-[14px] mb-6 font-medium">I am always excited to take on new challenges and collaborate with others who share my passion for technology. <span className="underline text-primary font-bold">Let's create something amazing together!</span></span>

            <div className="techstackinfo-container flex flex-col gap-3">

              <div className="frontend-stack flex flex-col gap-3">
                <span className="uppercase font-obviously text-[10px]">frontend </span>
                <div className="stack flex flex-row flex-wrap gap-1">
                  {TechStack_frontend.map((tech, index) => (
                    <span key={index} className="bg-slate-800 rounded p-1 font-obviously text-[8px] text-white ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="backend-stack flex flex-col gap-3">
                <span className="uppercase font-obviously text-[10px]">backend </span>
                <div className="stack flex flex-row gap-1 flex-wrap">
                  {TechStack_backend.map((tech, index) => (
                    <span key={index} className="bg-slate-800 rounded p-1 font-obviously text-[8px] text-white ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="tools flex flex-col gap-3">
                <span className="uppercase font-obviously text-[10px]">development tools</span>
                <div className="stack flex flex-row gap-1 flex-wrap">
                  {Tools.map((tech, index) => (
                    <span key={index} className="bg-slate-800 rounded p-1 font-obviously text-[8px] text-white ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="social flex flex-col gap-3 mt-5 ">
              <span className="uppercase font-obviously text-[10px]">my social</span>
              <div className="info flex flex-row gap-6">
                <span onClick={() => openInNewTab("https://www.linkedin.com/in/sanuja-gayantha-630115201/")} className="flex flex-row items-center gap-1 cursor-pointer">
                  <img src="/img/linkedin.svg" alt="" srcSet="" className="w-4 h-4" />
                  <span className="font-obviously text-[8px]">LinkedIn</span>
                </span>

                <span onClick={() => openInNewTab("https://github.com/sanuja-gayantha")} className="flex flex-row items-center gap-1 cursor-pointer">
                  <img src="/img/github.svg" alt="" srcSet="" className="w-4 h-4" />
                  <span className="font-obviously text-[8px]">GitHub</span>
                </span>
              </div>

            </div>
          </div>


        </div>


      </div>
    </section>
  )
}

export default Life