import {useState} from "react";
import {Link} from "react-router-dom";

import "./Categories.css";

function Categories(props) {
    const [isOpen, setState] = useState(false);
    if (!props.items || props.items.length <= 0) {
        return (
            <div></div>
        );
    }

    return (
        <div className="_container">
            <div className="border-y border-gray-500">
               <button onClick={ () => (setState(!isOpen)) } className="flex gap-x-6 justify-between items-center w-full px-8 md:px-16 py-6">
                   <h2 className="text-2xl font-bold">Popular Categories</h2>
                   <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition ${ isOpen ? "-rotate-180" : ""}`}>
                       <path d="M1.814 1.75049L9.30837 9.14195C9.86133 9.68731 10.7578 9.68731 11.3108 9.14195L18.8052 1.75049" stroke="#F6F6F6" strokeWidth="2.88" strokeLinecap="round"/>
                   </svg>
               </button>
                <ul className={ `footer-dropdown flex flex-col gap-y-3 px-8 md:px-16 transition${isOpen ? " _active" : ""}` }>
                    { props.items.map(item => (
                        <li key={ item.id }>
                            <Link to={ `/catalog/${ item.gender }/${ item.categoryId }` } className="inline-block pl-3 text-xl">{ item.title }</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;
