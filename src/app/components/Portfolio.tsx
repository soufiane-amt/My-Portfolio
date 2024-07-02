'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Portfolio.module.css';
import Image from 'next/image';
import MainBackImg from '@public/myPic.jpg';

const projectList = [
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
        imgSrc : "/ProjectElement/app-1.jpg"
    },
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
        imgSrc : "/ProjectElement/product-1.jpg"
    },
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
        imgSrc : "/ProjectElement/branding-1.jpg"
    },
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
        imgSrc : "/ProjectElement/books-1.jpg"
    },
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
        imgSrc : "/ProjectElement/app-2.jpg"
    },
    {
        name : "App 1",
        decription : "Lorem ipsum, dolor sit amet consectetur",
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
        <div className={`${style.project_card} col-md-4`}>
            <div>
                <img 
                    src={`${project.imgSrc}`} 
                    alt="Project Image" 
                    className='img-fluid'
                    />
            </div>
            {/* <div>
                <h4>{`${project.name}`} </h4>
                <p>{`${project.decription}`} </p>
            </div> */}
        </div>
    )
}

function ProjectsNavBarList ()
{
    return (
        <div className='d-flex flex-column justify-content-center mt-3'>
            <nav className="navbar navbar-expand-lg fw-bold  d-flex justify-content-center">
                <div className=''>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">ALL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">APP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PRODUCT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">BRANDING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">BOOKS</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className=' row'>
                {
                    projectList.map ((item)=>
                        
                        <ProjectCard project={item}/>
                    )
                }
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
                    Academic and personel project I worked on 
                </p>
            </div>
            <ProjectsNavBarList/>
        </div>
    )
}

export default Portfolio;
