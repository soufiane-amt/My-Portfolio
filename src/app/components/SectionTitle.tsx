import { ReactNode, RefObject } from "react";
import style from '../styles/SectionTitle.module.css'
import useInView from "../CostumHooks/UseInView";
import useInViewOnce from "../CostumHooks/UseInViewOnce";
import FadeTop from "./FadeTop";


interface SectionTitleProps {
    children: ReactNode
    reference : RefObject<HTMLDivElement> | undefined;
    sectionName :string,
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children , reference, sectionName }) => {

    return(
        <div ref={reference} className={`container ${style.section_title_wrap}`}>
            <FadeTop reference={reference}>
                <div className={`d-flex justify-content-center mb-3`}>
                    <h2 className={`f_famil_raleway text-center section_title `}>{sectionName}</h2>
                </div>
            </FadeTop>
            {children}
        </div>

    )
}

export default SectionTitle;