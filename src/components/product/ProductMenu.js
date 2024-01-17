import {useCallback, useEffect, useState} from "react";

const ProductMenu = ({ product }) => {
    const [currentMenu, setCurrentMenu] = useState("description");
    const [tableDescription, setTable] = useState([]);

    useEffect(() => {
        const arr = [];

        arr.push({
            name: "Fabric",
            value: product.fabric,
        });
        arr.push({
            name: "Pattern",
            value: product.pattern,
        });
        arr.push({
            name: "Fit",
            value: product.fit,
        });
        arr.push({
            name: "Neck",
            value: product.neck
        });
        arr.push({
            name: "Sleeve",
            value: product.sleeve,
        });
        arr.push({
            name: "Style",
            value: product.style,
        });

        setTable(arr);
    }, [product])

    const GetMenu = useCallback(() => {
        switch (currentMenu) {
            case "description":
                return (
                    <div>
                        <p className="text-xl mb-6">{ product.description }</p>
                        <ul className="grid grid-cols-3 rounded-lg overflow-hidden" style={{ background: "#F6F6F6", }}>
                            { tableDescription.map(item => (
                                <li key={ item.name } className="p-4" style={{ borderBottom: "1px solid #E2E1E2", borderRight: "1px solid #E2E1E2" }}>
                                    <h5 className="text-gray-500">{ item.name }</h5>
                                    <p>{ item.value }</p>
                                </li>
                            )) }
                        </ul>
                    </div>
                );
            case "comments":
                return (
                    <div className="flex flex-col gap-y-5">
                        <header className="flex gap-x-6">
                            <div className="w-8 h-8 rounded-full overflow-hidden mb-3">
                                <img src="" alt="" className="w-full h-full object-contain object-center" />
                            </div>
                            <h2 className="text-xl font-bold">Username 1</h2>
                        </header>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam dolorem error, est facilis hic itaque quod reiciendis rerum vero!</p>
                    </div>
                );
            case "qna":
                return (
                    <div className="flex flex-col gap-y-5">
                        <header className="flex gap-x-6">
                            <div className="w-8 h-8 rounded-full overflow-hidden mb-3">
                                <img src="" alt="" className="w-full h-full object-contain object-center" />
                            </div>
                            <h2 className="text-xl font-bold">Username 1</h2>
                        </header>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus, dolor illo praesentium quibusdam quos?</p>
                        <footer className="pl-12 ">
                            <h2 className="text-xl font-bold">Username 2</h2>
                            <p className="text-xl">Lorem ipsum dolor sit amet.</p>
                        </footer>
                    </div>
                );
            default:
                return (<div>Something went wrong!</div>);
        }
    }, [currentMenu, tableDescription]);

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
            <div style={{  maxHeight: "300px", overflow: "scroll", marginBottom: "100px" }}>
                { GetMenu() }
            </div>
        </div>
    );
}


export default ProductMenu;
