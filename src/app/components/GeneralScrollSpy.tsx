"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import style from '../styles/GeneralScrollSpy.module.css';
import { useEffect, useState } from 'react';

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

export default function GeneralScrollSpy() {
    const [currentPage, setCurrentPage] = useState<string>("");
    const [expanded, setExpanded] = useState<boolean>(false);
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
            console.log (hrefValue)
            setCurrentPage(hrefValue);
    }

    return (
        <nav className={`navbar navbar-expand-lg bg_general_color navbar-dark fixed-top py-4`}>
            <div className={`container-fluid d-flex  align-items-center mx-5 ${style.containerFluid}`}>
                <div>
                    <Image src={profilePic} alt="Logo" />
                </div>
                {!expanded ? <HumburgerButton toggleNavbar={toggleNavbar}/>: <CloseButton toggleNavbar={toggleNavbar}/>}
                <div className={`collapse navbar-collapse position-relative  ${expanded ? `show ${style.top_vh_10}` : ''} `} id="navbarNav">
                    <ul className={` navbar-nav  d-flex justify-content-center w-100  ${expanded ? `bg-white  ${style.bd_radius_6_px} ps-3 py-2 ` : ''} `}>
                        <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "home" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#home">Home</a>
                            </li>
                            <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "about" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#about">About</a>
                            </li>
                            <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "services" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#services">Services</a>
                            </li>
                            <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "portfolio" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#portfolio">Portfolio</a>
                            </li>
                            <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <a onClick={handleButtonClick} className={`nav-link ${currentPage == "awards" ? `${style.border_button_bottom}` : "" } ${expanded ? `text-dark ` : `text-white ${style.hover_button_animation}`}`} href="#awards">Awards</a>
                            </li> 
                            {expanded && (
                            <li className={`nav-item px-3 fw-bold ${style.fw_17}`}>
                                <button className={`nav-link text-dark`}>
                                    Appointment
                                </button>
                            </li>
                            )}
                        </ul>
                        {!expanded && (<div>
                            <button className={` ${style.custom_btn_style}`}>
                                Appointment
                            </button>
                        </div>
                        )} 
                
                </div>
            </div>
        </nav>
    );
}
