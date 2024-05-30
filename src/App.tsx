import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Life from "./pages/Life";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import TecStack from "./pages/TecStack";


export default function App() {
  return (
    <div id="main" className="md:px-0">
      <Navbar />
      <Hero />
      <TecStack />
      <Life />
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}



// border-2 border-black