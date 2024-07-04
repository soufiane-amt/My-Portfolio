"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import style from '../styles/GeneralScrollSpy.module.css';
import { RefObject, useEffect, useState } from 'react';

type ClickHandler = () => void;

function HumburgerButton({toggleNavbar}:{toggleNavbar :ClickHandler}) {
    return (
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
            onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}

function CloseButton({toggleNavbar}:{toggleNavbar :ClickHandler}) {
    return (
        <button type="button" className="btn-close text-reset btn-close-white" aria-label="Close" onClick={toggleNavbar}></button>
    );
}

interface GeneralScrollSpyProps {
    homeRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    resumeRef: RefObject<HTMLInputElement>;
  }
  const GeneralScrollSpy: React.FC<GeneralScrollSpyProps> = ({homeRef,aboutRef,resumeRef}) => {
    const [currentPage, setCurrentPage] = useState<string>("");
    const [expanded, setExpanded] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const handleButtonAnchorClick = (sectionRef: any) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    
    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 50)
                setScrolled(true)
            else 
                setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const toggleNavbar:ClickHandler = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const handleResize = () => {
            if (expanded) {
                setExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [expanded]);

    const handleButtonClick = (e:any)=>{
            const hrefValue = e.target.getAttribute('href').substring(1);
            setCurrentPage(hrefValue);
    }

    return (
        <nav className={`navbar navbar-expand-lg bg_general_color navbar-dark fixed-top py-4 ${scrolled ? `${style.white_shadow}`:''}`}>
            <div className={`container-fluid d-flex  justify-content-between mx-5`}>
                <div>
                    <Image src={profilePic} alt="Logo" />
                </div>
                {!expanded ? <HumburgerButton toggleNavbar={toggleNavbar}/>: <CloseButton toggleNavbar={toggleNavbar}/>}
                <div className={`collapse navbar-collapse position-relative  ${expanded ? `show ${style.top_vh_10}` : ''} `} id="navbarNav">
                    <ul className={`${style.fw_14_px} navbar-nav  d-flex justify-content-end w-100  ${expanded ? `bg-white  ${style.bd_radius_6_px} ps-3 py-2 ` : ''} `}>
                        <li className={`nav-item px-3    ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(homeRef)}} className={`nav-link ${currentPage == "home" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#home">Home</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(aboutRef)}} className={`nav-link ${currentPage == "about" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#about">About</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(resumeRef)}} className={`nav-link ${currentPage == "services" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#services">Resume</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "portfolio" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#portfolio">Portfolio</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "awards" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#awards">Awards</a>
                            </li> 
                        </ul>
                
                </div>
            </div>
        </nav>
    );
}


export default GeneralScrollSpy;