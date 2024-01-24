import TextInput from "../general/form/TextInput";
import Address from "../account/personal/Address";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getUserDelivery} from "../../api/delivery";
import RadioList from "../general/form/RadioList";
import Button from "../general/form/Button";
import {setOrders} from "../../api/orders";
import store from "../../store";
import BounceNotification from "../general/notifications/BounceNotification";
import {getCart} from "../../api/cart";
import {setCartToStore} from "../../store/actions/products";

let value1 = "", value2 = "", value3 = "";
const Checkout = () => {
    const routerNavigate = useNavigate();
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [cart, setCartToState] = useState([]);
    const [billingAddress, setBillingAddress] = useState({});
    const [isPaymentCheck, setIsPaymentCheck] = useState(false);
    const [paymentMethodList, setPaymentMethodList] = useState([
        {
            id: "card",
            name: "Credit Card",
            isChecked: true,
            groupName: "payment",
            children: (
                <div className="pt-1 pb-4">
                    <TextInput id="cart" placeholder="Card number" initValue={ value1 } onChange={ e => value1 = e.target.value } />
                    <div className="grid md:grid-cols-2 gap-x-2">
                        <TextInput id="date" placeholder="Expiration date (MM/YY)" initValue={ value2 } onChange={ e => value2 = e.target.value } />
                        <TextInput id="code" placeholder="Security Code" initValue={ value3 } onChange={ e => value3 = e.target.value } />
                    </div>
                </div>
            )
        },
        {
            id: "cash",
            name: "Cash on delivery",
            isChecked: false,
            groupName: "payment",
        },
        {
            id: "paypal",
            name: "Paypal",
            isChecked: false,
            groupName: "payment",
        },
    ]);

    const submitCheckout = () => {
        const data = {
            paymentMethod: paymentMethodList.find(el => el.isChecked).name,
            cart: cart,
        }
        setOrders(data)
            .then(res => {
                console.log(res);
                setIsNotifyOpen(true);
                setTimeout(() => {
                    setIsNotifyOpen(false);
                    routerNavigate("/me/personal/orders");
                }, 700);
                getCart()
                    .then(res => {
                        store.dispatch(setCartToStore(res.data));
                    })
            });
    }

    const handleBillingAddressEmit = (data) => {
        setBillingAddress(data);
        setIsPaymentCheck(true);
    }
    const handlePaymentCheckboxChange = (e) => {
        const arr = [...paymentMethodList];
        for (let i = 0; i < arr.length; ++i) {
            arr[i].isChecked = (arr[i].id === e.target.id);
         }
        setPaymentMethodList(arr);
    }

    useEffect(() => {
        getUserDelivery()
            .then(res => {
                setBillingAddress(res.data);
            })
            .catch(() => {
                routerNavigate("/me/sign-in");
            });

        setCart();
        store.subscribe(setCart);
    }, []);

    const setCart = () => {
        const arr = store.getState().cart;
        if (arr === null) return;

        setCartToState(arr);
    }

    const getSubtotal = () => {
        let result = 0;
        cart.forEach(item => {
            result += (item.price * item.amount);
        })
        return result;
    }
    const getTotalShipping = () => {
        let result = 0;
        cart.forEach(item => {
            result += item.shipping;
        })
        return result;
    }

    return (
        <>
            <div className="_container">
                <div className="py-8">
                    <h2 className="_title mb-4">Check Out</h2>
                    <div className="flex gap-x-8">
                        <div className="flex-1">
                            { !isPaymentCheck ? (
                                <>
                                    <h3 className="text-2xl font-bold mb-2">Billing Details</h3>
                                    <div className="gap-x-8">
                                        <Address data={ billingAddress } emitAddress={ handleBillingAddressEmit } />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-1">Payment Method</h3>
                                    <h6 className="mb-4">All transactions are secure and encrypted.</h6>
                                    <div className="mb-4"  style={{ background: "#F6F6F6", padding: "20px 30px" }}>
                                        <RadioList list={ paymentMethodList } onChange={ handlePaymentCheckboxChange } />
                                    </div>
                                    <div className="max-w-48">
                                        <Button onClick={ submitCheckout }>Submit</Button>
                                    </div>
                                </>
                            ) }
                        </div>
                        <aside className="flex-[0_0_30%] *:font-bold h-fit py-8 px-6" style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05)",  }}>
                            { cart && (
                                <>
                                    <h3 className="text-2xl pb-3 border-b border-gray-300">Order Summary</h3>
                                    <ol>
                                        { cart.map((item, index) => (
                                            <li key={ index } className="flex items-center justify-between py-4 border-b border-gray-300 gap-x-2 *:text-sm ">
                                                <div className="flex items-center justify-between gap-x-2">
                                                    <div className="w-16 flex-[0_0_4rem]">
                                                        <img src={ item.preview } alt=""/>
                                                    </div>
                                                    <div>
                                                        <h5>{ item.name } <span style={{ color: "#807D7E", fontWeight: 500, }}>x { item.amount }</span></h5>
                                                        <h6>Size: <span style={{ color: "#807D7E", fontWeight: 500, }}>{ item.size }</span></h6>
                                                        <h6>Color: <span style={{ color: "#807D7E", fontWeight: 500, }}>{ item.colorName }</span></h6>
                                                    </div>
                                                </div>
                                                <h5 style={{ color: "#807D7E", }}>{ `$${item.price}` }</h5>
                                            </li>
                                        )) }
                                    </ol>
                                    <div className="pt-3 *:flex *:justify-between *:items-center *:gap-x-2 *:text-xl">
                                        <h5><span>Subtotal</span><span>{ `$${ getSubtotal() }` }</span></h5>
                                        <h5 className="border-b border-gray-300 pb-3"><span>Shipping</span><span>{ `$${ getTotalShipping() }` }</span></h5>
                                        <h5 className="pt-3"><span>Total</span><span>{ `$${ getSubtotal() + getTotalShipping() }` }</span></h5>
                                    </div>
                                </>
                            ) }
                        </aside>
                    </div>
                </div>
                <div></div>
            </div>
            <BounceNotification message=" Order has been created!" isOpen={ isNotifyOpen } />
        </>
    )
}

export default Checkout;
