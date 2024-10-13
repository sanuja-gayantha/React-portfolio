import Button from "../components/Button"

const Hero = () => {

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section id='home' className="hero-wrapper bg-[#f4f2ed] flex justify-center ">
      <div className="hero-container  flex flex-col lg:flex-row py-2 max-w-[1366px] relative px-2 md:px-4 ">

        <div className="hello-description  absolute top-5 left-0 font-obviously font-black flex flex-col">
          <span className="lg:text-[100px] md:text-[80px] text-[40px] ml-[10px] lg:ml-[20px] text-primary2 uppercase">HELLO</span>
          <span className="lg:text-[100px] md:text-[80px] text-[40px] ml-[10px] lg:ml-[20px] text-primary2 uppercase">STRANGER</span>
          <span className="lg:text-[50px] md:text-[40px] text-[20px] ml-[10px] lg:ml-[20px] text-primary2 uppercase">Welcome</span>
          <span className="lg:text-[50px] md:text-[40px] text-[20px] ml-[10px] lg:ml-[20px] text-primary2 uppercase">To my portfolio..</span>
        </div>

        <div className="hero-content  flex flex-col lg:flex-row gap-4">

          <div className="image w-full h-full basis-3/4 md:pl-[100px] ">

            <img src="https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" alt="" srcSet="" />
          </div>

          <div className="intro basis-1/4 flex flex-col">
            <div className="basis-1/3"></div>
            <div className="info basis-2/3 flex flex-col space-y-6">

              <span className="font-saintecolombe font-black text-[52px]">I'm <span className="text-primary">Sanuja</span></span>
              <span className="font-obviously text-[14px] mb-3">A self-motivated Software Engineer (Web & Web Scraping) based in <span onClick={() => openInNewTab("https://www.google.com/search?q=sri+lanka")} className="underline cursor-pointer">Sri Lanka.</span></span>
              <span className="font-obviously text-[14px]">I specialize in web scraping and building modern, responsive web applications. <span className="font-balto font-medium">Take a look around, explore my work, and feel free to reach out if you'd like to collaborate or just chat about tech.</span></span>
              <a href="#contact">
                <Button value="Contact Me" />
              </a>

            </div>

          </div>
        </div>

      </div>



    </section>



  )
}

export default Hero
