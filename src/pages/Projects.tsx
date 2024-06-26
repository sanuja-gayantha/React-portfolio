
import ProjectItem from '../components/ProjectItem'
import projectItemsList from '../data/service_data'

const Projects = () => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section id='projects' className="projects-wrapper bg-[#ffeeee] flex justify-center ">
      <div className="projects-container flex flex-col max-w-[1366px] px-2 py-[50px] lg:py-[100px] md:px-4  w-full">
        <div className="title font-saintecolombe text-[65px] md:text-[148px] lg:text-[176px] text-[#ff6f6f] text-center">Projects</div>
        <div className="items flex flex-wrap gap-2 justify-center">
          {projectItemsList.map((projectItem) => (
            <ProjectItem projectItem={projectItem} key={projectItem.projectID} />
          ))}

        </div>
        <span onClick={() => openInNewTab("https://github.com/sanuja-gayantha")} className="uppercase font-obviously cursor-pointer text-[12px] justify-center flex mt-4">See more ...</span>
      </div>
    </section>
  )
}

export default Projects