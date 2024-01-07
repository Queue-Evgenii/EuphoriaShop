import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import Search from "./search/Search";

import logoIcon from "./../../images/Logo.png";
import heartIcon from "./../../images/icons/heart.svg"
import userIcon from "./../../images/icons/user.svg"
import cartIcon from "./../../images/icons/cart.svg"

const actions = [
    { id: 0, url: "#", src: heartIcon },
    { id: 1, url: "#", src: userIcon },
    { id: 2, url: "#", src: cartIcon },
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
                            <a key={ item.id } href={ item.url } className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                                <img src={ item.src } alt="" className="w-7 h-7" />
                            </a>
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
