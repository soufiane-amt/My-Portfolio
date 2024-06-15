import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import  style from '../styles/GeneralScrollSpy.module.css';


export default function GeneralScrollSpy ()
{
    return (
        <nav className="navbar navbar-expand-sm bg_general_color navbar-dark fixed-top d-flex justify-content-around py-5">
            <div>
                <Image src={profilePic} alt="Logo" width={155} height={85}/>
            </div>
 
            <div>
                <ul className="navbar-nav  d-flex justify-content-between ">
                    <li className="nav-item h2 px-4 ">
                        <a className="nav-link text-white" href="#home">Home</a> {/* Apply Bootstrap utility class */}
                    </li>
                    <li className="nav-item h2 px-4 ">
                        <a className="nav-link text-white" href="#about">About</a>
                    </li>
                    <li className="nav-item h2 px-4 ">
                        <a className="nav-link text-white" href="#services">Services</a>
                    </li>
                    <li className="nav-item h2 px-4 ">
                        <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item h2 px-4 ">
                        <a className="nav-link text-white" href="#awards">Awards</a>
                    </li>
                </ul>
            </div>

            <div>
                <button className={`btn  ${style.custom_btn_style} `}>
                    Appointment
                </button>
            </div>
        </nav>
    )
}