import ProductItem from "./ProductItem";
import {useEffect, useState} from "react";
import store from "../../../store";

const ProductsList = ({ items, per, gridStyle }) => {
    const [wishlist, setWishlistToState] = useState([]);

    const setWishlist = () => {
        const arr = store.getState().wishlist;
        if (arr === null) return;

        setWishlistToState(arr);
    }

    useEffect(() => {
        setWishlist();
        store.subscribe(setWishlist);
    }, []);

    if (items && items.length !== 0) {
        const condition = per && per > 0 && per < items.length,
            displayedItems = condition ? items.slice(0, per) : items;

        return (
            <div className={`grid gap-10 xl:gap-x-12 ${ gridStyle ? gridStyle : "max-[520px]:grid-cols-1 max-[768px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}`}>
                {displayedItems.map((item, index) => (
                    <ProductItem key={item.productId + index} item={item} wishlist={ wishlist } />
                ))}
            </div>
        );
    }
    return <div></div>;
};

export default ProductsList;
