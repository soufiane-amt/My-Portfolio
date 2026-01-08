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
    colorClass: string
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
            { threshold: 0.5 }
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
        <div className={style.skill_item}>
            <div className={style.skill_header}>
                <span className={style.skill_name}>{skillData.skillName}</span>
                <span className={style.skill_percentage}>{skillData.percentage}%</span>
            </div>
            <div className={`${style.h_10px}`} ref={progressBarRef}>
                <div
                    className={`${style.progress_bar} ${style[skillData.colorClass]}`}
                    style={{ width: isVisible ? `${skillData.percentage}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

function AboutSkills (){
    return (
        <div className={style.skills_section}>
            <h5 className={style.skills_title}>Technical Skills</h5>
            <SkillBar skillData={{skillName:"HTML", percentage: "90", colorClass: "skill_html"}} />
            <SkillBar skillData={{skillName:"CSS", percentage: "75", colorClass: "skill_css"}} />
            <SkillBar skillData={{skillName:"Next.js", percentage: "80", colorClass: "skill_nextjs"}} />
            <SkillBar skillData={{skillName:"Nest.js", percentage: "70", colorClass: "skill_nestjs"}} />
            <SkillBar skillData={{skillName:"Javascript", percentage: "90", colorClass: "skill_js"}} />
            <SkillBar skillData={{skillName:"C", percentage: "90", colorClass: "skill_c"}} />
            <SkillBar skillData={{skillName:"C++", percentage: "80", colorClass: "skill_cpp"}} />
        </div>
    )
}


function ProfileInfo() {
    return (
        <div className={style.profile_info_container}>
            <div className={style.profile_item}>
                <span className={style.profile_label}>Name</span>
                <span className={style.profile_value}>{profileInfo.name}</span>
            </div>
            <div className={style.profile_item}>
                <span className={style.profile_label}>Profile</span>
                <span className={style.profile_value}>{profileInfo.profile}</span>
            </div>
            <div className={style.profile_item}>
                <span className={style.profile_label}>Email</span>
                <span className={style.profile_value}>{profileInfo.email}</span>
            </div>
            <div className={style.profile_item}>
                <span className={style.profile_label}>Phone</span>
                <span className={style.profile_value}>{profileInfo.phone}</span>
            </div>
        </div>
    );
}


function AboutContacts ()
{
    return (
        <div className={style.about_contacts}>
            <Image
                src={ProfileImg}
                alt="Profile picture"
            />
            <ProfileInfo />
        </div>
    )
}

function AboutMe() {
    return (
        <div className={style.about_me}>
            <h5 className={style.about_me_title}>
                About Me
            </h5>
            <p className={style.about_text}>
                Greetings! I&apos;m Soufiane, a tech enthusiast who honed their coding skills at 1337 and is now delving into the captivating realm of software development. My journey began with immersive learning and collaboration at 1337, where I mastered the art of coding through hands-on projects and peer-to-peer education.
            </p>
            <p className={style.about_text}>
                Building on my foundation in software development, I&apos;ve pivoted towards the exciting field of advanced software solutions. Fueled by a passion for creating innovative digital landscapes, I&apos;m currently immersed in the complexities of web development and application programming.
            </p>
            <p className={style.about_text}>
                Leveraging the problem-solving mindset instilled at 1337, I&apos;m navigating the ever-evolving software development landscape, exploring new challenges, and embracing continuous learning.
            </p>
        </div>
    );
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
    }, [isInView, setCurrentPage])

    return(
        <FadeTop reference={reference}>
            <div ref={reference} className={style.about_container}>
                <div className='row g-4'>
                    <div className='col-lg-5'>
                        <div className='d-flex flex-column'>
                            <AboutContacts />
                            <AboutSkills />
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <AboutMe/>
                    </div>
                </div>
            </div>
        </FadeTop>
    )
}

export default About;