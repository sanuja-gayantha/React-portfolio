import React from 'react'

const ProjectItem = ({projectItem}) => {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return ( 
        <div className="project-item h-[532px] w-[400px] flex flex-col p-3 gap-4" style={{backgroundColor: projectItem.bgColor, color: projectItem.textColor}}>
            <div onClick={() => openInNewTab(projectItem.demoUrl)} className="image basis-2/3 image lg:w-auto lg:h-80 h-60 w-auto overflow-hidden">
                <img src={projectItem.imageUrl} alt="" srcSet="" className="w-full h-auto object-contain cursor-pointer" />
            </div>
            <div className="info basis-1/4 flex flex-col gap-4 text-[26px]">
                <div className="title font-obviously">{projectItem.projectName}</div>

                <div className="links flex flex-row gap-6">
                    <span onClick={() => openInNewTab(projectItem.demoUrl)} className="bg-slate-800 rounded p-1 font-obviously text-[10px] text-white uppercase px-2 cursor-pointer">Live demo</span>
                    <span onClick={() => openInNewTab(projectItem.githubUrl)} className="flex flex-row items-center gap-1 cursor-pointer">
                        <img src="/img/github.svg" alt="" srcSet="" className="w-4 h-4" />
                        <span className="font-obviously text-[10px]">GitHub</span>
                    </span>

                </div>
                <div className="description font-balto text-[16px]  font-medium">
                    {projectItem.desc2}
                </div>
            </div>

        </div>
    )
}

export default ProjectItem