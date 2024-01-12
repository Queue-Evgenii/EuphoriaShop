import {useCallback, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import store from "../../store";
import { getCategories } from "../../api/categories";
import { getProducts } from "../../api/products";
import {setMenCategoriesToStore, setWomenCategoriesToStore} from "../../store/actions/categories";

import AsideFilter from "../catalog/filters/AsideFilter";
import ProductsList from "../general/products/ProductsList";

const Catalog = () => {
    const { gender, id } = useParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [styles, setStyles] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);


    const getFilteredProducts = useCallback(() => {
        const filters = getFilter();

        getProducts(filters.join("&"))
            .then(res => {
                setProducts(res.data);
            });
    }, [categories, styles, colors, sizes, min, max]);
    const getFilter = () => {
        const filters = [ `gender=${gender}` ];
        categories.forEach(item => {
            if  (item.current) {
                filters.push(`category_ids[]=${item.categoryId}`);
            }
        });
        styles.forEach(item => {
            if  (item.current) {
                filters.push(`styles[]='${item.name}'`);
            }
        });
        colors.forEach(item => {
            if (item.current) {
                filters.push(`colors[]='${encodeURIComponent(item.color)}'`);
                console.log(filters)
            }
        });
        sizes.forEach(item => {
            if (item.current) {
                filters.push(`sizes[]='${item.name}'`);
            }
        });
        filters.push(`min=${min}&max=${max}`);
        return filters;
    }

    const getProductsMeta = useCallback(() => {
        getProducts(`gender=${gender}&meta`)
            .then(res => {
                setArrayToState(res.data.styles, setStyles);
                setArrayToState(res.data.sizes, setSizes);
                setColorsToState(res.data.colors);
                setMin(res.data.min);
                setMax(res.data.max);
            });
    }, [gender]);

    const setArrayToState = (array, action) => {
        const newArray = array.map((item, index) => ({
            name: item.name,
            id: index,
            current: false,
        }));
        action(newArray);
    }
    const setColorsToState = (array) => {
        const newStyles = array.map((item, index) => ({
            name: item.name,
            color: item.color,
            id: index,
            current: false,
        }));
        setColors(newStyles);
    }

    const setCategoriesToState = useCallback((array, setCategoriesFunc) => {
        const newArray = array.map((item, index) => ({
            ...item,
            id: index,
            current: item.categoryId === +id,
        }));
        setCategories(newArray);
        store.dispatch(setCategoriesFunc(newArray));
    }, [id])

    const getAndSetCategories = useCallback((gender, setCategoriesFunc) => {
        if (store.getState()[`${gender}Categories`] !== null) {
            setCategoriesToState(store.getState()[`${gender}Categories`], setCategoriesFunc);
            return;
        }

        getCategories(gender)
            .then(res => {
                setCategoriesToState(res.data, setCategoriesFunc);
            });
    }, [setCategoriesToState]);

    const changeCategoriesList = useCallback(() =>  {
        switch (gender) {
            case "men":
                getAndSetCategories("men", setMenCategoriesToStore);
                break;
            case "women":
                getAndSetCategories("women", setWomenCategoriesToStore);
                break;
            default:
                return;
        }
    }, [getAndSetCategories, gender]);

    useEffect(() => {
        changeCategoriesList();
        getProductsMeta();
    }, [gender, changeCategoriesList, getProductsMeta]);

    useEffect(() => {
        getFilteredProducts();
    }, [categories, getFilteredProducts]);


    const handleCategoriesEmit = (data) => {
        if (gender === "men") {
            store.dispatch(setMenCategoriesToStore(data));
            setCategories(store.getState().menCategories);
            return;
        }
        if (gender === "women") {
            store.dispatch(setWomenCategoriesToStore(data));
            setCategories(store.getState().womenCategories);
            return;
        }
    }
    const handleStylesEmit = (data) => {
        setStyles(data);
    }
    const handleColorsEmit = (data) => {
        setColors(data);
    }
    const handleSizesEmit = (data) => {
        setSizes(data);
    }
    const handlePriceEmit = (data) => {
        setMin(data.min);
        setMax(data.max);
    }

    return (
        <main className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
            <div className="flex flex-col gap-x-12 _container md:flex-row">
                <aside className="flex-[0_0_20%]">
                    <AsideFilter
                        params={{ gender }}
                        categories={ categories }
                        styles={ styles }
                        colors={ colors }
                        sizes={ sizes }
                        min={ min }
                        max={ max }
                        categoriesEmitEvent={ handleCategoriesEmit }
                        stylesEmitEvent={ handleStylesEmit }
                        colorsEmitEvent={ handleColorsEmit }
                        sizesEmitEvent={ handleSizesEmit }
                        priceEmitEvent={ handlePriceEmit }
                    />
                </aside>
                <div className="flex-1">
                    <div className="py-8 pl-4 text-3xl font-bold">{ gender.toLocaleUpperCase() + "`s Clothing" }</div>
                    { products && products.length > 0 ? (<ProductsList items={ products } gridStyle="min-[500px]:grid-cols-2 lg:grid-cols-3"/>) : (<div>Nothing found!</div>)}

                </div>
            </div>
            <div className="_container flex flex-col gap-y-6 text-gray-500">
                <h2 className="_title mb-4">Clothing for Women Online in India</h2>
                <div className="pl-8 flex flex-col gap-y-6">
                    <h3 className="font-bold text-xl">Reexplore Women's Clothing Collection Online at Euphoria</h3>
                    <p className="text-xl">Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, <Link to="/" className="font-bold">Euphoria</Link> has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.</p>
                    <p className="text-xl">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. </p>
                    <h3 className="font-bold text-xl">One-Stop Destination to Shop Every Clothing for Women: Euphoria</h3>
                    <p className="text-xl">Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, <Link to="/" className="font-bold">Euphoria</Link> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
                    <p className="text-xl">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, </p>
                    <a href="/" className="font-bold text-xl">See More</a>
                </div>
            </div>
            <div></div>
        </main>
    );
};

export default Catalog;
