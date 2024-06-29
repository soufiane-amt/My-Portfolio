'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Resume.module.css'
import React from 'react';



const educationInfoArr = [
    {
        diplomaName :"MASTER OF FINE ARTS & GRAPHIC DESIGN",
        duration: "2015 - 2016" ,
        location : "Rochester Institute of Technology, Rochester, NY" ,
        description : "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
        diplomaName :"BACHELOR OF FINE ARTS & GRAPHIC DESIGN",
        duration: "2010 - 2014" ,
        location : "Rochester Institute of Technology, Rochester, NY" ,
        description : "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },
]

const academicProjects = [
    {
        projectName :"Ft_transcendance",
        description : "Web application featuring a real-time multiplayer PingPong game, robusting chat system."    
    },
    {
        projectName :"Webserv",
        description : "Collaborative project focused on creating a custom HTTP server with efficient handling of\
        requests and responses, featuring HTTP methods, static website serving, file upload\
        support, server configuration file implementation, and CGI functionality.\
        "    
    },
    {
        projectName :"Inception",
        description : "Solo Docker-based system administration project, establishing a secure virtualized\
        infrastructure with NGINX, WordPress, and MariaDB containers, emphasizing stringent\
        security measures, environment variable usage, local Docker image building, network security\
        configuration."    
    },
    {
        projectName :"Minishell",
        description : "Collaborative project shell interpreter inspired by Bash, emphasizing command execution."    
    },
    {
        projectName :"ft_containers",
        description : "Solo project, aims to reimplement several Standard Template Library (STL) containers as\
        defined by the c++98, includes:\
        vector, stack, map, set."    
    },
]

interface academicProjectsType {
    projectName :string,
    description : string
}

interface EductionUnitsType {
    diplomaName :string,
    duration: string, 
    location : string, 
    description : string
}





const EductionUnits: React.FC<{educationInfo: EductionUnitsType }> = ({educationInfo}) => 
{
    return (
            <div className='f_famil_raleway '>
                <div className={`${style.circle}`}></div>
                <div className={`${style.resume_section} ms-3`}>
                    <h4 className={`fw_18_px ${style.sub_title_styling}`}>{educationInfo.diplomaName}</h4>
                    <p className='ps-3 fw-bold'>{educationInfo.duration}</p>
                    <p className={`fw_16_px f_famil_roboto f_style_italic `}>{educationInfo.location}</p>
                    <p className={`fw_16_px f_famil_roboto  `}>{educationInfo.description}</p>
                </div>
            </div>
    )
}

function ResumeEducation ()
{
    return (
        <div className='f_famil_raleway '>
            <h3 className='fw_26_px fw-bold'>Education</h3>
            {educationInfoArr.map(item => (
                <EductionUnits key={item.diplomaName} educationInfo={item}/>
            ))}
        </div>
    )
}

function AcademicResume ()
{
    return (
        <div className='f_famil_raleway mb-4'>
            <h3 className='fw_26_px fw-bold'>Academic Projects</h3>
            <div>
            {academicProjects.map(project => (
                <div key={project.projectName} className='d-flex align-items-start mb-3'>
                    <div className={`${style.circle}`}></div>
                    <div className={`${style.resume_section} ms-3`}>
                        <h4 className={`fw_18_px ${style.sub_title_styling}`}>{project.projectName}</h4>
                        <p className={`fw_16_px f_famil_roboto f_style_italic`}>{project.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

function ResumeSumary ()
{
    return (
        <div className='f_famil_raleway mb-4'>
            <h3 className='fw_26_px fw-bold'>Summary</h3>
            <div>
                <div className='d-flex align-items-start mb-3'>
                    <div className={`${style.circle}`}></div>
                    <div className={`${style.resume_section} ms-3`}>
                        <h4 className={`fw_18_px ${style.sub_title_styling}`}>BRANDON JOHNSON</h4>
                        <p className={`fw_16_px f_famil_roboto f_style_italic `}>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Resume ()
{
    return (
        <div className='container '>
            <div className='d-flex justify-content-between'>
                <div className='me-5'>
                    <ResumeSumary/>
                    <ResumeEducation/>
                </div>
                <div>
                    <AcademicResume/>
                </div>
            </div>
        </div>
    )
}

export default Resume;