
const TechStackInfo = () => {
    
    const TechStack_frontend = ["React", "Angular", "HTML5", "CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Sass"];
    const TechStack_backend = ["Node.js", "Python", "SQL", "MongoDB", "REST API"];
    const Tools = ["Vite", "Git", "GitHub", "Windows", "Linux"];
    
    return (
        <div className="techstackinfo-wrapper bg-[#f4f2ed] flex justify-center ">
            <div className="techstackinfo-container flex flex-col max-w-[1366px] px-2 py-[50px] md:px-4  w-full gap-4">

                <div className="frontend-stack flex flex-col gap-3">
                    <span className="uppercase font-obviously text-[11px]">frontend </span>
                    <div className="stack flex flex-row flex-wrap gap-1">
                        {TechStack_frontend.map((tech) => (
                            <span className="bg-slate-800 rounded p-1 font-obviously text-[10px] text-white ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="backend-stack flex flex-col gap-3">
                    <span className="uppercase font-obviously text-[11px]">backend </span>
                    <div className="stack flex flex-row gap-1 flex-wrap">
                        {TechStack_backend.map((tech) => (
                            <span className="bg-slate-800 rounded p-1 font-obviously text-[10px] text-white ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="tools flex flex-col gap-3">
                    <span className="uppercase font-obviously text-[11px]">development tools</span>
                    <div className="stack flex flex-row gap-1 flex-wrap">
                        {Tools.map((tech) => (
                            <span className="bg-slate-800 rounded p-1 font-obviously text-[10px] text-white ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TechStackInfo