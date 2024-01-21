
const OrderItem = ({ item }) => {
    if (item) {
        return (
            <div></div>
        );
    }
    return (
        <div className="text-2xl font-bold">Something went wrong!</div>
    );
}

export default OrderItem;
