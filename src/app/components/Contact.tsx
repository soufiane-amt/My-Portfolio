import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Contact.module.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';



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
        <div className='d-flex '>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-envelope `}></i>
            </div>
            <div className='ml-5'>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Email Us</h3>
                <p className='fw_14_px f_famil_roboto'>amajatsoufiane@gmail.com</p>
            </div>
        </div>
    )
}

function LinkedInContactItem ()
{
    return (
        <div className='d-flex'>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-linkedin `}></i>
            </div>
            <div className='ml-5'>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Follow Us</h3>
                <p className='fw_14_px f_famil_roboto'>LinkedIn profile</p>
            </div>
        </div>
    )
}
function GithubContactItem ()
{
    return (
        <div className='d-flex '>
            <div className={`${style.phone_icon} d-flex justify-content-center align-items-center `}>
                <i className={`bi bi-github `}></i>
            </div>
            <div className='ml-5'>
                <h3 className='fw_18_px f_famil_raleway fw-bold'>Latest work</h3>
                <p className='fw_14_px f_famil_roboto'>Github profile</p>
            </div>
        </div>
    )
}

function Contact ()
{
    return (
        <div className={`container `}>
            <div className={`d-flex justify-content-center mb-3`}>
                <h2 className={`f_famil_raleway text-center section_title`}>Contact</h2>
            </div>
            <div className={`d-flex justify-content-around align-items-center ${style.contacts_board} py-4`}>
                {/* <PhoneContactItem/> */}
                <EmailContactItem/>
                <LinkedInContactItem/>
                <GithubContactItem/>
            </div>
        </div>
    )
}

export default Contact;