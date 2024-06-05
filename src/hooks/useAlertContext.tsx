import { useContext } from "react";
import AlertContaxt from "../contaxt/AlertContaxt";

export const useAlertContext = () => {
    return useContext(AlertContaxt);
}