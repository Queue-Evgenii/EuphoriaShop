import {useRef, useEffect} from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
    const accordionTitleRef = useRef(null);

    const openAccordion = () => {
        if (!accordionTitleRef.current) return;

        accordionTitleRef.current.classList.toggle("_active");

        const accordion = accordionTitleRef.current.nextElementSibling;
        if (accordion.style.maxHeight) {
            accordion.style.maxHeight = null;
        } else {
            accordion.style.maxHeight = accordion.scrollHeight + "px";
        }
    };

    useEffect(() => {
        const titleElement = accordionTitleRef.current;
        const menuElement = titleElement ? titleElement.nextElementSibling : null;


        if (titleElement) titleElement.classList.remove("_active");
        if (menuElement && menuElement.style.maxHeight) menuElement.style.maxHeight = null;
    }, [props]);

    return (
        <div className="accordion">
            <header
                ref={accordionTitleRef}
                className="accordion__title flex justify-between items-center gap-x-8 cursor-pointer"
                onClick={openAccordion}
            >
                <h4 className="text-2xl font-semibold">{props.title ? props.title : ""}</h4>
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1079 6L7.42391 1.26218C7.07831 0.912608 6.51798 0.912608 6.17239 1.26218L1.4884 6" stroke="#807D7E" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </header>
            <div className="accordion__menu">{ props.children }</div>
        </div>
    );
};

export default Dropdown;
