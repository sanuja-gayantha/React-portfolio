import { useNavContext } from '../hooks/useNavContext';
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandGithubFilled } from "react-icons/tb";
import NavItem from '../components/NavItem';

const NavContent = () => {
    const navItemsList: Array<object> = [
        {
            id: 1,
            title: "Home",
            bgColor: '#7ce2a5',
            linkValue: '#home'
        },
        {
            id: 2,
            title: "Life",
            bgColor: '#f9ce60',
            linkValue: '#life'
        },

        {
            id: 3,
            title: "Projects",
            bgColor: '#da5a3d',
            linkValue: '#projects'
        },
        {
            id: 4,
            title: "Experience",
            bgColor: '#6d4bf4',
            linkValue: '#experience'
        },
        {
            id: 5,
            title: "Contact",
            bgColor: '#f4f2ed',
            linkValue: '#contact'
        },

    ]
    const { show, setShow }: any = useNavContext();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            {
                show ? (
                    <div className="nav-content-wrapper transition-all bg-[#f4f2ed] flex flex-col sticky top-0 z-50 shadow-sm h-screen">
                        <div className="nav-content-container absolute flex flex-col w-full h-full">

                            <div className="top-bar max-w-[1366px] flex flex-row h-[60px] w-full justify-between p-2 md:px-4 items-center font-obviously font-bold">

                                <a href="" className="lg:pl-4 logo flex flex-row gap-2 justify-center items-center cursor-pointer" >
                                    <img src="img/ico.svg" alt="logo" srcSet="" className="w-[30px] h-[30px]" />
                                    <span className="text-[15px] md:inline-block hidden">SANUJA</span>
                                </a>

                                <a className="text-primary2 cursor-pointer" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </a>
                            </div>

                            <div className="social max-w-[1366px] lg:pl-8 p-2 md:px-4 flex flex-row gap-2">
                                <TiSocialLinkedin onClick={() => openInNewTab("https://www.linkedin.com/in/sanuja-gayantha-630115201/")} className="border-2 border-black rounded-full min-h-[25px] min-w-[25px] cursor-pointer" />
                                <TbBrandGithubFilled onClick={() => openInNewTab("https://github.com/sanuja-gayantha")} className="border-2 border-black min-h-[25px] min-w-[25px] rounded-full cursor-pointer" />
                            </div>

                            <div className="nav-items h-full flex flex-col gap-4 lg:gap-0">
                                {navItemsList.map((item, index) => (
                                        <NavItem item={item} key={index} />
                                ))}

                            </div>

                        </div>

                    </div>

                ) : ""
            }
        </>
    )
}

export default NavContent