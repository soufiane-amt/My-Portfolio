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
        name : "ft_transcendance",
        type : "Web",
        decription : "Online multiplayers Ping Pong game",
        imgSrc : "/ProjectElement/ft_transcendance.png"
    },
    {
        name : "Webserv",
        type : "Systems Programming",
        decription : "Nginix inspired web server project",
        imgSrc : "/ProjectElement/webserv.webp"
    },
    {
        name : "Inception",
        type : "Containerization",
        decription : "Containerization project",
        imgSrc : "/ProjectElement/inception.png"
    },
    {
        name : "Minishell",
        type : "Systems Programming",
        decription : "Reimplimentation of a shell interpreter",
        imgSrc : "/ProjectElement/minishell.png"
    },
    {
        name : "ft_containers",
        type : "Systems Programming",
        decription : "C++ Data structures low level programing ",
        imgSrc : "/ProjectElement/ft_containers.webp"
    },
    {
        name : "Cub3D",
        type : "Graphics",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/cubTd.webp"
    },
    {
        name : "Libft",
        type : "Systems Programming",
        decription : "Reimplementation of C functions in a custom library",
        imgSrc : "/ProjectElement/libft.png"
    },
    {
        name : "born2beroot",
        type : "Others",
        decription : "C++ Data structures low level programing ",
        imgSrc : "/ProjectElement/borntoberoot.png"
    },
    {
        name : "Netpractice",
        type : "Others",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/netpractice.png"
    },
    {
        name : "philosophers",
        type : "Systems Programming",
        decription : "Reimplementation of C functions in a custom library",
        imgSrc : "/ProjectElement/philosophers.webp"
    },
    {
        name : "pipex",
        type : "Systems Programming",
        decription : "C++ Data structures low level programing ",
        imgSrc : "/ProjectElement/pipex.webp"
    },
    {
        name : "get_next_line",
        type : "Systems Programming",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/get_next_line.webp"
    },
    {
        name : "so_long",
        type : "Graphics",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/so_long.webp"
    },
    {
        name : "push_swap",
        type : "Graphics",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/push_swap.webp"
    },
    {
        name : "ft_printf",
        type : "Others",
        decription : "Raycasting game project",
        imgSrc : "/ProjectElement/ft_printf.webp"
    },
]



interface ProjectCardType {
    name : string, 
    decription : string, 
    imgSrc : string, 
}
const ProjectCard: React.FC<{ project: ProjectCardType; index: number }> = ({ project, index }) =>
{
    const reference = useRef(null);

    const isInView = useInViewOnce(reference)
    return (
        <div ref={reference} style={{ animationDelay: `${index * 0.5}s` }} className={`${style.project_card} ${style.fade_in} col-lg-4 col-md-6  position-relative`}>
        { (isInView && 
            <div style={{ animationDelay: `${index * 0.1}s` }} className={`${style.fade_in} ${style.fade_in_up} `}>
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
            </div>
    )
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
