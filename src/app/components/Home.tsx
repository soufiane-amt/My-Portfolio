'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import  style from '../styles/Home.module.css';
import MainBackImg from '@public/myPic1.jpg';
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
            <h1 className={`text-white ${style.intr_size}`}>I am Soufiane Amajat</h1>
            <div className={`${style.current_text} text-white`}>
                {currentDisplayedText}

                <span className={currentDisplayedText.length == texts[currentIndexText].length ? style.blinking_cursor : style.non_blinking_cursor}>&nbsp;</span>
            </div>
        </div>
    )
}



export default function Home ()
{
    return (
        <div className='position-relative'>
            <Image src={MainBackImg} alt="My picture" className={`img-fluid w-100 ${style.dimmed_image}`} />
            <Introduction/>
        </div>
    )
}