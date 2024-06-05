import { useNavContext } from "../hooks/useNavContext";

const NavItem = ({ item }: { item: any }) => {
  const { show, setShow }: any = useNavContext();

  return (
    <a onClick={() => setShow(!show)} href={item.linkValue}>
      <div className="w-full text-center text-gray-900 font-saintecolombe text-[24px] md:text-[60px] overflow-hidden hover:animate-ping cursor-pointer" style={{}}>
        {item.title}
      </div>
    </a>

  )
}

export default NavItem