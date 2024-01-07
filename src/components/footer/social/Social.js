const Social = ({ items }) => {
    return (
        <div className="_container flex flex-wrap gap-8 justify-between items-center">
            {items && items.length > 0 && items.map((list) => (
                <div key={list.id}>
                    {list.title !== null && <h3 className="text-2xl font-bold mb-4">{list.title}</h3>}
                    <ul className="flex gap-x-4">
                        {list.items && list.items.length > 0 && list.items.map((item) => (
                            <li key={item.id}>
                                <a href={item.url}>
                                    <img src={item.src} alt="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Social;
