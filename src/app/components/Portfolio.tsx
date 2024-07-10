'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Portfolio.module.css';
import Image from 'next/image';
import MainBackImg from '@public/myPic.jpg';
import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import { Love_Light } from 'next/font/google';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';
import FadeTop from './FadeTop';
import useInViewOnce from '../CostumHooks/UseInViewOnce';

const projectList = [
    {
        name : "Ft_transcendance",
        type : "Web",
        decription : "Online multiplayers Ping Pong game",
        imgSrc : "/ProjectElement/ft_transcendance.png",
        url : "https://github.com/soufiane-amt/ft_transcendance"
    },
    {
        name : "Webserv",
        type : "Systems Programming",
        decription : "Nginix inspired web server project",
        imgSrc : "/ProjectElement/webserv.webp",
        url : "https://github.com/soufiane-amt/webserv"
    },
    {
        name : "Inception",
        type : "Systems Programming",
        decription : "Docker project",
        imgSrc : "/ProjectElement/inception.png",
        url : "https://github.com/soufiane-amt/inception"
    },
    {
        name : "Minishell",
        type : "Systems Programming",
        decription : "Reimplimentation of a shell interpreter",
        imgSrc : "/ProjectElement/minishell.png",
        url : "https://github.com/soufiane-amt/minishell"
    },
    {
        name : "ft_containers",
        type : "Systems Programming",
        decription : "C++ Data structures implementing ",
        imgSrc : "/ProjectElement/ft_containers.webp",
        url : "https://github.com/soufiane-amt/ft_containers"
    },
    {
        name : "Cub3D",
        type : "Graphics",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/cubTd.webp",
        url : "https://github.com/soufiane-amt/cub3d"
    },
    {
        name : "Libft",
        type : "Others",
        decription : "Creation of C custom library",
        imgSrc : "/ProjectElement/libft.png",
        url : "https://github.com/soufiane-amt/Libft"
    },
    {
        name : "Born2beroot",
        type : "Systems Programming",
        decription : "Virtualization project ",
        imgSrc : "/ProjectElement/borntoberoot.png",
        url : "https://github.com/soufiane-amt/"
    },
    {
        name : "Netpractice",
        type : "Others",
        decription : "Networking project",
        imgSrc : "/ProjectElement/netpractice.png",
        url : "https://github.com/soufiane-amt/NetPractice"
    },
    {
        name : "Philosophers",
        type : "Others",
        decription : "Introduction to processes and threads",
        imgSrc : "/ProjectElement/philosophers.webp",
        url : "https://github.com/soufiane-amt/Philosopher"
    },
    {
        name : "Pipex",
        type : "Others",
        decription : "Reimplemetation of linux CMD pipe",
        imgSrc : "/ProjectElement/pipex.webp",
        url : "https://github.com/soufiane-amt/pipex"
    },
    {
        name : "Get_next_line",
        type : "Others",
        decription : "Remplementation of get_line",
        imgSrc : "/ProjectElement/get_next_line.webp",
        url : "https://github.com/soufiane-amt/get_next_line"
    },
    {
        name : "So_long",
        type : "Graphics",
        decription : "2D game project",
        imgSrc : "/ProjectElement/so_long.webp",
        url : "https://github.com/soufiane-amt/so_long"
    },
    {
        name : "Push_swap",
        type : "Others",
        decription : "Sort data with a limited set of instructions",
        imgSrc : "/ProjectElement/push_swap.webp",
        url : "https://github.com/soufiane-amt/push_swap"
    },
    {
        name : "Ft_printf",
        type : "Others",
        decription : "Reimplementation of printf function",
        imgSrc : "/ProjectElement/ft_printf.webp",
        url : "https://github.com/soufiane-amt/ft_printf"
    },
]



interface ProjectCardType {
    name : string, 
    decription : string, 
    imgSrc : string, 
    url : string, 
}
const ProjectCard: React.FC<{ project: ProjectCardType; index: number }> = ({ project, index }) => {
    const reference = useRef(null);
    const isInView = useInViewOnce(reference);

    return (
        <div ref={reference} style={{ animationDelay: `${index * 0.01}s` }} className={`${style.project_card} ${style.fade_in} col-lg-4 col-md-6 position-relative`}>
            {isInView && (
                <a href={project.url} style={{ animationDelay: `${index * 0.1}s` }} className={`${style.fade_in} ${style.fade_in_up} ${style.project_link}`}>
                    <div>
                        <img 
                            src={project.imgSrc} 
                            alt="Project Image" 
                            className='img-fluid'
                        />
                    </div>
                    <div className={`position-absolute ${style.card_description} d-flex flex-column`}>
                        <h4 className='f_famil_raleway fw_18_px fw-bold'>{project.name}</h4>
                        <p className='f_style_italic f_famil_roboto fw_14_px'>{project.decription}</p>
                    </div>
                </a>
            )}
        </div>
    );
}




function ProjectsNavBarList ()
{
    const [currentList, setCurrentList] = useState<string>("All")

    useEffect (()=>{
        const timer = setTimeout (()=>{
            
        }, 500)
        // return clearTimeout
    }, [])
    const handleButtonClick = (e:any)=>{
        const anchor = (e.target as HTMLElement).closest('a');
        if (anchor) {
        const hrefValue = anchor.getAttribute('href');
        if (hrefValue) {
            setCurrentList(hrefValue.substring(1));
        }
        }
    }

    return (
        <div className={`d-flex flex-column justify-content-center mt-3 `}>
            <nav className="navbar navbar-expand fw-bold  d-flex justify-content-center">
                <div className=''>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a onClick={handleButtonClick} className={`nav-link ${style.list_item} ${currentList == "All" ? "text-primary" : ""}`} href="#All">All</a>
                        </li>
                        <li className="nav-item active">
                            <a onClick={handleButtonClick} className={`nav-link ${style.list_item} ${currentList == "Web" ? "text-primary" : ""}`} href="#Web">Web</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${style.a_} ${style.list_item} ${currentList == "Systems Programming" ? "text-primary" : ""}`} href="#Systems Programming">
                                    <span className={`${style.a_first_word}`}>Systems</span>
                                    <span className={`${style.a_last_word}`}>Programming</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${style.list_item} ${currentList  == "Graphics" ? "text-primary" : ""}`} href="#Graphics">Graphics</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={handleButtonClick} className={`nav-link ${style.list_item} ${currentList  =="Others" ? "text-primary" : ""}`} href="#Others">Others</a>
                        </li>
                    </ul>
                </div>
            </nav>
                <div className={`row d-flex justify-content-center`} >
                    {
                        projectList.map ((item, index)=>
                        {
                            
                            if (currentList === "All")
                                return <ProjectCard key={item.name} index={index} project={item}/>;
                            else if (item.type === currentList)
                                return <ProjectCard key={item.name} index={index} project={item}/>;
                            
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
        <SectionTitle sectionName='Portfolio' reference={reference}>
                <FadeTop reference={reference}>
                    <div className={`d-flex justify-content-center `}>
                        <p>
                            Academic and personel projects 
                        </p>
                    </div>
                    <ProjectsNavBarList/>
                </FadeTop>
        </SectionTitle>
    )
}

export default Portfolio;
