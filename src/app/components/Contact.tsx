import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Contact.module.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { LegacyRef, RefObject, useEffect } from 'react';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';
import FadeTop from './FadeTop';
import useInViewOnce from '../CostumHooks/UseInViewOnce';



function EmailContactItem ()
{
    return (
        <div className='d-flex mb-4  my-md-0 pe-2'>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-envelope `}></i>
            </div>
            <div className={``}>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Email Us</h3>
                <p className='fw_14_px f_famil_roboto'>amajatsoufiane@gmail.com</p>
            </div>
        </div>
    )
}

function LinkedInContactItem ()
{
    return (
        <div className='d-flex mb-4 my-md-0 pe-2'>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-linkedin `}></i>
            </div>
            <div className={``}>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Follow Us</h3>
                <p className='fw_14_px f_famil_roboto'>
                    <a href='https://www.linkedin.com/in/soufiane-amajat/' className={`${style.contact_redirection}`}>
                        LinkedIn profile
                    </a>
                    </p>
            </div>
        </div>
    )
}
function GithubContactItem ()
{
    return (
        <div className='d-flex my-md-0 pe-3'>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-github `}></i>
            </div>
            <div className={``}>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Latest work</h3>
                <p className={`fw_14_px f_famil_roboto `} >
                    <a href='https://github.com/soufiane-amt' className={`${style.contact_redirection}`}>
                        Github profile
                    </a>
                </p>
            </div>
        </div>
    )
}

function Messager ()
{
    return (
        <div className={`container ${style.messager} ${style.fadeInRight} d-flex flex-column justify-content-center py-3 mt-5`}>
            <div className='d-md-flex justify-content-md-between '>
                <div  className='d-flex justify-content-center my-3 mx-3 flex-fill'>
                    <input type='text' placeholder='Full Name' className='form-control border rounded-0' required>
                    </input>
                </div>
                <div className='d-flex justify-content-center my-3 mx-3 flex-fill'>
                    <input type='email' placeholder='Your Email' className='form-control border rounded-0' required>
                    </input>
                </div>
            </div>
            <div className='d-flex justify-content-center my-3 mx-3'>
                <input type='text' placeholder='Subject' className='form-control border rounded-0' required>
                </input>
            </div>
            <div className='d-flex justify-content-center my-3 mx-3'>
                <textarea placeholder='Message' className='form-control border rounded-0' required></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                <button>Send Message</button>
            </div>
        </div>
    )
}

interface contactProps {
    setCurrentPage : React.Dispatch<React.SetStateAction<string>>;
    reference : RefObject<HTMLDivElement> | undefined;
}
const Contact: React.FC<contactProps> = ({ setCurrentPage, reference }) => {
    const  isInView  = useInView(reference);
    const  isInViewOnce  = useInViewOnce(reference);

    useEffect (()=>{
        if (isInView)
                setCurrentPage("contacts")
    }, [isInView])

    return (
            <SectionTitle sectionName='Contacts' reference={reference}>
                {
                    isInViewOnce && (
                        <>
                        <div className={`d-flex flex-column flex-md-row justify-content-between align-items-lg-center  ${style.contacts_board} ${style.fadeInLeft} pt-4 ps-4 ps-ms-0`}>
                                <EmailContactItem/>
                                <LinkedInContactItem/>
                                <GithubContactItem/>
                            </div>
                        <Messager/>
                        </>

                    )
                }
            </SectionTitle>
    )
}


export default Contact;