import React from 'react'
import TechIcons from '../components/TechIcons'



const TecStack = () => {
    return (
        <div className="techstack-wrapper bg-[#f4f2ed] flex justify-center ">
            <div className="techstack-container flex flex-col max-w-[1366px] px-2 py-2 md:px-4  w-full overflow-hidden">
                <div className="logos p-[40px] whitespace-nowrap flex flex-row">
                    <TechIcons/>
                    <TechIcons/>
                    <TechIcons/>
                </div>

            </div>
        </div>
    )
}

export default TecStack