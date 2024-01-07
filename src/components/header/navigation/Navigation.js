import { NavLink } from "react-router-dom";

const Navigation = ({ items }) => {
    return (
        <nav className="flex gap-4 items-center _nav">
            {items && items.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.url}
                    className={(el) => (el.isActive ? 'font-bold' : '')}
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navigation;
