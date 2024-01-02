const navigation = [
    { id: 0, name: "Shop", url: "#", current: true},
    { id: 1, name: "Men", url: "#", current: false},
    { id: 2, name: "Women", url: "#", current: false},
    { id: 3, name: "Combos", url: "#", current: false},
    { id: 4, name: "Joggers", url: "#", current: false},
];

function Navigation() {
    return (
        <nav className="flex gap-4 items-center _nav">
            {navigation.map((item) => (
                <a
                    key={item.id}
                    href={item.url}
                >
                    {item.name}
                </a>
            ))}
        </nav>
    );
}

export default Navigation;
