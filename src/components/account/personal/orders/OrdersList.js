import IsEmptyPage from "../../../general/other/IsEmptyPage";
import Button from "../../../general/form/Button";
import BounceNotification from "../../../general/notifications/BounceNotification";
import React, {useState} from "react";

const OrdersList = ({ list }) => {
    const [isNotifyOpen, setIsNotifyOpen] = useState(false);

    const requestToCancel = (id) => {
        console.log("cancel order not implemented", id);
        setIsNotifyOpen(true);
        setTimeout(() => setIsNotifyOpen(false), 1500);
    }

    if (list && list.length > 0) {
        return (
            <ul className="py-6">
                { list.map(item => (
                    <li key={ item.orderId } className="py-7 border-b border-gray-400 last:border-0">
                        <div className="py-7 px-10 rounded-lg" style={{ backgroundColor: "#F6F6F6", }}>
                            <h3 className="text-xl font-semibold mb-4">Order NO: #{ item.orderId }</h3>
                            <table className="w-full">
                                <tbody className="*:text-sm *:flex *:justify-between *:items-center *:gap-x-4" style={{ color: "#807D7E", }}>
                                <tr className="mb-2">
                                    <td><span className="font-bold">Order Date: </span>{ item.orderDate }</td>
                                    <td ><span className="font-bold">Order Status: </span>{ (() => {
                                        let val = [...item.status];
                                        val[0] = val[0].toUpperCase()
                                        return val.join("");
                                    })() }</td>
                                </tr>
                                <tr className="mb-2">
                                    <td><span className="font-bold">Estimated Delivery Date: </span>{ item.estimatedDate }</td>
                                    <td ><span className="font-bold">Payment Method: </span>{ item.paymentMethod }</td>
                                </tr>
                                <tr>
                                    <td><span className="font-bold">Total: </span>{ `$${item.totalPrice}` }</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <ol className="mt-6 px-1">
                            { item.items && item.items.length > 0 && item.items.map(el => (
                                <li key={ el.productId } className="flex items-center gap-x-4 py-3">
                                    <div className="flex-[0_0_96px] h-24 overflow-hidden flex items-center rounded-lg">
                                        <img src={ el.preview } alt="" color="w-full object-cover"/>
                                    </div>
                                    <div className="text-sm flex-1">
                                        <h4 className="font-bold !text-base">{ el.name }</h4>
                                        <div className="md:grid grid-cols-2" style={{ color: "#807D7E", }}>
                                            <div>
                                                <h5><span className="font-bold">Color: </span>{ el.color }</h5>
                                                <h5><span className="font-bold">Size: </span>{ el.size }</h5>
                                                <h5><span className="font-bold">Qty: </span>{ el.amount }</h5>
                                            </div>
                                            <div>
                                                <h5><span className="font-bold">Price: $</span>{ el.price }</h5>
                                                <h5><span className="font-bold">Shipping: </span>{ el.shipping === 0 ? "FREE" : `$${el.shipping}` }</h5>
                                                <h5><span className="font-bold">Subtotal: $</span>{ el.price * el.amount + el.shipping }</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button onClick={ () => requestToCancel(item.orderId) }>
                                            Cancel my order
                                        </Button>
                                    </div>
                                </li>
                            )) }
                        </ol>
                    </li>
                )) }
                <BounceNotification message="Request has been sent!" isOpen={ isNotifyOpen } />
            </ul>
        );
    }
    return (
        <IsEmptyPage title="Orders is empty" linkTo="/" linkTitle="Continue Shopping" />
    )
}

export default OrdersList;
