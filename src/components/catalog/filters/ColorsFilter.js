import {useEffect, useState} from "react";

const ColorsFilter = ({ items, emitEvent }) => {
    const [array, setArray] = useState(null);

    const emitData = (item) => {
        array.forEach(el => {
            if (el.id === item.id) el.current = !el.current;
        })

        emitEvent(array);
    };

    useEffect(() => {
        if (!items) return;
        setArray(JSON.parse(JSON.stringify(items)))
    }, [items])

    return (
        <ul className="grid grid-cols-4 gap-4 py-6">
            {array != null && array.map(item => (
                <li
                    key={item.id}
                    onClick={() => emitData(item)}
                    className={`cursor-pointer flex flex-col gap-y-1 ${ item.current ? "font-bold" : "font-base" }`}
                >
                    <span className="block w-9 h-9 rounded-lg" style={{backgroundColor: item.color,}}></span>
                    <h5 className="text-black text-sm">{item.name}</h5>
                </li>
            ))}
        </ul>
    );
}

export default ColorsFilter;
