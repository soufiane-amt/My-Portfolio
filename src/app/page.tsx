"use client";
import "./globals.css";
import GeneralScrollSpy from "./components/GeneralScrollSpy";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState } from "react";
import FooterPage from "./components/FooterPage";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <GeneralScrollSpy
        currentpageState={{ currentPage, setCurrentPage }}
      />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contacts">
          <Contact />
        </section>
      </main>

      <FooterPage />
    </>
  );
}
