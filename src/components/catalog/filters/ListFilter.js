import {useCallback, useEffect, useState} from "react";

const ListFilter = ({ items, emitEvent }) => {
    const [array, setArray] = useState(null);

    const setArrayToState = useCallback(() => {
        if (!items) return;

        setArray(items);
    }, [items]);

    const emitData = (item) => {
        const newArray = [ ...array ];
        newArray.forEach(el => {
            if (el.id === item.id) el.current = !el.current;
        })

        setArray(newArray);
        emitEvent(newArray.filter(el => el.current === true));
    };


    useEffect(() => {
        setArrayToState();
    }, [setArrayToState, items]);

    return (
        <ul className="flex flex-col gap-y-4 py-4">
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
