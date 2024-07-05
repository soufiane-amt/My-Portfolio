import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Contact.module.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { LegacyRef, RefObject, useEffect } from 'react';
import useInView from '../CostumHooks/UseInView';
import SectionTitle from './SectionTitle';



function PhoneContactItem ()
{
    return (
        <div className='d-flex  '>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-telephone  flex-shrink-0 `}></i>
            </div>
            <div className='ml-5'>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Call Us</h3>
                <p className='fw_14_px f_famil_roboto'>+212689398453</p>
            </div>
        </div>
    )
}
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
                <p className='fw_14_px f_famil_roboto'>LinkedIn profile</p>
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
                <p className='fw_14_px f_famil_roboto'>Github profile</p>
            </div>
        </div>
    )
}

function Messager ()
{
    return (
        <div className={`container ${style.messager} d-flex flex-column justify-content-center py-3 mt-5`}>
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

    useEffect (()=>{
        if (isInView)
                setCurrentPage("contacts")
    }, [isInView])

    return (
        <SectionTitle sectionName='Contacts' reference={reference}>
            <div className={`d-flex flex-column flex-md-row justify-content-between align-items-lg-center  ${style.contacts_board} pt-4 ps-4 ps-ms-0`}>
                    <EmailContactItem/>
                    <LinkedInContactItem/>
                    <GithubContactItem/>
                </div>
            <Messager/>
        </SectionTitle>
    )
}


export default Contact;