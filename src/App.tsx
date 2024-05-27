import MyStack from "./pages/MyStack";
import Hero from "./pages/Hero";
import Life from "./pages/Life";
import Navbar from "./pages/Navbar";
import TecStack from "./pages/TecStack";


export default function App() {
  return (
    <div id="main" className="md:px-0">
      <Navbar />
      {/* <Hero/> */}
      <TecStack/>
      {/* <Life/> */}

    </div>
  )
}



// border-2 border-black