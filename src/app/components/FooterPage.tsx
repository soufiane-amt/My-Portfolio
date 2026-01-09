"use client";
import style from "../styles/FooterPage.module.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const socialLinks = [
  {
    icon: "bi-github",
    url: "https://github.com/soufiane-amt",
    label: "GitHub",
  },
  {
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/in/soufiane-amajat/",
    label: "LinkedIn",
  },
  {
    icon: "bi-twitter-x",
    url: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: "bi-medium",
    url: "https://medium.com/@amajatsoufiane",
    label: "Medium",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contacts" },
];

function FooterPage() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer_glow}></div>

      <div className={style.footer_content}>
        <div className={style.footer_main}>
          {/* Brand Section */}
          <div className={style.footer_brand}>
            <a href="#home" className={style.footer_logo}>
              <span className={style.logo_text}>SA</span>
            </a>
            <p className={style.footer_tagline}>
              Software Developer passionate about creating elegant solutions and
              building exceptional digital experiences.
            </p>
            <div className={style.social_links}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.social_link}
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={style.footer_links_section}>
            <h4 className={style.footer_heading}>Quick Links</h4>
            <ul className={style.footer_links}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={style.footer_link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={style.footer_contact_section}>
            <h4 className={style.footer_heading}>Get In Touch</h4>
            <div className={style.contact_items}>
              <a
                href="mailto:amajatsoufiane@gmail.com"
                className={style.contact_item}
              >
                <i className="bi bi-envelope"></i>
                <span>amajatsoufiane@gmail.com</span>
              </a>
              <a href="tel:+212689398453" className={style.contact_item}>
                <i className="bi bi-phone"></i>
                <span>+212 689 398 453</span>
              </a>
              <div className={style.contact_item}>
                <i className="bi bi-geo-alt"></i>
                <span>Morocco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={style.footer_bottom}>
          <div className={style.footer_divider}></div>
          <div className={style.footer_bottom_content}>
            <p className={style.copyright}>
              © {currentYear} Soufiane Amajat. All rights reserved.
            </p>
            <p className={style.built_with}>
              Built with <span className={style.heart}>♥</span> using Next.js &
              TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
