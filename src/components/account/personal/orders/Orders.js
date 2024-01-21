import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import OrdersList from "./OrdersList";

const navbar = [
    {
        name: "Active",
        src: "/me/personal/orders/active",
    },
    {
        name: "Cancelled",
        src: "/me/personal/orders/cancelled",
    },
    {
        name: "Completed",
        src: "/me/personal/orders/completed",
    },
]

const Orders = () => {
    const { order } = useParams();
    const [activeOrders, setActiveOrdersToState] = useState([]);
    const [cancelledOrders, setCancelledOrdersToState] = useState([]);
    const [completedOrders, setCompletedOrdersToState] = useState([]);

    const getMarkup = () =>  {
        switch (order) {
            case "active":
                return (<OrdersList list={ activeOrders } />);
            case "cancelled":
                return (<OrdersList list={ cancelledOrders } />);
            case "completed":
                return (<OrdersList list={ completedOrders } />);
            default:
                return (<OrdersList list={ activeOrders } />);
        }
    }

    return (
        <div>
            <header>
                { navbar.map(item => (
                    <NavLink to={ item.src }>{ item.name }</NavLink>
                )) }
            </header>
            { getMarkup() }
        </div>
    );
}

export default Orders;
