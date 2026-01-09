"use client";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import style from "../styles/Resume.module.css";
import { RefObject, useEffect, useState } from "react";
import useInView from "../CostumHooks/UseInView";
import useInViewOnce from "../CostumHooks/UseInViewOnce";

const summary = {
  name: "Soufiane Amajat",
  text: "Motivated software developer with a solid background in computer science and practical experience in software design and development. Skilled in programming with multiple languages, debugging, and performance optimization. Able to quickly adapt to new technologies and work effectively in a team.",
};

const education = [
  {
    date: "2021 - 2023",
    title: "1337 IT School",
    subtitle: "42 Network Common Core Certificate",
    description:
      "Completed a rigorous two-year program focused on peer-to-peer learning, system administration, and hands-on coding projects.",
  },
  {
    date: "2019 - 2021",
    title: "Hassan II University",
    subtitle: "Economics Studies",
    description:
      "Studied economics and business fundamentals at Hassan II University.",
  },
  {
    date: "2018 - 2019",
    title: "Moulay Idriss II High School",
    subtitle: "High School Diploma",
    description: "Graduated with honors in economic studies.",
  },
];

const projects = [
  {
    name: "Ft_transcendance",
    description:
      "Full-stack web app featuring real-time multiplayer PingPong game with chat system using NestJS & React.",
  },
  {
    name: "Webserv",
    description:
      "Custom HTTP server in C++ with efficient request handling and CGI functionality.",
  },
  {
    name: "Inception",
    description:
      "Docker-based infrastructure with NGINX, WordPress, and MariaDB containers.",
  },
  {
    name: "Minishell",
    description:
      "Shell interpreter implementation inspired by Bash with command execution.",
  },
  {
    name: "ft_containers",
    description:
      "Reimplementation of STL containers (vector, stack, map, set) in C++98.",
  },
];

interface ResumeProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  reference: RefObject<HTMLDivElement> | undefined;
}

const Resume: React.FC<ResumeProps> = ({ setCurrentPage, reference }) => {
  const isInView = useInView(reference);
  const isInViewOnce = useInViewOnce(reference);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isInView) setCurrentPage("resume");
  }, [isInView, setCurrentPage]);

  useEffect(() => {
    if (isInViewOnce) {
      setTimeout(() => setShowContent(true), 200);
    }
  }, [isInViewOnce]);

  return (
    <section ref={reference} className={style.resume}>
      <div className={style.resume_container}>
        <div className={style.resume_header}>
          <span className={style.resume_label}>Resume</span>
          <h2 className={style.resume_title}>My Journey & Experience</h2>
          <p className={style.resume_subtitle}>
            A summary of my education and key projects
          </p>
        </div>

        {isInViewOnce && (
          <>
            <div className={style.summary_card}>
              <h3 className={style.summary_name}>{summary.name}</h3>
              <p className={style.summary_text}>{summary.text}</p>
            </div>

            {showContent && (
              <div className={style.resume_grid}>
                <div className={style.resume_section}>
                  <div className={style.section_header}>
                    <div className={style.section_icon}>
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <h3 className={style.section_title}>Education</h3>
                  </div>
                  <div className={style.timeline}>
                    {education.map((item, index) => (
                      <div key={index} className={style.timeline_item}>
                        <span className={style.timeline_date}>{item.date}</span>
                        <h4 className={style.timeline_title}>{item.title}</h4>
                        <p className={style.timeline_subtitle}>
                          {item.subtitle}
                        </p>
                        <p className={style.timeline_description}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={style.resume_section}>
                  <div className={style.section_header}>
                    <div className={style.section_icon}>
                      <i className="bi bi-code-square"></i>
                    </div>
                    <h3 className={style.section_title}>Key Projects</h3>
                  </div>
                  <div className={style.project_list}>
                    {projects.map((project, index) => (
                      <div key={index} className={style.project_card}>
                        <h4 className={style.project_name}>
                          <i className="bi bi-arrow-right-short"></i>
                          {project.name}
                        </h4>
                        <p className={style.project_desc}>
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Resume;
