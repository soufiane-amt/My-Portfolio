import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';


export default function GeneralScrollSpy ()
{
    return (
        <nav className="navbar navbar-expand-sm bg_general_color navbar-dark fixed-top">
            <div>
                <Image src={profilePic} alt="Logo"/>
            </div>
 
            <div>
                <ul className="navbar-nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#awards">Awards</a></li>
                </ul>
            </div>

            <div>
                <button className="btn border custom_btn_border_color">
                    Appointment
                </button>
            </div>
        </nav>
    )
}