'use client'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import style from '../styles/Experience.module.css';
import { useRef } from 'react';
import useInViewOnce from '../CostumHooks/UseInViewOnce';
import { experiences } from '../data';

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInViewOnce = useInViewOnce(sectionRef);

    return (
        <section ref={sectionRef} className={style.experience}>
            <div className={style.experience_container}>
                <div className={style.experience_header}>
                    <span className={style.experience_label}>Career Path</span>
                    <h2 className={style.experience_title}>Work Experience</h2>
                    <p className={style.experience_subtitle}>
                        My professional journey and the skills I&apos;ve developed along the way
                    </p>
                </div>

                {isInViewOnce && (
                    <div className={style.timeline}>
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                className={style.timeline_item}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className={style.timeline_marker}>
                                    <div className={style.marker_dot}></div>
                                    <div className={style.marker_line}></div>
                                </div>
                                
                                <div className={style.experience_card}>
                                    <div className={style.card_header}>
                                        <div className={style.card_title_section}>
                                            <h3 className={style.job_title}>{exp.title}</h3>
                                            <div className={style.company_info}>
                                                <i className="bi bi-building"></i>
                                                <span className={style.company_name}>{exp.company}</span>
                                                {exp.location && (
                                                    <>
                                                        <span className={style.separator}>•</span>
                                                        <i className="bi bi-geo-alt"></i>
                                                        <span>{exp.location}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className={style.card_meta}>
                                            <span className={style.duration}>
                                                <i className="bi bi-calendar3"></i>
                                                {exp.duration}
                                            </span>
                                            <span className={style.job_type}>{exp.type}</span>
                                        </div>
                                    </div>
                                    
                                    <ul className={style.description_list}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className={style.description_item}>
                                                <i className="bi bi-check-circle-fill"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className={style.technologies}>
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className={style.tech_tag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
