'use client'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import style from '../styles/Portfolio.module.css';
import { useRef, useState } from 'react';
import useInViewOnce from '../CostumHooks/UseInViewOnce';
import { projects, projectCategories } from '../data';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInViewOnce = useInViewOnce(sectionRef);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section ref={sectionRef} className={style.portfolio}>
            <div className={style.portfolio_container}>
                <div className={style.portfolio_header}>
                    <span className={style.portfolio_label}>Portfolio</span>
                    <h2 className={style.portfolio_title}>Featured Projects</h2>
                    <p className={style.portfolio_subtitle}>
                        A collection of academic and personal projects from 1337
                    </p>
                </div>

                {isInViewOnce && (
                    <>
                        <div className={style.filter_tabs}>
                            {projectCategories.map((category) => (
                                <button
                                    key={category}
                                    className={`${style.filter_tab} ${activeCategory === category ? style.filter_tab_active : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className={style.projects_grid}>
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.name}
                                    className={`${style.project_card} ${style.fade_in_up}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={style.project_image_wrapper}>
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className={style.project_image}
                                        />
                                        <div className={style.project_overlay}></div>
                                    </div>
                                    <div className={style.project_content}>
                                        <span className={style.project_category}>{project.category}</span>
                                        <h3 className={style.project_name}>{project.name}</h3>
                                        <p className={style.project_description}>{project.description}</p>
                                        <div className={style.project_tech}>
                                            {project.tech.map((t) => (
                                                <span key={t} className={style.tech_tag}>{t}</span>
                                            ))}
                                        </div>
                                        <div className={style.project_links}>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={style.project_link}
                                            >
                                                <i className="bi bi-github"></i> Source Code
                                            </a>
                                            {project.category === "Web" && (
                                                <a
                                                    href={project.liveDemo || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${style.project_link} ${style.project_link_demo} ${!project.liveDemo ? style.project_link_disabled : ''}`}
                                                    onClick={(e) => !project.liveDemo && e.preventDefault()}
                                                >
                                                    <i className="bi bi-box-arrow-up-right"></i> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
