import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import OrdersList from "./OrdersList";
import {getOrders} from "../../../../api/orders";

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

    useEffect(() => {
        getOrders()
            .then(res => {
                setActiveOrdersToState(res.data.filter(item => item.status === "confirmation" | "inprogress"));
                setCancelledOrdersToState(res.data.filter(item => item.status === "cancelled"));
                setCompletedOrdersToState(res.data.filter(item => item.status === "shipped"));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

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
                { navbar.map((item, index) => (
                    <NavLink
                        key={ index }
                        to={ item.src }
                        className="py-3 px-12"
                        style={({ isActive }) => isActive ? { backgroundColor: "#F6F6F6", borderBottom: "2px solid #3C4242",} : {}}
                    >
                        { item.name }
                    </NavLink>
                )) }
            </header>
            { getMarkup() }
        </div>
    );
}

export default Orders;
