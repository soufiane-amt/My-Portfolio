"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import style from '../styles/GeneralScrollSpy.module.css';
import { useState } from 'react';

function HumburgerButton() {
    return (
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}

export default function GeneralScrollSpy() {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="navbar navbar-expand-xxl bg_general_color navbar-dark fixed-top py-5">
            <div className={`container-fluid d-flex  align-items-center mx-5 ${style.containerFluid}`}>
                <div>
                    <Image src={profilePic} alt="Logo" width={100} height={55} />
                </div>
                <HumburgerButton />
                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav  d-flex justify-content-center w-100">
                        <li className="nav-item h5 px-5 fw-bold">
                            <a className="nav-link text-white" href="#home">Home</a>
                        </li>
                        <li className="nav-item h5 px-5 fw-bold">
                            <a className="nav-link text-white" href="#about">About</a>
                        </li>
                        <li className="nav-item h5 px-5 fw-bold">
                            <a className="nav-link text-white" href="#services">Services</a>
                        </li>
                        <li className="nav-item h5 px-5 fw-bold">
                            <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item h5 px-5 fw-bold">
                            <a className="nav-link text-white" href="#awards">Awards</a>
                        </li>
                    </ul>
                <div>
                    <button className={`btn ${style.custom_btn_style}`}>
                        Appointment
                    </button>
                </div>
                </div>
            </div>
        </nav>
    );
}
