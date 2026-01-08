import style from "../styles/FooterPage.module.css"
import 'bootstrap-icons/font/bootstrap-icons.min.css';


function FooterPage ()
{
    const handleRedirect = (url:string) => {
        window.open(url, '_blank');
    };
    
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={style.footer_background}>
            <div className={style.footer_content}>
                <p className={style.footer_title}>Let&apos;s connect and build something amazing together</p>
                
                <div className={style.social_container}>
                    <div className={style.contact_ref} onClick={() => handleRedirect('https://twitter.com')}>
                        <i className="bi bi-twitter-x"></i>
                    </div>
                    <div className={style.contact_ref} onClick={() => handleRedirect('https://github.com/soufiane-amt')}>
                        <i className="bi bi-github"></i>
                    </div>
                    <div className={style.contact_ref} onClick={() => handleRedirect('https://www.linkedin.com/in/soufiane-amajat/')}>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <div className={style.contact_ref} onClick={() => handleRedirect('https://medium.com/@amajatsoufiane')}>
                        <i className="bi bi-medium"></i>
                    </div>
                </div>
                
                <div className={style.footer_divider}></div>
                
                <p className={style.footer_credit}>
                    Designed & Built by <span>Soufiane Amajat</span>
                </p>
                <p className={style.footer_year}>© {currentYear} All Rights Reserved</p>
            </div>
        </footer>
    )
}


export default FooterPage;