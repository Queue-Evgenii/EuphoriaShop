import {useEffect, useState} from "react";
import IsEmptyPage from "../IsEmptyPage";
import WishlistItem from "./WishlistItem";
import {getWishlist} from "../../../../api/wishlist";
import store from "../../../../store";

const Wishlist = () => {
    const [wishlist, setWishlistToState] = useState([]);

    const setWishlist = () => {
        const arr = store.getState().wishlist;
        if (arr === null) return;

        setWishlistToState(arr);
    }

    useEffect(() => {
        setWishlist();
        store.subscribe(setWishlist)
        // getWishlist()
        //     .then(res => {
        //         setWishlistToState(res.data);
        //     });
    }, []);

    if (wishlist && wishlist.length !== 0) {
        return (
            <div>
                <h2 className="text-3xl font-semibold mb-4">Wishlist</h2>
                <ul>
                    { wishlist.map(item => (
                        <WishlistItem key={ item.productId } item={ item } />
                    )) }
                </ul>
            </div>
        );
    }
    return (
        <IsEmptyPage
            title="Your wishlist is empty."
            subtitle="You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page."
            linkTo="/"
            linkTitle="Continue Shipping"
        />
    );
}

export default Wishlist;
