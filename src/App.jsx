import { useEffect } from "react";
import { lazy, Suspense } from "react";


import Navbar from "./components/Navbar";
import ThreeScene from "./components/ThreeScene";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

//lazy loading components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Stats = lazy(() => import("./components/Stats"));
const Projectslider = lazy(() => import("./components/Projectslider"));
const Footer = lazy(() => import("./components/Footer"));



export default function App() {
 

  return (
    <>
      <div className="three-bg">
        <ThreeScene />
      </div>

      
      
      <Navbar />
      <Hero />

      <Suspense fallback={<Loader />}>
        <About />
        <Stats />
        <Skills />
        <Projectslider />
        <Footer />
      </Suspense>
    </>
  );
}