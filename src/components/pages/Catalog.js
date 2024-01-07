import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import store from "../../store";
import { getCategories } from "../../api/categories";
//import { getProducts } from "../../api/products";
import { setMenCategoriesToStore, setWomenCategoriesToStore } from "../../store/actions/categories";

import AsideFilter from "../catalog/filters/AsideFilter";
import ProductsList from "../general/products/ProductsList";
import {getProducts} from "../../api/products";

const Catalog = () => {
    const { gender, id } = useParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const getFilteredProducts = () => {
        getProducts("")
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
    }
    const getAndSetCategories = useCallback((gender, setCategoriesFunc) => {
        if (store.getState()[`${gender}Categories`] !== null) {

            const newArray = store.getState()[`${gender}Categories`].map((item, index) => ({
                ...item,
                id: index,
                current: item.categoryId === id,
            }));
            setCategories(newArray);
            return;
        }

        getCategories(gender)
            .then(res => {
                const newArray = res.data.map((item, index) => ({
                    ...item,
                    id: index,
                    current: item.categoryId === +id,
                }));
                setCategories(newArray);
                store.dispatch(setCategoriesFunc(res.data));
            });
    }, [id]);

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
        getFilteredProducts();
    }, [changeCategoriesList, gender]);


    const handleCategoriesEmit = (data) => {
        console.log("AsideFilter", "handleCategoriesEmit", data);
        getFilteredProducts();
    }

    return (
        <main className="max-w-screen-xl m-auto flex flex-col gap-y-16 lg:gap-y-24">
            <div className="flex gap-x-12 _container">
                <aside className="flex-[0_0_20%]">
                    <AsideFilter
                        params={{ gender }}
                        categories={categories}
                        categoriesEmitEvent={ handleCategoriesEmit }
                    />
                </aside>
                <div className="flex-1">
                    <div className="py-12">asd</div>
                    <ProductsList items={ products } gridStyle="max-[678px]:grid-cols-1 min-[679px]:grid-cols-2 lg:grid-cols-3"/>
                </div>
            </div>
            <div></div>
        </main>
    );
};

export default Catalog;
