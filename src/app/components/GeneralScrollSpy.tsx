"use client";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import style from "../styles/GeneralScrollSpy.module.css";
import { useEffect, useState, useRef } from "react";
import { navItems, resumeDownloads } from "../data";

interface currentPageState {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

interface GeneralScrollSpyProps {
  currentpageState: currentPageState;
}

const GeneralScrollSpy: React.FC<GeneralScrollSpyProps> = ({
  currentpageState,
}) => {
  const { currentPage, setCurrentPage } = currentpageState;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (sectionId: string) => {
    setCurrentPage(sectionId);
    setMobileMenuOpen(false);
  };

  // Handle scroll state for navbar background and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update current page based on scroll position
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setCurrentPage(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setCurrentPage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResumeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`${style.navbar} ${scrolled ? style.navbar_scrolled : ""}`}
      >
        <div className={style.navbar_container}>
          <a
            href="#home"
            className={style.logo}
            onClick={() => handleNavClick("home")}
          >
            <span className={style.logo_text}>SA</span>
          </a>

          <ul className={style.nav_links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${style.nav_link} ${
                    currentPage === item.id ? style.nav_link_active : ""
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={style.resume_dropdown_container} ref={dropdownRef}>
            <button
              className={style.hire_btn}
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
            >
              <i className="bi bi-download"></i> Resume
            </button>
            {resumeDropdownOpen && (
              <div className={style.resume_dropdown}>
                {resumeDownloads.map((resume) => (
                  <a
                    key={resume.label}
                    href={resume.url}
                    download
                    className={style.dropdown_item}
                    onClick={() => setResumeDropdownOpen(false)}
                  >
                    <i className={`bi ${resume.icon}`}></i> {resume.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            className={`${style.menu_btn} ${
              mobileMenuOpen ? style.menu_btn_open : ""
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${style.mobile_menu} ${
          mobileMenuOpen ? style.mobile_menu_open : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${style.mobile_nav_link} ${
              currentPage === item.id ? style.mobile_nav_link_active : ""
            }`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default GeneralScrollSpy;
