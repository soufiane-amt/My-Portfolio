'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import  style from '../styles/Home.module.css';
import MainBackImg from '@public/myPic.jpg';
import { useEffect, useState } from 'react';
import internal from 'stream';


const texts = ['Software developper', 'Cyber security enthusiast'];





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
                }, 10); // Delay before moving to the next phrase (adjust as needed)
            }
            else{
                const cursorAnimation = () =>{

                }
                clearInterval(interval)
                setTimeout(() => {
                    setCurrentIndexText(prevIndex => (prevIndex + 1) % texts.length);
                    console.log(currentDisplayedText)
                    setCurrentDisplayedText('');
                }, 2000); // Delay before moving to the next phrase (adjust as needed)
            }
        }
        const interval = setInterval (typeText, 100)
        return ()=>{
            clearInterval(interval)
        }
        
    }, [currentIndexText])


    return (
        <div className={`${style.home_main} position-absolute start-50 bottom-50 translate-middle d-flex flex-column align-items-center `}>
            <h2 className={`text-white ${style.intr_size}`}>I am Soufiane Amajat</h2>
            <div className={`${style.typing_text} text-white`}>
                {currentDisplayedText}

                <span className={currentDisplayedText.length == texts[currentIndexText].length ? style.blinking_cursor : style.non_blinking_cursor}>&nbsp;</span>
            </div>
        </div>
    )
}

export default function Home() {
    const [imageWidth, setImageWidth] = useState(50); // Initial width percentage

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const reductionFactor = Math.floor((screenWidth - 100) / 200); // Calculate how many times the screen has reduced by 200px
            const newWidth = Math.max(20, 50 - reductionFactor * 6); // Decrease width by 5% per 200px reduction
            setImageWidth(newWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${style.home_styling} position-relative overflow-hidden d-flex justify-content-center`}>
            <Image
                src={MainBackImg}
                alt="My picture"
                className={`img-fluid ${style.dimmed_image}`}
                style={{ width: `${imageWidth}%` }}
            />
        </div>
    );
}
