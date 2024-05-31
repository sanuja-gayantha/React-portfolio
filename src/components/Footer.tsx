
const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="footer-wrapper bg-[#1f1437] flex justify-center h-[60px]">
        <span className="text-white items-center flex font-obviously text-[10px]">
          Copyright © {Year}. All rights are reserved.
        </span>
        
    </div>
  )
}

export default Footer