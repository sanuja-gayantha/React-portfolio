
const Experience = () => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }


  return (
    <section id='experience' className="experience-wrapper bg-[#6d4bf4] flex justify-center ">
      <div className="experience-container flex flex-col max-w-[1366px] px-2 py-[50px] lg:py-[100px] md:px-4  w-full text-[#ffffff]">

        <div className="title font-saintecolombe text-[65px] md:text-[148px] lg:text-[176px] text-center">Experience</div>
        <div className="experience-info flex flex-col lg:flex-row gap-16 mt-3">

          <div className="work basis-1/2">
            <span className="font-obviously  text-[26px] flex mb-3 underline">Work Experience</span>
            <div className="items flex flex-col gap-8">

              <div className="item flex flex-col text-[14px] font-obviously uppercase mt-4" >
                <span className="font-bold ">2021— CURRENT</span>
                <span className="font-bold ">FREELANCE WEB DEVELOPER and WEB SCRAPING EXPERT - (PART TIME)</span>
                <span className="font-bold ">At FIVERR</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside">
                  <li>Currently, I do web scraping and web application development. Read the technical overview of my recent project.</li>
                  <li onClick={() => openInNewTab("https://drive.google.com/file/d/1k8orzteKnTmJ9LeqdyVIiFDSn8pAn3VT/view?usp=sharing")}><span className="font-semibold underline cursor-pointer">Technical overview</span></li>
                  <li onClick={() => openInNewTab("https://github.com/sanuja-gayantha/Industry-reporter")}><span className="font-semibold underline cursor-pointer">Check the Python code on GitHub</span></li>
                </ul >
              </div>


              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">FEB 2022 — MAY 2023</span>
                <span className="font-bold ">Associate Software DEVELOPER - (CONTRACT, REMOTE)</span>
                <span className="font-bold ">ESPERANCE - FZE, Ajman, United Arab Emirates</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>Developed front-end functionalities for two websites <span className="font-semibold">(health care): </span>
                    <a className="underline cursor-pointer font-semibold" onClick={() => openInNewTab("https://epsychiatry.com.au/")}>epsychiatry.com.au, </a>
                    <a className="underline cursor-pointer font-semibold">epsychonline.com</a>
                  </li>
                  <li>Involved in SEO activities and optimizing websites.</li>
                  <li>Helped and trained newcomers to become familiar with the processes.</li>
                  <li>Participated in meetings.</li>
                  <li>Update websites / technical documents.</li>
                  <li onClick={() => openInNewTab("https://drive.google.com/file/d/1YVIkR3URx62tyKNhkcK8CsxLjo50AWKT/view?usp=sharing")}><span className="font-semibold underline cursor-pointer">Service letter</span></li>
                </ul >
              </div>


              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">Nov 2020 — Nov 2021</span>
                <span className="font-bold ">Web Developer (full-time, intern)</span>
                <span className="font-bold ">Softknowedge Business Solutions (Pvt) Ltd, Kurunegala, Sri Lanka</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>Developed cloud-based ERP systems for apparel manufacturing companies.</li>
                  <li>Visited and managed the
                    <a className="underline cursor-pointer font-semibold" onClick={() => openInNewTab("https://epsychiatry.com.au/")}> Chiefway Katunayake (Pvt) Ltd (Apparel) </a>
                    ERP project (GAPRO) database.
                  </li>

                  <li>Successfully implemented new functionalities and made modifications to the source code. Wrote SQL queries.</li>
                  <li>Participated in meetings and collected new requirements / system issues.</li>
                  <li>Communicated directly with clients (IT manager, merchandisers, accountants, application users, etc.) to to provide guidance and support.</li>
                  <li onClick={() => openInNewTab("https://drive.google.com/file/d/1tUwhjfbM8M5hsf7Bk1QmS9soCqTcKa7B/view?usp=sharing")}><span className="font-semibold underline cursor-pointer">GAPRO system process.</span> </li>
                  <li><span className="font-semibold underline">Personal Achievement:</span> At the request of the IT manager at Chiefway Katunayake (Pvt) Ltd, I developed a Python-based software tool to automate the conversion of the company's employees' salary, bonus, incentive, and OT Excel files into a special text format. This allows the quickly generated .txt files to be easily and promptly sent to the bank without any delays.</li>
                </ul >
              </div>

            </div>

          </div>
          <div className="education basis-1/2">
            <span className="font-obviously  text-[26px] flex mb-3 underline">Education Experience</span>
            <div className="items flex flex-col gap-8">

              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">2018 — 2023</span>
                <span className="font-bold ">Higher National Diploma in Information Technology
                  SLIATE - Kurunegala</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>Developed Business Controlling System for Mihikatha Distribution Pvt(Ltd) using VB.NET, MySQL, Crystal Reports, etc.</li>
                  {/* <li onClick={() => openInNewTab("https://drive.google.com/file/d/1tUwhjfbM8M5hsf7Bk1QmS9soCqTcKa7B/view?usp=sharing")}><span className="font-semibold underline cursor-pointer">GAPRO system process.</span> </li> */}

                </ul >
              </div>

              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">2017</span>
                <span className="font-bold ">DIPLOMA IN ENGLISH - BRITISH WAY ENGLISH ACADEMY</span>
              </div>

              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">2012 — 2016</span>
                <span className="font-bold ">G.C.E. ADVANCED LEVEL - Mathematics</span>
                <span className="font-bold ">SARANATH MAHA VIDYALAYA - KULIYAPITIYA</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>Combined Mathematics - C</li>
                  <li>Physics - C</li>
                  <li>Chemistry - S</li>
                </ul >
              </div>


              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">2007 — 2012</span>
                <span className="font-bold ">G.C.E. ORDINARY LEVEL</span>
                <span className="font-bold ">SARANATH MAHA VIDYALAYA - KULIYAPITIYA</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>05 As</li>
                  <li>03 Bs</li>
                  <li>01 Cs</li>
                </ul >
              </div>

              <div className="item flex flex-col text-[14px] font-obviously uppercase" >
                <span className="font-bold ">certificates</span>
                <ul className="details font-balto normal-case font-medium text-[16px] flex flex-col list-disc list-inside mt-4">
                  <li>React - The Complete Guide (incl. Next.js, Redux) - Udemy</li>
                  <li>React 18 Tutorial and Projects Course - Udemy</li>
                  <li>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) - Udemy</li>
                  <li>MongoDB - The Complete Developer's Guide - Udemy</li>
                  <li>HTML, JavaScript, Python, SQL certificates, Sololearn</li>
                  <li>Certificate in Special English Speech Training Course</li>
                </ul >
              </div>


            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience