import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-wrapper bg-[#f4f2ed] flex justify-center sticky top-0 z-10 shadow-sm">
      <div className="nav-container max-w-[1366px] flex flex-row  w-full justify-between p-2 md:px-4 items-center font-obviously font-bold">

        {/* <div className="top-menu flex flex-row justify-between lg:px-4 px-2 items-center font-obviously font-bold "> */}

        <a href="" className="lg:pl-4 logo flex flex-row gap-2 justify-center items-center cursor-pointer " >
          <img src="../../public/img/ico.svg" alt="logo" srcSet="" className="w-[30px] h-[30px]" />
          <span className="text-[15px] md:inline-block hidden ">SANUJA</span>
        </a>

        <a className="text-primary2 text-[24px] lg:text-[30px] cursor-pointer ">MENU</a>

        {/* <a className="lg:hidden">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </a> */}
        {/* </div> */}
      </div>


    </div>
  )
}

export default Navbar