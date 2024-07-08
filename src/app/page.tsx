'use client'
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import GeneralScrollSpy from "./components/GeneralScrollSpy";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useRef, useState } from "react";
import FooterPage from "./components/FooterPage";


export default function MainPage() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntoViewAppearance = (pageHref:string)=>{
    setCurrentPage(pageHref)
}


  return (
      <div >
        <header>
            <GeneralScrollSpy currentpageState={{currentPage, setCurrentPage}} homeRef={homeRef}
                aboutRef={aboutRef}
                resumeRef={resumeRef}
                portfolioRef={portfolioRef} 
                contactRef={contactRef} />
        </header>
        <main className="container-fluid p-0 bg-white">
          <Home  setCurrentPage={setCurrentPage} reference={homeRef}/>
          <About setCurrentPage={setCurrentPage} reference={aboutRef}/>
          <Resume setCurrentPage={setCurrentPage} reference={resumeRef}/>
          {/* <Portfolio setCurrentPage={setCurrentPage} reference={portfolioRef}/> */}
          <Contact setCurrentPage={setCurrentPage} reference={contactRef}/>
        </main>
        <FooterPage/>
      </div>
  );
}
