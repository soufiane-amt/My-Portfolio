'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Image from 'next/image';
import  style from '../styles/Home.module.css';
import MainBackImg from '@public/myPic.jpg';
import { LegacyRef, RefObject, useEffect, useState } from 'react';
import useInView from '../CostumHooks/UseInView';
import FadeTop from './FadeTop';


const texts = ['Software Developer', 'Cyber Security Enthusiast', 'Full Stack Engineer'];


function Introduction()
{
    const [currentIndexText, setCurrentIndexText] = useState<number>(0);
    const [currentDisplayedText, setCurrentDisplayedText] = useState<string>("");

    useEffect(()=>{

        var charIndex = 0;
        const phraseToDisplay = texts[currentIndexText];
        const typeText = ()=>{
            if (charIndex < phraseToDisplay.length)
            {
                setCurrentDisplayedText((prevDisplayedText)=> prevDisplayedText + phraseToDisplay[charIndex])
                setTimeout(() => {
                    charIndex++;
                }, 10);
            }
            else{
                clearInterval(interval)
                setTimeout(() => {
                    setCurrentIndexText(prevIndex => (prevIndex + 1) % texts.length);
                    setCurrentDisplayedText('');
                }, 2000);
            }
        }
        const interval = setInterval (typeText, 80)
        return ()=>{
            clearInterval(interval)
        }
        
    }, [currentIndexText])


    return (
        <div className={`${style.home_main}`}>
            <p className={`fade_in_element_3_s ${style.greeting_text}`}>Welcome to my portfolio</p>
            <h1 className={`fade_in_element_3_s text-white ${style.intr_size}`}>
                I&apos;m <span className={style.name_highlight}>Soufiane Amajat</span>
            </h1>
            <div className={`${style.typing_text}`}>
                {currentDisplayedText}
                <span className={currentDisplayedText.length == texts[currentIndexText].length ? style.blinking_cursor : style.non_blinking_cursor}></span>
            </div>
            
            {/* Social Links */}
            <div className={style.social_links}>
                <a href="https://github.com/soufiane-amt" target="_blank" rel="noopener noreferrer" className={style.social_link}>
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/soufiane-amajat/" target="_blank" rel="noopener noreferrer" className={style.social_link}>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:amajatsoufiane@gmail.com" className={style.social_link}>
                    <i className="bi bi-envelope"></i>
                </a>
            </div>
        </div>
    )
}


interface homeProps {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
    reference : RefObject<HTMLDivElement> | undefined;
}
const Home: React.FC<homeProps> = ({ setCurrentPage, reference }) => {
    const  isInView  = useInView(reference);

    useEffect (()=>{
        if (isInView)
        setCurrentPage("home")
    }, [isInView, setCurrentPage])

    return (
        <div ref={reference} className={`${style.home_styling} position-relative overflow-hidden`}>
            <img
                src={MainBackImg.src}
                alt="My picture"
                className={`fade_in_element_5_s ${style.dimmed_image}`}
            />
            <div className={style.home_overlay}></div>
            <Introduction/>
            
            {/* Scroll Indicator */}
            <div className={style.scroll_indicator}>
                <div className={style.scroll_indicator_inner}></div>
            </div>
        </div>
    );
}

export default Home;