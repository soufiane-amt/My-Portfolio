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
}
function SkillBar ({skillData}: {skillData : SkillDataType}){
    return (
        <div>
            <div className='f-flex justify-content-between'>
                <label>{skillData.skillName}</label>
                <span>{skillData.percentage}%</span>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar " style={{width:`${skillData.percentage}%`}}></div>
            </div>
        </div>
    )
}

function AboutSkills (){

    return (
        <div>
            <h5 className={`${style.fw_18} fw-bold`}>Skills</h5>
            <SkillBar skillData={{skillName:"HTML", percentage: "70"}} />
            {/* <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className='f-flex justify-content-between'>
                    <label>HTML</label>
                    <span>75%</span>
                </div>
                <div className="progress-bar " style={{width:'10%'}}></div>
            </div> */}
            {/* <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-success" style={{width:'20%'}}></div>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-info" style={{width:'30%'}}></div>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-warning" style={{width:'40%'}}></div>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-danger" style={{width:'50%'}}></div>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-secondary" style={{width:'70%'}}></div>
            </div>
            <div className={`progress my-3 ${style.h_10px} rounded-0`}>
                <div className="progress-bar  bg-dark" style={{width:'90%'}}></div>
            </div> */}
        </div>
    )
}


function ProfileInfo() {
    return (
        <div className={`profile-info ${style.text_light_black} ${style.ml_30px}`}>
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

function About ()
{
    return(
        <div>
            {/* <AboutContacts/> */}
            <AboutSkills/>
        </div>
    )
}

export default About;