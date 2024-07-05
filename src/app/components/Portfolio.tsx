'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Portfolio.module.css';
import Image from 'next/image';
import MainBackImg from '@public/myPic.jpg';
import { LegacyRef, RefObject, useEffect, useState } from 'react';
import { Love_Light } from 'next/font/google';
import useInView from '../CostumHooks/UseInView';

const projectList = [
    {
        name : "ft_transcendance",
        type : "Web",
        decription : "Online multiplayers Ping Pong game",
        imgSrc : "/ProjectElement/app-1.jpg"
    },
    {
        name : "Webserv",
        type : "Systems Programming",
        decription : "Nginix inspired web server project",
        imgSrc : "/ProjectElement/product-1.jpg"
    },
    {
        name : "Inception",
        type : "Containerization",
        decription : "Containerization project",
        imgSrc : "/ProjectElement/branding-1.jpg"
    },
    {
        name : "Minishell",
        type : "Systems Programming",
        decription : "Reimplimentation of a shell interpreter",
        imgSrc : "/ProjectElement/books-1.jpg"
    },
    {
        name : "ft_containers",
        type : "Systems Programming",
        decription : "C++ Data structures low level programing ",
        imgSrc : "/ProjectElement/app-2.jpg"
    },
    {
        name : "Cub3D",
        type : "Graphics",
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
        <div className={`${style.project_card} col-lg-4 col-md-6  position-relative`}>
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
    const [currentList, setCurrentList] = useState<string>("All")

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
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "All" ? "text-primary" : ""}`} href="#All">All</a>
                        </li>
                        <li className="nav-item active">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "Web" ? "text-primary" : ""}`} href="#Web">Web</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "Systems Programming" ? "text-primary" : ""}`} href="#Systems Programming">Systems Programming</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList == "Algorithms" ? "text-primary" : ""}`} href="#Algorithms">Algorithms</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList  == "Graphics" ? "text-primary" : ""}`} href="#Graphics">Graphics</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${currentList  =="Others" ? "text-primary" : ""}`} href="#Others">Others</a>
                        </li>
                    </ul>
                </div>
            </nav>
                <div className={`row d-flex justify-content-center`} >
                    {
                        projectList.map ((item)=>
                        {
                            if (currentList === "All")
                                return <ProjectCard key={item.name} project={item}/>;
                            else if (item.type === currentList)
                                return <ProjectCard key={item.name} project={item}/>;
                            
                        })
                            
                    }
                </div>
        </div>
    )
}

interface portfolioProps {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
    reference : RefObject<HTMLDivElement> | undefined;
}
const Portfolio: React.FC<portfolioProps> = ({ setCurrentPage,reference }) => {
    const  isInView  = useInView(reference);

    useEffect (()=>{
        if (isInView)
            setCurrentPage("portfolio")
    }, [isInView])

    return (
        <div ref={reference} className={`container `}>
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
