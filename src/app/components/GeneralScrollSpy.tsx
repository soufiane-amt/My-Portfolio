"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import style from '../styles/GeneralScrollSpy.module.css';
import { useState } from 'react';

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
    const [expanded, setExpanded] = useState(false);
    const toggleNavbar:ClickHandler = () => {
        setExpanded(!expanded);
    };
    
    return (
        <nav className="navbar navbar-expand-md bg_general_color navbar-dark fixed-top py-5">
            <div className={`container-fluid d-flex  align-items-center mx-5 ${style.containerFluid}`}>
                <div>
                    <Image src={profilePic} alt="Logo" />
                </div>
                {!expanded ? <HumburgerButton toggleNavbar={toggleNavbar}/>: <CloseButton toggleNavbar={toggleNavbar}/>}
                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''} `} id="navbarNav">
                    <ul className={`navbar-nav  d-flex justify-content-center w-100 ${expanded ? `bg-white  ${style.bd_radius_top} ` : ''} `}>
                        <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                            <a className={`nav-link ${expanded ? 'text-dark' : 'text-white'}`} href="#home">Home</a>
                        </li>
                        <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                            <a className={`nav-link ${expanded ? 'text-dark' : 'text-white'}`} href="#about">About</a>
                        </li>
                        <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                            <a className={`nav-link ${expanded ? 'text-dark' : 'text-white'}`} href="#services">Services</a>
                        </li>
                        <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                            <a className={`nav-link ${expanded ? 'text-dark' : 'text-white'}`} href="#portfolio">Portfolio</a>
                        </li>
                        <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                            <a className={`nav-link ${expanded ? 'text-dark' : 'text-white'}`} href="#awards">Awards</a>
                        </li>
                        {expanded && (
                            <li className={`nav-item px-1 fw-bold ${style.fw_17}`}>
                                <button className={`nav-link text-dark`}>
                                    Appointment
                                </button>
                            </li>
                            )}
                    </ul>
                    {!expanded && (<div className={`${expanded ? `bg-white ${style.bd_radius_bottom} py-1` : ''}`}>
                        <button className={` ${style.custom_btn_style} ${expanded ? 'bg-white ' : ''}`}>
                            Appointment
                        </button>
                    </div>
                    )}
                
                </div>
            </div>
        </nav>
    );
}
