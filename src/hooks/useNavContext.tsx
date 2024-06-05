import { useContext } from "react";
import NavContaxt from "../contaxt/NavContaxt";

export const useNavContext = () => {
    return useContext(NavContaxt)
}