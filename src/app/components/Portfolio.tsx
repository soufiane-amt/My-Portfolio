'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Portfolio.module.css';
import Image from 'next/image';
import MainBackImg from '@public/myPic.jpg';
import { useState } from 'react';

const projectList = [
    {
        name : "ft_transcendance",
        decription : "Online multiplayers Ping Pong game",
        imgSrc : "/ProjectElement/app-1.jpg"
    },
    {
        name : "Webserv",
        decription : "Nginix inspired web server project",
        imgSrc : "/ProjectElement/product-1.jpg"
    },
    {
        name : "Inception",
        decription : "Containerization project",
        imgSrc : "/ProjectElement/branding-1.jpg"
    },
    {
        name : "Minishell",
        decription : "Reimplimentation of a shell interpreter",
        imgSrc : "/ProjectElement/books-1.jpg"
    },
    {
        name : "ft_containers",
        decription : "C++ Data structures low level programing ",
        imgSrc : "/ProjectElement/app-2.jpg"
    },
    {
        name : "Cub3D",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/product-2.jpg"
    },
]



interface ProjectCardType {
    name : string, 
    decription : string, 
    imgSrc : string, 
}
const ProjectCard: React.FC<{ project: ProjectCardType }> = ({ project }) => {
    return (
        <div className={`${style.project_card} col-lg-4 col-md-6 position-relative`}>
            <div>
                <img 
                    src={`${project.imgSrc}`} 
                    alt="Project Image" 
                    className='img-fluid'
                    />
            </div>
            <div className={` position-absolute ${style.card_description} d-flex flex-column `}>
                <h4 className='f_famil_raleway fw_18_px fw-bold'>{`${project.name}`} </h4>
                <p className='f_style_italic f_famil_roboto fw_14_px'>{`${project.decription}`} </p>
            </div>
        </div>
    )
}

function ProjectsNavBarList ()
{
    const [currentList, setCurrentList] = useState<string>("all")

    const handleButtonClick = (e:any)=>{
        const hrefValue = e.target.getAttribute('href').substring(1);
        setCurrentList(hrefValue);
}

    return (
        <div className={`d-flex flex-column justify-content-center mt-3 `}>
            <nav className="navbar navbar-expand fw-bold  d-flex justify-content-center">
                <div className=''>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "all" ? "text-primary" : ""}`} href="#all">ALL</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "app" ? "text-primary" : ""}`} href="#app">APP</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "product" ? "text-primary" : ""}`} href="#product">PRODUCT</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList  == "branding" ? "text-primary" : ""}`} href="#branding">BRANDING</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList  =="books" ? "text-primary" : ""}`} href="#books">BOOKS</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={` ${style.project_card_list}`}>
                <div className={`row d-flex justify-content-center`} >
                    {
                        projectList.map ((item)=>
                            
                            <ProjectCard key={item.name} project={item}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


function Portfolio ()
{
    return (
        <div className={`container m-auto `}>
            <div className={`d-flex justify-content-center mb-3`}>
                <h2 className={`f_famil_raleway text-center section_title`}>Portfolio</h2>
            </div>
            <div className={`d-flex justify-content-center `}>
                <p>
                    Academic and personel projects 
                </p>
            </div>
            <ProjectsNavBarList/>
        </div>
    )
}

export default Portfolio;
