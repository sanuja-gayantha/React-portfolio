
import { createContext, useRef, useState } from 'react'

const AlertContaxt = createContext({});

interface AlertInputs {
    show: boolean;
    type: string;
    borderColor: string;
    bgColor: string;
    messageTitle: string;
    message: string;
}

export const AlertProvider = ({ children}:any) => {
    const refFirstName: any  = useRef('');
    const refEmail: any  = useRef('');
    const refMessage: any  = useRef('');
    const [alert, setAlert] = useState<AlertInputs>({ show: false, type: '', borderColor:'', bgColor:'', messageTitle: '', message:''});

    const showAlert = (show = false, type = '', borderColor='', bgColor='', messageTitle='', message = '') => {
        setAlert({ show, type, borderColor, bgColor, messageTitle, message });
      };

    return (
        <AlertContaxt.Provider value={{
            refFirstName,
            refEmail,
            refMessage,
            alert,
            showAlert
        }}>
            {children}
        </AlertContaxt.Provider>
    )
}

export default AlertContaxt;

