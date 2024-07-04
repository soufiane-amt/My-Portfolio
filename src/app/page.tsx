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
import { useRef } from "react";


export default function MainPage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div >
      <header>
          <GeneralScrollSpy homeRef={homeRef} aboutRef={homeRef} resumeRef={homeRef} />
      </header>
      <main className="container-fluid p-0 bg-white">
        <Home  reference={homeRef}/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>
    </div>
  );
}
