"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import ProfileImg from '@public/profile-img.jpg';
import Image from 'next/image';
import style from '../styles/About.module.css';
import { useEffect, useRef, useState } from 'react';
import FadeTop from './FadeTop';
import { profileInfo, skills, aboutText } from '../data';

interface SkillBarProps {
    skill: { name: string; level: number; color: string };
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={style.skill_item} ref={ref}>
            <div className={style.skill_header}>
                <span className={style.skill_name}>{skill.name}</span>
                <span className={style.skill_level}>{skill.level}%</span>
            </div>
            <div className={style.skill_bar}>
                <div 
                    className={style.skill_progress}
                    style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                    }}
                />
            </div>
        </div>
    );
};

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className={style.info_card}>
            <i className={`bi bi-${icon}`}></i>
            <div>
                <span className={style.info_label}>{label}</span>
                <span className={style.info_value}>{value}</span>
            </div>
        </div>
    );
}

interface aboutProps {}

const About: React.FC<aboutProps> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className={style.about_section}>
            <div className={style.section_container}>
                <div className={style.section_header}>
                    <span className={style.section_label}>Get to know me</span>
                    <h2 className={style.section_title}>About Me</h2>
                </div>

                <FadeTop reference={sectionRef}>
                    <div className={style.about_grid}>
                        <div className={style.about_content}>
                            <div className={style.about_image_wrapper}>
                                <Image src={ProfileImg} alt="Profile" className={style.about_image} />
                            </div>
                        </div>

                        <div className={style.about_text}>
                            <h3 className={style.about_heading}>
                                {aboutText.heading}
                            </h3>
                            {aboutText.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}

                            <div className={style.info_grid}>
                                <InfoCard icon="person" label="Name" value={profileInfo.name} />
                                <InfoCard icon="envelope" label="Email" value={profileInfo.email} />
                                <InfoCard icon="telephone" label="Phone" value={profileInfo.phone} />
                                <InfoCard icon="geo-alt" label="Location" value={profileInfo.location} />
                            </div>
                        </div>
                    </div>

                    <div className={style.skills_section}>
                        <h3 className={style.skills_title}>
                            <i className="bi bi-code-slash"></i>
                            Technical Skills
                        </h3>
                        <div className={style.skills_grid}>
                            {skills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                </FadeTop>
            </div>
        </section>
    );
}

export default About;