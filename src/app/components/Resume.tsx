'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Resume.module.css'
import React, { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';
import FadeTop from './FadeTop';
import useInViewOnce from '../CostumHooks/UseInViewOnce';


const ResumeSummary = {
    name : "Amajat Soufiane",
    summary : "Motivated software developer with a solid background in computer science and initial\
    experience in software design and development. Skilled in programming with\
    multiple languages, debugging, and performance optimization. Able to quickly adapt\
    to new technologies and work effectively in a team."
}

const educationInfoArr = [
    {
        diplomaName :"High School Diploma",
        duration: "2018 - 2019" ,
        location : "Moulay Idriss II high school" ,
        description : "Graduated with honors in economic studies",
    },
    {
        diplomaName :"",
        duration: "2019 - 2021" ,
        location : "Hassan II university" ,
        description : "Studied for 2 years at Hassan 2 economics faculty",
    },
    {
        diplomaName :"42 network Common Core Certificate",
        duration: "2010 - 2014" ,
        location : "1337 IT School" ,
        description : "Completed a two-year Common Core\
        program with a focus on peer-to-peer\
        learning and hands-on networking,\
        Linux, system administration and\
        coding projects.",
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
                    <h4 className={`fw_18_px ${style.sub_title_styling}`}>{educationInfo.location}</h4>
                    <p className='ps-3 fw-bold'>{educationInfo.duration}</p>
                    <p className={`fw_16_px f_famil_roboto f_style_italic `}>{educationInfo.diplomaName}</p>
                    <p className={`fw_16_px f_famil_roboto  `}>{educationInfo.description}</p>
                </div>
            </div>
    )
}

function ResumeEducation ()
{
    return (
        <div className='f_famil_raleway mb-4'>
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
    // mb-4   
    return (
        <div className='f_famil_raleway mb-4'>
            <h3 className='fw_26_px fw-bold'>Summary</h3>
            <div>
                <div className='d-flex align-items-start mb-3'>
                    <div className={`${style.circle}`}></div>
                    <div className={`${style.resume_section} ms-3`}>
                        <h4 className={`fw_18_px ${style.sub_title_styling}`}>{ResumeSummary.name}</h4>
                        <p className={`fw_16_px f_famil_roboto f_style_italic `}>{ResumeSummary.summary}</p>
                    </div>
                </div>
            </div>
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
            }, 300); //  delay
            return () => clearTimeout(timer); // Cleanup timer
          }
        }, [isInViewOnce]);
      
        useEffect(() => {
          if (isInView) {
            setCurrentPage("resume");
          }
        }, [isInView]);
      
          return (
                <SectionTitle sectionName='Resume' reference={reference}>
                    <div className='d-flex flex-column flex-md-row'>
                        { 
                            <FadeTop key="1" reference={reference}>
                                <div className={`${style.me_setting}`}>
                                    <ResumeSumary/>
                                    <ResumeEducation/>
                                </div>
                            </FadeTop>
                        }

                        { showSecond &&
                            <FadeTop key="2" reference={reference}>
                                <div>
                                    <AcademicResume/>
                                </div>
                            </FadeTop>
                        }
                    </div>
                </SectionTitle>
    )
}

export default Resume;