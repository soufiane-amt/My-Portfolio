"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImg from '@public/profile-img.jpg';
import Image from 'next/image';
import style from '../styles/About.module.css'
import { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';
import FadeTop from './FadeTop';

const profileInfo = {
    name : "Soufiane Amajat",
    profile : "Software Developer",
    email : "amajatsoufiane@gmail.com",
    phone : "+212689398453"
}


interface SkillDataType{
    skillName:string, 
    percentage: string,
    color: string
}
const SkillBar: React.FC<{ skillData: SkillDataType }> = ({ skillData }) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 } // Adjust the threshold as needed
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);

    return (
        <div>
            <div className={`d-flex justify-content-between ${style.text_light_black} mt-0 ${style.f_famil_raleway}`}>
                <label className={`${style.fw_12_px}`}>{skillData.skillName}</label>
                <span className={`${style.fw_12_px}`}>{skillData.percentage}%</span>
            </div>
            <div className={`progress mb-3 ${style.h_10px} rounded-0`} ref={progressBarRef}>
                <div
                    className={`progress-bar progress-bar-animated bg-${skillData.color}`}
                    style={{ width: isVisible ? `${skillData.percentage}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

function AboutSkills (){

    return (
        <div className={`mt-4`}>
            <h5 className={`${style.fw_18_px} fw-bold ${style.f_famil_raleway}`}>Skills</h5>
            <SkillBar skillData={{skillName:"HTML", percentage: "90", color: ""}} />
            <SkillBar skillData={{skillName:"CSS", percentage: "75", color: "success"}} />
            <SkillBar skillData={{skillName:"Next.js", percentage: "80", color: "info"}} />
            <SkillBar skillData={{skillName:"Nest.js", percentage: "70", color: "warning"}} />
            <SkillBar skillData={{skillName:"Javascript", percentage: "90", color: "danger"}} />
            <SkillBar skillData={{skillName:"C", percentage: "90", color: "secondary"}} />
            <SkillBar skillData={{skillName:"C++", percentage: "80", color: "dark"}} />
        </div>
    )
}


function ProfileInfo() {
    return (
        <div className={`profile-info ${style.text_light_black}  ${style.f_famil_roboto}  `}>
            <p className={`${style.long_word}`}><span className={` fw-bold ${style.fw_16_px}`}>Name:</span> {profileInfo.name}</p>
            <p className={`${style.long_word}`}><span className={`fw-bold ${style.fw_16_px}`}>Profile:</span> {profileInfo.profile}</p>
            <p className={`${style.long_word}`}><span className={`fw-bold ${style.fw_16_px}`}>Email:</span> {profileInfo.email}</p>
            <p className={`${style.long_word}`}><span className={`fw-bold ${style.fw_16_px}`}>Phone:</span> {profileInfo.phone}</p>
        </div>
    );
}


function AboutContacts ()
{

    return (
        <div className={`d-flex ${style.about_contacts}`}>
            <Image
                src={ProfileImg}
                alt="Profile picture"
            />
            <ProfileInfo />
        </div>
    )
}

function AboutMe(){
    return (
        <div className={`bg-white ${style.about_me}`} >
            <h5 className={`${style.fw_28_px} ${style.f_famil_raleway} fw-bold border-bottom border-primary border-5 mb-4`}>About me</h5>
            <p className={`${style.f_famil_roboto} ${style.fw_18_px} ${style.text_light_black}`}>
            Greetings! I'm Soufiane, a tech enthusiast who honed their coding skills at 1337 and is now delving into the captivating realm of software development. My journey began with immersive learning and collaboration at 1337, where I mastered the art of coding through hands-on projects and peer-to-peer education.

            <br/>
            Building on my foundation in software development, I've pivoted towards the exciting field of advanced software solutions. Fueled by a passion for creating innovative digital landscapes, I'm currently immersed in the complexities of web development, and application programming.
            <br/>


            Leveraging the problem-solving mindset instilled at 1337, I'm navigating the ever-evolving software development landscape, exploring new challenges, and embracing continuous learning. My goal is not just to understand coding principles but to proactively develop robust and efficient software solutions that meet emerging needs.            </p>
        </div>
    )
}


interface aboutProps {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
    reference : RefObject<HTMLDivElement> | undefined;
}
const About: React.FC<aboutProps> = ({ setCurrentPage,reference }) => {
    const  isInView  = useInView(reference);

    useEffect (()=>{
        if (isInView)
            setCurrentPage("about")
    }, [isInView])

    return(
        <FadeTop reference={reference}>
            <div ref={reference} className=' container rounded  shadow-lg p-4 my-5 '>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column'>
                            <AboutContacts />
                            <AboutSkills />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <AboutMe/>
                    </div>
                </div>
            </div>
        </FadeTop>
    
    )
}

export default About;