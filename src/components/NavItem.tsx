
const NavItem = ({item}:{item:any}) => {
  return (
    <div className="w-full text-center text-gray-900 font-saintecolombe text-[24px] md:text-[60px] overflow-hidden hover:animate-bounce cursor-pointer" style={{ }}>
      {item.title}
    </div>
  )
}

export default NavItem