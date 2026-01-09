'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import style from '../styles/Home.module.css';
import MainBackImg from '@public/myPic.jpg';
import { useEffect, useState } from 'react';
import { homeData } from '../data';

function Introduction() {
    const [currentIndexText, setCurrentIndexText] = useState<number>(0);
    const [currentDisplayedText, setCurrentDisplayedText] = useState<string>("");

    useEffect(() => {
        var charIndex = 0;
        const phraseToDisplay = homeData.typingTexts[currentIndexText];
        const typeText = () => {
            if (charIndex < phraseToDisplay.length) {
                setCurrentDisplayedText((prev) => prev + phraseToDisplay[charIndex]);
                setTimeout(() => { charIndex++; }, 10);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndexText(prevIndex => (prevIndex + 1) % homeData.typingTexts.length);
                    setCurrentDisplayedText('');
                }, 2000);
            }
        }
        const interval = setInterval(typeText, 80);
        return () => clearInterval(interval);
    }, [currentIndexText]);

    return (
        <div className={style.hero_content}>
            <div className={style.hero_badge}>
                <span className={style.status_dot}></span>
                {homeData.availabilityStatus}
            </div>
            
            <h1 className={style.hero_title}>
                <span className={style.greeting}>{homeData.greeting}</span>
                <span className={style.name}>{homeData.name}</span>
            </h1>
            
            <div className={style.typing_container}>
                <span className={style.typing_text}>{currentDisplayedText}</span>
                <span className={style.cursor}></span>
            </div>
            
            <p className={style.hero_description}>
                {homeData.description}
            </p>
            
            <div className={style.hero_buttons}>
                <a href="#portfolio" className={style.btn_primary}>
                    <i className="bi bi-folder"></i>
                    View Projects
                </a>
                <a href="#contacts" className={style.btn_secondary}>
                    <i className="bi bi-envelope"></i>
                    Get in Touch
                </a>
            </div>
            
            <div className={style.social_links}>
                {homeData.socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.url} 
                        target={social.url.startsWith('mailto') ? '_self' : '_blank'} 
                        rel="noopener noreferrer" 
                        className={style.social_link}
                        aria-label={social.label}
                    >
                        <i className={`bi ${social.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
}

interface homeProps {}

const Home: React.FC<homeProps> = () => {
    return (
        <section className={style.hero_section}>
            <div className={style.hero_bg}>
                <div className={style.gradient_orb1}></div>
                <div className={style.gradient_orb2}></div>
                <div className={style.grid_pattern}></div>
            </div>
            
            <div className={style.hero_container}>
                <Introduction />
                
                <div className={style.hero_image_container}>
                    <div className={style.image_wrapper}>
                        <img src={MainBackImg.src} alt="Soufiane Amajat" className={style.hero_image} />
                        <div className={style.image_border}></div>
                    </div>
                    <div className={style.floating_card1}>
                        <i className="bi bi-code-slash"></i>
                        <span>Clean Code</span>
                    </div>
                    <div className={style.floating_card2}>
                        <i className="bi bi-shield-check"></i>
                        <span>Security First</span>
                    </div>
                </div>
            </div>
            
            <div className={style.scroll_indicator}>
                <div className={style.mouse}>
                    <div className={style.wheel}></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default Home;