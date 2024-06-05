import { useNavContext } from "../hooks/useNavContext"


const Navbar = () => {

  const {show, setShow}:any = useNavContext();

  return (
    <div className="nav-wrapper bg-[#f4f2ed] flex flex-col justify-center sticky top-0 z-10 shadow-sm">
      <div className="nav-container max-w-[1366px] flex flex-row h-[60px] w-full justify-between p-2 md:px-4 items-center font-obviously font-bold">

        {/* <div className="top-menu flex flex-row justify-between lg:px-4 px-2 items-center font-obviously font-bold "> */}

        <a href="" className="lg:pl-4 logo flex flex-row gap-2 justify-center items-center cursor-pointer " >
          <img src="img/ico.svg" alt="logo" srcSet="" className="w-[30px] h-[30px]" />
          <span className="text-[15px] md:inline-block hidden ">SANUJA</span>
        </a>

        <a  onClick={() => setShow(!show)} className="text-primary2 text-[24px] lg:text-[30px] cursor-pointer ">MENU</a>

      </div>


    </div>
  )
}

export default Navbar