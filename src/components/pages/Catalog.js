import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
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


    const getFilteredProducts = useCallback(() => {
        const filters = getFilter();

        getProducts(filters.join("&"))
            .then(res => {
                setProducts(res.data);
            });
    }, [categories, styles, colors, sizes]);
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
        return filters;
    }

    const getProductsMeta = useCallback(() => {
        getProducts(`gender=${gender}&meta`)
            .then(res => {
                setArrayToState(res.data.styles, setStyles);
                setArrayToState(res.data.sizes, setSizes);
                setColorsToState(res.data.colors);
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

    return (
        <main className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
            <div className="flex gap-x-12 _container">
                <aside className="flex-[0_0_20%]">
                    <AsideFilter
                        params={{ gender }}
                        categories={ categories }
                        styles={ styles }
                        colors={ colors }
                        sizes={ sizes }
                        categoriesEmitEvent={ handleCategoriesEmit }
                        stylesEmitEvent={ handleStylesEmit }
                        colorsEmitEvent={ handleColorsEmit }
                        sizesEmitEvent={ handleSizesEmit }
                    />
                </aside>
                <div className="flex-1">
                    <div className="py-12">{ gender + " " + id }</div>
                    <ProductsList items={ products } gridStyle="max-[678px]:grid-cols-1 min-[679px]:grid-cols-2 lg:grid-cols-3"/>
                </div>
            </div>
            <div></div>
        </main>
    );
};

export default Catalog;
