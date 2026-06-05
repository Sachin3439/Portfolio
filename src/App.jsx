import { useEffect } from "react";
import Navbar from "./components/Navbar";
import ThreeScene from "./components/ThreeScene";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Projectslider from "./components/Projectslider";

export default function App() {
 

  return (
    <>
      <div className="three-bg">
        <ThreeScene />
      </div>

      
      
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projectslider />
      <Footer />
    </>
  );
}