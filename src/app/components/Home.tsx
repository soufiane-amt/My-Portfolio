import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '@public/NavBar/logo.png';
import Image from 'next/image';
import  style from '../styles/Home.module.css';
import MainBackImg from '@public/myPic1.jpg';

export default function Home ()
{
    return (
        <div className='bg-primary'>
            <Image src={MainBackImg} alt="My picture" className='img-fluid' />
        </div>
    )
}