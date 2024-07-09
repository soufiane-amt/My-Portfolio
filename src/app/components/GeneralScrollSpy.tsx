"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo2.jpeg';
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
        <button type="button" className={`btn-close text-reset btn-close-white ${style.close_button}`} aria-label="Close" onClick={toggleNavbar}></button>
    );
}

interface currentPageState {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  }
    
interface GeneralScrollSpyProps {
    currentpageState: currentPageState;
    homeRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    resumeRef: RefObject<HTMLInputElement>;
    portfolioRef: RefObject<HTMLInputElement>;
    contactRef: RefObject<HTMLInputElement>;
  }
  
  const GeneralScrollSpy: React.FC<GeneralScrollSpyProps> = ({currentpageState, homeRef,aboutRef,resumeRef, portfolioRef ,contactRef}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const {currentPage, setCurrentPage} = currentpageState;


    const handleButtonAnchorClick = (sectionRef: React.RefObject<HTMLElement>) => {
        const mainMarginSize = 90;
        if (sectionRef.current) {
          const elementPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - mainMarginSize;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
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
        <nav className={`${style.nav_bar} navbar navbar-expand-lg bg_general_color navbar-dark fixed-top py-3 ${scrolled ? `${style.white_shadow}`:''}`}>
            <div className={`container-fluid d-flex  justify-content-between mx-5 ${style.main_nav_content}`}>
                <div>
                    <Image className={`${style.logo_img}`} src={profilePic} alt="Logo" />
                </div>
                {!expanded ? <HumburgerButton toggleNavbar={toggleNavbar}/>: <CloseButton toggleNavbar={toggleNavbar}/>}
                <div className={`collapse navbar-collapse   ${expanded ? `show ${style.top_vh_10}  ${style.test}` : 'position-relative'} `} id="navbarNav">
                    <ul className={`${style.fw_14_px} navbar-nav w-100 d-flex justify-content-end   ${expanded ? `bg-white  ${style.bd_radius_6_px} ps-3 py-2 ` : ''} `}>
                        <li className={`nav-item px-3    ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(homeRef)}} className={`nav-link ${currentPage == "home" ? `${style.selected_nav_element}` : "" } ${expanded ? ` ` : `text-white ${style.hover_button_animation}`}`} href="#home">Home</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(aboutRef)}} className={`nav-link ${currentPage == "about" ? `${style.selected_nav_element}` : "" } ${expanded ? ` ` : `text-white ${style.hover_button_animation}`}`} href="#about">About</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(resumeRef)}} className={`nav-link ${currentPage == "resume" ? `${style.selected_nav_element}` : "" } ${expanded ? ` ` : `text-white ${style.hover_button_animation}`}`} href="#resume">Resume</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(portfolioRef)}} className={`nav-link ${currentPage == "portfolio" ? `${style.selected_nav_element}` : "" } ${expanded ? ` ` : `text-white ${style.hover_button_animation}`}`} href="#portfolio">Portfolio</a>
                            </li>
                            <li className={`nav-item px-3  ${style.f_famil_poppins}`}>
                                <a onClick={(e) => {handleButtonClick(e); handleButtonAnchorClick(contactRef)}} className={`nav-link ${currentPage == "contacts" ? `${style.selected_nav_element}` : "" } ${expanded ? ` ` : `text-white ${style.hover_button_animation}`}`} href="#contacts">Contacts</a>
                            </li> 
                        </ul>
                
                </div>
            </div>
        </nav>
    );
}


export default GeneralScrollSpy;