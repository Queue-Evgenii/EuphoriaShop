import React, { useState, useEffect } from "react";
import {Link, NavLink} from "react-router-dom";

import Navigation from "./navigation/Navigation";
import Search from "./search/Search";

import logoIcon from "./../../images/Logo.png";

const actions = [
    {
        id: 0,
        url: "/me/personal/wishlist",
        disabledIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        activeIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: 1,
        url: "/me/personal/info",
        disabledIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99967 11.6667C12.3009 11.6667 14.1663 9.8012 14.1663 7.50001C14.1663 5.19882 12.3009 3.33334 9.99967 3.33334C7.69849 3.33334 5.83301 5.19882 5.83301 7.50001C5.83301 9.8012 7.69849 11.6667 9.99967 11.6667ZM9.99967 11.6667C6.31778 11.6667 3.33301 13.9053 3.33301 16.6667M9.99967 11.6667C13.6816 11.6667 16.6663 13.9053 16.6663 16.6667" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        activeIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99967 11.6667C12.3009 11.6667 14.1663 9.8012 14.1663 7.50001C14.1663 5.19882 12.3009 3.33334 9.99967 3.33334C7.69849 3.33334 5.83301 5.19882 5.83301 7.50001C5.83301 9.8012 7.69849 11.6667 9.99967 11.6667ZM9.99967 11.6667C6.31778 11.6667 3.33301 13.9053 3.33301 16.6667M9.99967 11.6667C13.6816 11.6667 16.6663 13.9053 16.6663 16.6667" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        id: 2,
        url: "/cart",
        disabledIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="#807D7E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
        activeIcon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        ),
    },
];

const navigation = [
    { id: 0, name: "Shop", url: "/", current: true },
    { id: 1, name: "Men", url: "/catalog/men/", current: false },
    { id: 2, name: "Women", url: "/catalog/women/", current: false },
];

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    const toggleBurgerMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="relative">
            <div className="_container bg-white relative z-20">
                <div className="flex space-x-4 items-center justify-between gap-2 py-4">
                    <Link to="/" className="min-w-24 max-w-24">
                        <img src={ logoIcon } alt="" />
                    </Link>
                    {windowWidth > 1024 && (
                        <Navigation items={navigation} />
                    )}
                    {windowWidth > 768 && (
                        <Search />
                    )}
                    <div className="flex space-x-3 items-center shrink-0">
                        {actions.map((item) => (
                            <NavLink
                                key={ item.id }
                                to={ item.url }
                                className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition"
                                style={({ isActive }) => isActive ? { backgroundColor: "#8A33FD",} : {}}
                            >
                                {({isActive}) => isActive ? (item.activeIcon) : (item.disabledIcon)}
                            </NavLink>
                        ))}
                        {windowWidth <= 1024 && (
                            <button onClick={ toggleBurgerMenu } className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                                {isOpen ? (
                                    <svg
                                        className="h-7 w-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            { windowWidth <= 1024 && (
                <div className={`_container absolute z-10 right-0 left-0 bg-gray-100 ${ isOpen ? '' : '-translate-y-full' } transition`}>
                    <div className="_burger-menu flex flex-col gap-y-4 py-4">
                        { windowWidth <= 768 && (
                            <Search />
                        )}
                        <Navigation items={ navigation } />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
