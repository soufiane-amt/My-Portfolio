"use client";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import style from "../styles/Contact.module.css";
import { useRef } from "react";
import useInViewOnce from "../CostumHooks/UseInViewOnce";
import { contactMethods, socialLinks } from "../data";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInViewOnce = useInViewOnce(sectionRef);

  return (
    <section ref={sectionRef} className={style.contact}>
      {/* Background Elements */}
      <div className={style.contact_bg}>
        <div className={style.gradient_orb_1}></div>
        <div className={style.gradient_orb_2}></div>
      </div>

      <div className={style.contact_container}>
        {/* Header */}
        <div className={style.contact_header}>
          <span className={style.contact_label}>Get In Touch</span>
          <h2 className={style.contact_title}>
            Let&apos;s Build Something
            <span className={style.title_highlight}> Amazing </span>
            Together
          </h2>
          <p className={style.contact_subtitle}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {isInViewOnce && (
          <>
            {/* Contact Cards Grid */}
            <div className={style.contact_grid}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={
                    method.link.startsWith("mailto") ||
                    method.link.startsWith("tel")
                      ? "_self"
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className={style.contact_card}
                  style={
                    {
                      animationDelay: `${index * 0.1}s`,
                      "--card-color": method.color,
                    } as React.CSSProperties
                  }
                >
                  <div className={style.card_icon_wrapper}>
                    <i className={`bi ${method.icon}`}></i>
                  </div>
                  <div className={style.card_content}>
                    <h3 className={style.card_title}>{method.title}</h3>
                    <p className={style.card_value}>{method.value}</p>
                  </div>
                  <div className={style.card_arrow}>
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                  <div className={style.card_glow}></div>
                </a>
              ))}
            </div>

            {/* Divider with "or" */}
            <div className={style.divider}>
              <span className={style.divider_line}></span>
              <span className={style.divider_text}>or find me on</span>
              <span className={style.divider_line}></span>
            </div>

            {/* Social Links */}
            <div className={style.social_section}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.social_link}
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon}`}></i>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className={style.availability}>
              <span className={style.availability_dot}></span>
              <span className={style.availability_text}>
                Currently available for freelance work
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
