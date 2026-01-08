'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import style from '../styles/Resume.module.css'
import React, { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';
import FadeTop from './FadeTop';
import useInViewOnce from '../CostumHooks/UseInViewOnce';


const ResumeSummary = {
    name : "Amajat Soufiane",
    summary : "Motivated software developer with a solid background in computer science and initial experience in software design and development. Skilled in programming with multiple languages, debugging, and performance optimization. Able to quickly adapt to new technologies and work effectively in a team."
}

const educationInfoArr = [
    {
        diplomaName :"High School Diploma",
        duration: "2018 - 2019" ,
        location : "Moulay Idriss II High School" ,
        description : "Graduated with honors in economic studies",
    },
    {
        diplomaName :"Economics Studies",
        duration: "2019 - 2021" ,
        location : "Hassan II University" ,
        description : "Studied for 2 years at Hassan II economics faculty",
    },
    {
        diplomaName :"42 Network Common Core Certificate",
        duration: "2021 - 2023" ,
        location : "1337 IT School" ,
        description : "Completed a two-year Common Core program with a focus on peer-to-peer learning and hands-on networking, Linux, system administration and coding projects.",
    },
]


const academicProjects = [
    {
        projectName :"Ft_transcendance",
        description : "Web application featuring a real-time multiplayer PingPong game with robust chat system."    
    },
    {
        projectName :"Webserv",
        description : "Collaborative project focused on creating a custom HTTP server with efficient handling of requests and responses."    
    },
    {
        projectName :"Inception",
        description : "Docker-based system administration project, establishing a secure virtualized infrastructure with NGINX, WordPress, and MariaDB containers."    
    },
    {
        projectName :"Minishell",
        description : "Collaborative shell interpreter inspired by Bash, emphasizing command execution."    
    },
    {
        projectName :"ft_containers",
        description : "Reimplementation of several STL containers as defined by C++98, including vector, stack, map, and set."    
    },
]


interface EductionUnitsType {
    diplomaName :string,
    duration: string, 
    location : string, 
    description : string
}

const EductionUnits: React.FC<{educationInfo: EductionUnitsType }> = ({educationInfo}) => 
{
    return (
        <div className={style.resume_item}>
            <span className={style.resume_duration}>{educationInfo.duration}</span>
            <h4 className={style.resume_title}>{educationInfo.location}</h4>
            {educationInfo.diplomaName && (
                <p className={style.resume_subtitle}>{educationInfo.diplomaName}</p>
            )}
            <p className={style.resume_description}>{educationInfo.description}</p>
        </div>
    )
}

function ResumeEducation ()
{
    return (
        <div className={style.resume_container}>
            <h3 className={style.section_header}>
                <span className={style.section_header_icon}>
                    <i className="bi bi-mortarboard-fill"></i>
                </span>
                Education
            </h3>
            {educationInfoArr.map(item => (
                <EductionUnits key={item.location} educationInfo={item}/>
            ))}
        </div>
    )
}

function AcademicResume ()
{
    return (
        <div className={style.resume_container}>
            <h3 className={style.section_header}>
                <span className={style.section_header_icon}>
                    <i className="bi bi-code-slash"></i>
                </span>
                Academic Projects
            </h3>
            <div>
            {academicProjects.map(project => (
                <div key={project.projectName} className={style.project_item}>
                    <h4 className={style.project_name}>{project.projectName}</h4>
                    <p className={style.project_desc}>{project.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

function ResumeSumary ()
{
    return (
        <div className={style.summary_box}>
            <h3 className={style.summary_title}>
                <i className="bi bi-person-fill me-2"></i>
                {ResumeSummary.name}
            </h3>
            <p className={style.summary_text}>{ResumeSummary.summary}</p>
        </div>
    )
}


interface resumeProps {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
    reference : RefObject<HTMLDivElement> | undefined;
}
const Resume: React.FC<resumeProps> = ({ setCurrentPage, reference }) => {

    const isInView = useInView(reference);
    const isInViewOnce = useInViewOnce(reference);
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
  
    useEffect(() => {
      if (isInViewOnce) {
        setShowFirst(true);
        const timer = setTimeout(() => {
          setShowSecond(true);
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [isInViewOnce]);
  
    useEffect(() => {
      if (isInView) {
        setCurrentPage("resume");
      }
    }, [isInView, setCurrentPage]);
  
    return (
        <SectionTitle sectionName='Resume' reference={reference}>
            <FadeTop reference={reference}>
                <ResumeSumary/>
            </FadeTop>
            <div className='row g-4'>
                { showFirst &&
                    <div className='col-lg-6'>
                        <FadeTop key="1" reference={reference}>
                            <ResumeEducation/>
                        </FadeTop>
                    </div>
                }

                { showSecond &&
                    <div className='col-lg-6'>
                        <FadeTop key="2" reference={reference}>
                            <AcademicResume/>
                        </FadeTop>
                    </div>
                }
            </div>
        </SectionTitle>
    )
}

export default Resume;