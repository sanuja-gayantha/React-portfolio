import Hero from "./pages/Hero";
import Life from "./pages/Life";
import Navbar from "./pages/Navbar";


export default function App() {
  return (
    <div id="main" className="px-2 lg:px-0">
      <Navbar />
      <Hero/>
      {/* <Life/> */}
    </div>
  )
}



// border-2 border-black