'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Resume.module.css'


function ResumeSumary ()
{
    return (
        <div className='f_famil_raleway '>
            <div className={`${style.circle}`}></div>
            {/* <h3 className='fw_26_px fw-bold'>Summary</h3> */}
            <div className={`${style.resume_section}`}>
                <h4 className={`fw_18_px ${style.sub_title_styling}`}>BRANDON JOHNSON</h4>
                <p className={`fw_16_px f_famil_roboto f_style_italic `}>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
            </div>
        </div>
    )
}

function Resume ()
{
    return (
        <div className='container'>
            <ResumeSumary/>
        </div>
    )
}

export default Resume;