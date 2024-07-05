import { ReactNode, RefObject } from "react";



interface SectionTitleProps {
    reference : RefObject<HTMLDivElement> | undefined;
    sectionName :string,
    children: ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ reference, sectionName, children }) => {

    return(
        <div ref={reference} className={`container mt-5`}>
        <div className={`d-flex justify-content-center mb-3`}>
            <h2 className={`f_famil_raleway text-center section_title`}>{sectionName}</h2>
            </div>
            {children}
        </div>

    )
}

export default SectionTitle;