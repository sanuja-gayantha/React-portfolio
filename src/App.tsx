import Hero from "./pages/Hero";
import Life from "./pages/Life";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import TecStack from "./pages/TecStack";
import TechStackInfo from "./pages/TechStackInfo";


export default function App() {
  return (
    <div id="main" className="md:px-0">
      <Navbar />
      <Hero />
      <TecStack />
      {/* <TechStackInfo /> */}
      <Life />
      <Projects/>

    </div>
  )
}



// border-2 border-black