import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProduct} from "../../api/product";
import ProductMenu from "../product/ProductMenu";
import store from "../../store";
import Popup from "../general/popup/Popup";


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [popupIsActive, togglePopup] = useState(false);

    const setColorsByCurrentSize = (sizeArray, productEl) => {
        const newColors = [];
        let current = null;

        sizeArray.forEach(item => {
            if (item.current) current = item.size;
        });

        productEl.meta.forEach(item => {
            if (item.size === current) {
                newColors.push({
                    color: item.color,
                    current: false,
                });
            }
        });
        if (newColors.length > 0) newColors[0].current = true;

        setColors(newColors);
    };

    useEffect(() => {
        getProduct(id)
            .then(res => {
                setProduct(res.data);

                const newSizes = [];
                res.data.meta.forEach(item => {
                    const data = {
                        size: item.size,
                        current: false,
                    };
                    if (!newSizes.some(el => el.size === data.size)) {
                        newSizes.push(data);
                    }
                });

                if (newSizes.length > 0) newSizes[0].current = true;

                setSizes(newSizes);
                setColorsByCurrentSize(newSizes, res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const changeCurrentSize = (el) => {
        const newSizes = [...sizes];

        newSizes.forEach(item => {
            item.current = false;
            if (el.size === item.size) item.current = true;
        });

        setSizes(newSizes);
        setColorsByCurrentSize(newSizes, product);
    }
    const changeCurrentColor = (el) => {
        const newColors = [...colors];

        setColors(reSetCurrentInArray(el, newColors));
    }

    const reSetCurrentInArray = (newCurrent, array) => {
        array.forEach(item => {
            item.current = false;
            if (newCurrent.color === item.color) item.current = true;
        });
        return array;
    }

    return (
        <div className="_container">
            { product && (
                <>
                    <div className="flex gap-16">
                        <div className="flex-[1_1_50%]">
                            <img src={ product.preview } alt="" className="w-full h-full" />
                        </div>
                        <div  className="flex-[1_1_50%] flex flex-col gap-y-8">
                            <h1 className="text-4xl font-bold">{ product.name }</h1>
                            <div>rating</div>
                            <div className="flex flex-col gap-y-4">
                                <header className="flex items-center gap-x-5">
                                    <h5 className="font-bold">Select Size</h5>
                                    <a href="/" className="flex items-center gap-x-4 text-gray-500 font-medium">
                                        <span>Size Guide</span>
                                        <svg width="14" height="16" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 7H14M9 1L14.2929 6.29289C14.6834 6.68342 14.6834 7.31658 14.2929 7.70711L9 13" stroke="#807D7E" strokeWidth="1.8" strokeLinecap="round"/>
                                        </svg>
                                    </a>
                                </header>
                                <ul className="flex items-center gap-x-5">
                                    { sizes.map((item, index) => (
                                        <li
                                            key={ index }
                                            className="
                                                px-2
                                                py-1
                                                w-8
                                                text-center
                                                rounded-lg
                                                border-2
                                                border-gray-400
                                                cursor-pointer"
                                            style={ item.current ? { color: "#fff", backgroundColor: "rgb(138, 51, 253)", borderColor: "rgb(138, 51, 253)" } : {} }
                                            onClick={ () => changeCurrentSize(item) }
                                        >
                                            { item.size }
                                        </li>
                                    )) }
                                </ul>
                            </div>
                            <div>
                                <header>
                                    <h5 className="font-bold">Colours Available</h5>
                                </header>
                                <ol className="flex items-center gap-x-3">
                                    { colors.map((item, index) => (
                                        <li
                                            key={ index }
                                            className="
                                                mt-3
                                                p-0.5
                                                rounded-full"
                                            style={ item.current ? { border: "1px solid #000"} : {}}
                                            onClick={ () => changeCurrentColor(item) }
                                        >
                                            <span className="block rounded-full w-5 h-5" style={{ backgroundColor: item.color }}></span>
                                        </li>
                                    )) }
                                </ol>
                            </div>
                            <div className="flex gap-8">
                                <button
                                    className="py-3 px-8 flex items-center gap-x-4 rounded-lg"
                                    style={{ backgroundColor: "#8A33FD", }}
                                    onClick={
                                        store.getState().me !== null
                                            ? () => { console.log("not implemented") }
                                            : () => { togglePopup(true); window.scrollTo(0, 0); } }
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97375 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73592C17.2387 5.68212 16.4425 4.65741 15.355 4.65741H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                    <span className="text-white">Add to cart</span>
                                </button>
                                <div className="py-3 px-10 flex rounded-lg border-2 border-gray-700">
                                    <span className="font-bold">{ "$" + product.price }</span>
                                </div>
                            </div>
                            { product.delivery && (
                                <ul className="border-t-2 border-gray-300 py-10 flex flex-wrap">
                                    { product.delivery.payment && (
                                        <li className="flex-[1_1_50%] flex gap-x-6 items-center font-semibold text-gray-700 p-1">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                                                <path d="M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z" stroke="#3C4242" strokeWidth="1.1" strokeLinecap="round"/>
                                            </svg>
                                            <span>{ product.delivery.payment }</span>
                                        </li>
                                    )}
                                    { product.delivery.shipping && (
                                        <li className="flex-[1_1_50%] flex gap-x-6 items-center font-semibold text-gray-700 p-1">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                                                <path d="M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333" stroke="#3C4242" strokeWidth="1.1"/>
                                            </svg>
                                            <span>{ product.delivery.shipping }</span>
                                        </li>
                                    )}
                                    { product.delivery.refund && (
                                        <li className="flex-[1_1_50%] flex gap-x-6 items-center font-semibold text-gray-700 p-1">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                                                <path d="M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333" stroke="#3C4242" strokeWidth="1.1" strokeLinecap="round"/>
                                            </svg>
                                            <span>{ product.delivery.refund }</span>
                                        </li>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-16 mt-12">
                        <div className="flex-[1_1_50%]">
                            <h2 className="_title">Product Description</h2>
                            <ProductMenu product={ product } />
                        </div>
                        <div className="flex-[1_1_50%]"></div>
                    </div>
                </>
            )}

            <Popup title="Add to cart" isActive={ popupIsActive } onPopupClose={ () => togglePopup(false) }>
                <div className="px-4 py-8 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-semibold mb-2">Not authorized!</h2>
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold">Please authorize for add to cart!</h3>
                        <span className="text-2xl">It takes only a few minutes</span>
                    </div>
                    <Link
                        to="/me"
                        className="py-3 px-8 flex items-center justify-center gap-x-4 rounded-lg max-w-48"
                        style={{ backgroundColor: "#8A33FD", }}
                    >
                        <span className="text-white">Let`s authorize!</span>
                    </Link>
                </div>
            </Popup>
        </div>
    );
}

export default Product;
