"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImg from '@public/profile-img.jpg';
import Image from 'next/image';
import style from '../styles/About.module.css'
import { useEffect, useRef, useState } from 'react';

const profileInfo = {
    name : "Soufiane Amajat",
    profile : "Full Stack Developer",
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
            <SkillBar skillData={{skillName:"HTML", percentage: "70", color: ""}} />
            <SkillBar skillData={{skillName:"CSS", percentage: "20", color: "success"}} />
            <SkillBar skillData={{skillName:"Next.js", percentage: "30", color: "info"}} />
            <SkillBar skillData={{skillName:"Nest.js", percentage: "40", color: "warning"}} />
            <SkillBar skillData={{skillName:"Javascript", percentage: "50", color: "danger"}} />
            <SkillBar skillData={{skillName:"C", percentage: "70", color: "secondary"}} />
            <SkillBar skillData={{skillName:"C++", percentage: "90", color: "dark"}} />
        </div>
    )
}


function ProfileInfo() {
    return (
        <div className={`profile-info ${style.text_light_black}  ${style.f_famil_roboto}  `}>
            <p><span className={` fw-bold ${style.fw_16_px}`}>Name:</span> {profileInfo.name}</p>
            <p><span className={`fw-bold ${style.fw_16_px}`}>Profile:</span> {profileInfo.profile}</p>
            <p><span className={`fw-bold ${style.fw_16_px}`}>Email:</span> {profileInfo.email}</p>
            <p><span className={`fw-bold ${style.fw_16_px}`}>Phone:</span> {profileInfo.phone}</p>
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
                height={170}
                width={170}
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
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
        </div>
    )
}

function About ()
{
    
    return(
        <div  className=' container rounded  shadow-lg p-4 my-5 '>
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
    )
}

export default About;