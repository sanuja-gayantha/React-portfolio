import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Life from "./pages/Life";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import TecStack from "./pages/TecStack";
import { AlertProvider } from "./contaxt/AlertContaxt";
import { NavProvider } from "./contaxt/NavContaxt";
import NavContent from "./pages/NavContent";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const Layout = () => {
  return (
    <>
      <NavProvider>
        <AlertProvider>
          <NavContent />
          <Navbar />
          <Hero />
          <TecStack />
          <Life />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </AlertProvider>
      </NavProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div id="main" className="md:px-0">
      <RouterProvider router={router} />
    </div>
  )
}
