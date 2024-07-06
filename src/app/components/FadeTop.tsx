import { ReactNode, RefObject } from "react";
import useInViewOnce from "../CostumHooks/UseInViewOnce";
import style from '../styles/FadeTop.module.css'


interface FadeTopProps {
    children: ReactNode
    reference : RefObject<HTMLDivElement> | undefined;
}

function FadeTop ({children, reference}:FadeTopProps){
    const isInView = useInViewOnce(reference);
    
    return(
        <div ref={reference} className={` ${style.fade_top} ${isInView ? ` ${style.cssanimation} ${style.fadeInBottom}`: ''}`}>
            {children}
        </div>
    )
}

export default FadeTop;