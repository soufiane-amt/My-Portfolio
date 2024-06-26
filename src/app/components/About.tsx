"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImg from '@public/profile-img.jpg';
import Image from 'next/image';
import style from '../styles/About.module.css'

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
function SkillBar ({skillData}: {skillData : SkillDataType}){
    return (
        <div>
            <div className={`d-flex justify-content-between ${style.text_light_black} mt-0 ${style.f_famil_raleway}`}>
                <label className={`${style.fw_12}`}>{skillData.skillName}</label>
                <span className={`${style.fw_12}`}>{skillData.percentage}%</span>
            </div>
            <div className={`progress mb-3 ${style.h_10px} rounded-0`}>
                <div className={`progress-bar bg-${skillData.color}`} style={{width:`${skillData.percentage}%`}}></div>
            </div>
        </div>
    )
}

function AboutSkills (){

    return (
        <div className={`mt-4`}>
            <h5 className={`${style.fw_18} fw-bold ${style.f_famil_raleway}`}>Skills</h5>
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
        <div className={`profile-info ${style.text_light_black} ${style.ml_24px} ${style.f_famil_roboto}`}>
            <p><span className={` fw-bold ${style.fw_16}`}>Name:</span> {profileInfo.name}</p>
            <p><span className={`fw-bold ${style.fw_16}`}>Profile:</span> {profileInfo.profile}</p>
            <p><span className={`fw-bold ${style.fw_16}`}>Email:</span> {profileInfo.email}</p>
            <p><span className={`fw-bold ${style.fw_16}`}>Phone:</span> {profileInfo.phone}</p>
        </div>
    );
}


function AboutContacts ()
{

    return (
        <div className='d-flex '>
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
        <div className='bg-white' >
            <h5 className={`${style.fw_28} ${style.f_famil_raleway} fw-bold border-bottom border-primary border-5 mb-4`}>About me</h5>
            <p className={`${style.f_famil_roboto} ${style.fw_18} ${style.text_light_black}`}>
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
        <div className='container rounded  shadow-lg p-4 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <AboutContacts/>
                    <AboutSkills/>
                </div>
                <div className='col-6'>
                    <AboutMe/>
                </div>
            </div>
        </div>
    )
}

export default About;