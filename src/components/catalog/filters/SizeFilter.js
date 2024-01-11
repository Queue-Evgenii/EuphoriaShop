import {useEffect, useState} from "react";

const SizeFilter = ({ items, emitEvent }) => {
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
        <ul className="grid grid-cols-4 gap-4 py-6">
            {array != null && array.map(item => (
                <li
                    key={item.id}
                    onClick={() => emitData(item)}
                    className={`
                        cursor-pointer
                        py-1
                        px-4
                        rounded-lg
                        border
                        flex
                        items-center
                        justify-center
                        ${ item.current ? "font-bold border-gray-600" : "font-base border-gray-300" }
                    `}
                >
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
}

export default SizeFilter;
