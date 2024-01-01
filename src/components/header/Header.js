import logoIcon from "./../../images/Logo.png";
import heartIcon from "./../../images/icons/heart.svg"
import userIcon from "./../../images/icons/user.svg"
import cartIcon from "./../../images/icons/cart.svg"
import {useEffect, useState} from "react";

const navigation = [
    { id: 0, name: "Shop", url: "#", current: true},
    { id: 1, name: "Men", url: "#", current: false},
    { id: 2, name: "Women", url: "#", current: false},
    { id: 3, name: "Combos", url: "#", current: false},
    { id: 4, name: "Joggers", url: "#", current: false},
],
actions = [
    { id: 0, url: "#", src: heartIcon },
    { id: 1, url: "#", src: userIcon },
    { id: 2, url: "#", src: cartIcon },
];

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <header>
            <div className="_container flex space-x-4 items-center justify-between gap-2">
                <a href="/" className="min-w-24 max-w-24">
                    <img src={logoIcon} alt="" />
                </a>
                {windowWidth > 1024 && (
                    <nav className="flex space-x-4 items-center">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                )}
                { windowWidth > 768 && (
                    <div className="flex items-center shrink-1">
                        <input
                            type="text"
                            className="text-sm max-w-48 h-11 rounded bg-gray-100 px-4 py-2 outline-none focus:shadow-md transition"
                            placeholder="Search..."
                        />
                    </div>
                )}
                <div className="flex space-x-3 items-center shrink-0">
                    {actions.map((item) => (
                        <a key={item.id} href={item.url} className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                            <img src={item.src} alt="" className="w-7 h-7" />
                        </a>
                    ))}
                    { windowWidth <= 1024 && (
                        <button className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                      d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
