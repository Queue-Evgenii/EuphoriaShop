import {useEffect, useState} from "react";

const ListFilter = ({ items, emitEvent }) => {
    const [array, setArray] = useState(null);

    const emitData = (item) => {
        array.forEach(el => {
            if (el.id === item.id) el.current = !el.current;
        })

        emitEvent(array);
    };


    useEffect(() => {
        if (!items) return;
        setArray(JSON.parse(JSON.stringify(items)));
    }, [items]);

    return (
        <ul className="flex flex-col gap-y-4 py-8 px-4">
            {array != null && array.map(item => (
                <li
                    key={item.id}
                    onClick={() => emitData(item)}
                    className={`cursor-pointer ${ item.current ? "font-bold" : "font-base" }`}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default ListFilter;
