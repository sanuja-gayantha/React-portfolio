import { createContext, useState } from "react";


const NavContaxt = createContext({});

export const NavProvider = (({children}:any) => {

    const [show, setShow] = useState<boolean>(false);
    
    return <NavContaxt.Provider value={{
        show,
        setShow
    }}>
        {children}
    </NavContaxt.Provider>


})

export default NavContaxt;