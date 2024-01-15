import {useCallback, useState} from "react";

const ProductMenu = ({ product }) => {
    const [currentMenu, setCurrentMenu] = useState("description");

    const GetMenu = useCallback(() => {
        switch (currentMenu) {
            case "description":
                return (
                    <div>
                        <p>{ product.description }</p>
                        <ul>
                            <li className="grid grid-cols-3"></li>
                        </ul>
                    </div>
                );
            case "comments":
                return (<div></div>);
            case "qna":
                return (<div></div>);
            default:
                return (<div>Something went wrong!</div>);
        }
    }, [currentMenu]);

    const values = [
        {
            value: "description",
            name: "Description"
        },
        {
            value: "comments",
            name: "User comments",
        },
        {
          value: "qna",
          name: "Question & Answer"  ,
        },
    ];

    return (
        <div>
            <header className="flex gap-1 pt-4 pb-8">
                { values.map(item => (
                    <button
                        key={ item.value }
                        onClick={ () => setCurrentMenu(item.value) }
                        className={`
                            flex-[1_1_33.333%]
                            text-left
                            py-4
                            font-medium
                            text-lg
                            border-b-2
                            px-2
                            ${ item.value === currentMenu ? "border-b-gray-400" : "border-b-transparent" }
                        `}
                    >
                        { item.name }
                    </button>
                )) }
            </header>
            { GetMenu() }
        </div>
    );
}


export default ProductMenu;
