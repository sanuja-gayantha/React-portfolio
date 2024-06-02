import { useEffect } from "react";

interface AlertMessageInputs {
    type: string;
    borderColor: string;
    bgColor: string;
    messageTitle: string;
    message: string;
    removeAlert: Function;
}

const Alert = ({ type, borderColor, bgColor, messageTitle, message, removeAlert }: AlertMessageInputs) => {
    useEffect(()=> {
        const timeout = setTimeout(() => {
            removeAlert();
          }, 15000);
          return () => clearTimeout(timeout);
    }, [type])

    return (

        <div className="border-l-4 rounded-b text-black-900 px-4 py-3 shadow-md" style={{ backgroundColor: bgColor, borderColor: borderColor }}>
            <div className="flex flex-col gap-1">
                <p className="font-bold text-[10px]">{messageTitle}</p>
                <p className="text-[8px]">{message}</p>
            </div>
        </div >
    )
}

export default Alert