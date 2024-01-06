import ProductItem from "./ProductItem";
import {Component} from "react";

class ProductsList extends Component{
    render() {
        if (  this.props.items && this.props.items.length !== 0) {
            const condition = this.props.per && this.props.per > 0 && this.props.per < this.props.items.length,
                items = [...(condition ? this.props.items.slice(0, this.props.per) : this.props.items)];

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
}

export default ProductsList;
