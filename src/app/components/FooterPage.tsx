import style from "../styles/FooterPage.module.css"
import 'bootstrap-icons/font/bootstrap-icons.min.css';


function FooterPage ()
{
    const handleRedirect = (url:string) => {
        window.location.href = url;
      };
    
    return (
        <footer className={`${style.footer_background} d-flex flex-column align-items-center justify-content-center text-center`}>
        <div className="text-white">
          <p>Please feel free to join me at:</p>
        </div>
        <div className="mb-2">
          <div className={`${style.contact_ref}`} onClick={() => handleRedirect('https://twitter.com')}>
            <i className="bi bi-twitter-x"></i>
          </div>
          <div className={`${style.contact_ref}`} onClick={() => handleRedirect('https://github.com/soufiane-amt')}>
            <i className="bi bi-github"></i>
          </div>
          <div className={`${style.contact_ref}`} onClick={() => handleRedirect('https://www.linkedin.com/in/soufiane-amajat/')}>
            <i className="bi bi-linkedin"></i>
          </div>
          <div className={`${style.contact_ref}`} onClick={() => handleRedirect('https://medium.com/@amajatsoufiane')}>
            <i className="bi bi-medium"></i>
          </div>
        </div>
        <div>
          <p>Built by <span>Soufiane Amajat</span></p>
        </div>
      </footer>
      )
}


export default FooterPage;