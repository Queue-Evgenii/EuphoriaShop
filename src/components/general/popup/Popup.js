import "./Popup.css";
import {useEffect, useState} from "react";

const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBodyStyles = (value) => {
        document.body.style.height = (value ? "100vh" : "100%");
        document.body.style.overflow = (value ? "hidden" : "visible");
    }

    const closePopup = () => {
        setIsOpen(false);
        props.onPopupClose();
    }

    useEffect(() => {
        toggleBodyStyles(props.isActive);
        setIsOpen(props.isActive)
    }, [props.isActive]);

    return (
        <div className={ `popup cursor-pointer flex items-center justify-center ${isOpen ? "_active" : ""}` } onClick={ closePopup }>
            <div className="popup__container _container  cursor-default" onClick={ (e) => e.stopPropagation() }>
                { props.title && props.title.length > 0 && (
                    <header className="popup__header flex gap-x-8 items-center justify-between py-8">
                        <h2 className="_title">{ props.title }</h2>
                        <button className="w-8 h-8" onClick={ closePopup }>
                            <svg className="w-full h-full" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 4L4 18M18 18L4 4.00001" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <span></span>
                    </header>
                ) }
                { props.children && (
                    <div className="popup__body py-4">
                        { props.children }
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Popup;
