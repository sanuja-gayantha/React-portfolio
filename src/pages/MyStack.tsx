import React from 'react'

const MyStack = () => {
  return (
    <div className="mystack-wrapper bg-[#f4f2ed] h-[60px] hidden flex justify-center border-2 border-black">
      <div className="mystack-container flex flex-col lg:flex-row max-w-[1366px] border-2 border-black w-full px-2 md:px-4 overflow-hidden">

        {/* <div className="title font-saintecolombe font-black text-[32px]">Tech Stack</div> */}
        <div className="logos">
          <div className="logos-slide flex flex-row gap-10">

            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png" alt="external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo"/>
            <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="node-js"/>
            <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="python--v1"/>
            <img src="https://img.icons8.com/color/48/000000/tailwind_css.png" alt="tailwind_css"/>
            <img src="https://img.icons8.com/fluency/48/000000/vite.png" alt="vite"/>
            <img src="https://img.icons8.com/color/48/000000/sql.png" alt="sql"/>
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo"/>
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html-5--v1"/>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3"/>
            <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript"/>
            <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
            <img src="https://img.icons8.com/color/48/000000/sass.png" alt="sass"/>
            <img src="https://img.icons8.com/material-outlined/48/000000//api-settings.png" alt="api-settings"/>
            <img src="https://img.icons8.com/color/48/000000/java-web-token.png" alt="java-web-token"/>
            
          </div>

        </div>


      </div>
    </div>
  )
}

export default MyStack