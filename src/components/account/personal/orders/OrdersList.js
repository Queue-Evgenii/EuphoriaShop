import IsEmptyPage from "../../../general/other/IsEmptyPage";

const OrdersList = ({ list }) => {

    if (list && list.length > 0) {
        return (
            <div>ActiveOrders hello</div>
        );
    }
    return (
        <IsEmptyPage title="Orders is empty" linkTo="/" linkTitle="Continue Shopping" />
    )
}

export default OrdersList;
