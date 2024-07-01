'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Portfolio.module.css';



function Portfolio ()
{
    return (
        <div className={`container ${style.resume}`}>
            <div className='d-flex justify-content-center mb-5'>
                <h2 className={`f_famil_raleway text-center `}>Portfolio</h2>
            </div>

        </div>
    )
}

export default Portfolio;
