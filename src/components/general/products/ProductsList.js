import ProductItem from "./ProductItem";

function ProductsList(props) {
    if (props.items && props.items.length !== 0) {
        const condition = props.per && props.per > 0 && props.per < props.items.length,
              items = [...(condition ? props.items.slice(0, props.per) : props.items)];

        return (
            <div className="grid gap-10 max-[520px]:grid-cols-1 max-[768px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                { items.map(item => (
                    <ProductItem key={ item.id } item={ item }/>
                )) }
            </div>
        );
    }
    return (<div></div>);
}

export default ProductsList;
