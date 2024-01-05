import {Link} from "react-router-dom";

const navigation = [
    { id: 0, name: "Shop", url: "/", current: true},
    { id: 1, name: "Men", url: "/catalog/men/", current: false},
    { id: 2, name: "Women", url: "/catalog/women/", current: false},
    { id: 3, name: "Combos", url: "/catalog/2", current: false},
    { id: 4, name: "Joggers", url: "/catalog/3", current: false},
];

function Navigation() {
    return (
        <nav className="flex gap-4 items-center _nav">
            {navigation.map((item) => (
                <Link
                    key={ item.id }
                    to={ item.url }
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}

export default Navigation;
