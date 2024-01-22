import {useEffect, useState} from "react";
import IsEmptyPage from "../general/other/IsEmptyPage";
import CartItem from "../cart/CartItem";
import store from "../../store";
import {updateCart} from "../../api/cart";
import {setCartToStore} from "../../store/actions/products";

const Cart = () => {
    const [cart, setCartToState] = useState([]);

    const update = (item) => {
        updateCart(item)
            .then(res => {
                store.dispatch(setCartToStore(res.data));
            })
    }

    const increment = (item) => {
        item.amount++;
        update(item);
    }
    const decrement = (item) => {
        item.amount--;
        update(item);
    }
    const deleteItem = (item) => {
        item.amount = 0;
        update(item);
    }

    const setCart = () => {
        const arr = store.getState().cart;
        if (arr === null) return;

        setCartToState(arr);
    }

    useEffect(() => {
        setCart();
        store.subscribe(setCart);
    },[]);

    if ((cart && cart.length > 0)) {
        return (
            <div>
                <header style={{ backgroundColor: "rgb(60, 66, 66)" }}>
                    <div className="_container">
                        <ul className="flex gap-x-4 justify-between items-center *:uppercase *:text-center *:flex-[0_0_14%] py-6 text-white">
                            <li className="!flex-1 !text-left">Product Details</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Shipping</li>
                            <li>Subtotal</li>
                            <li>Action</li>
                        </ul>
                    </div>
                </header>
                <div className="_container">
                    <ul className="py-16">
                        { cart && cart.map((item, index) => (
                            <li key={ index } className="py-4 border-b border-gray-400 last:border-0">
                                <CartItem item={ item } increment={ increment } decrement={ decrement } deleteFromCart={ deleteItem } />
                            </li>
                        )) }
                    </ul>
                    <footer></footer>
                </div>
            </div>
        );
    }
    return (
        <div className="_container">
            <IsEmptyPage title="Your cart is empty and sad :(" subtitle="Add something to make it happy!" linkTo="/" linkTitle="Continue Shopping" />
        </div>
    )
}

export default Cart;
