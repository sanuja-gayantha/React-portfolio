import React from 'react'

const Hero = () => {
  return (
    <div className="hero-wrapper flex flex-col lg:flex-row py-2 border-2 border-black">
      {/* <div className="hello-description  border-2 border-black">
          <span>HELLO</span>
          <span>STRANGER</span>
      </div> */}
      <div className="hero-content  border-2 border-black">
        <div className="image ">
          <img src="https://i.ibb.co/p1989T3/73db1f39.jpg" className="w-auto max-w-[350px]" alt="" srcset="" />
        </div>
        <div className="intro "></div>
        
      </div>
      


    </div>
  )
}

export default Hero