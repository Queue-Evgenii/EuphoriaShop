import Button from "../../../general/form/Button";
import {updateWishlist} from "../../../../api/wishlist";
import store from "../../../../store";
import {setWishlistToStore} from "../../../../store/actions/products";

const WishlistItem = ({ item }) => {

    const removeFromFavorite = (id) =>  {

        updateWishlist(id)
            .then(res => {
                store.dispatch(setWishlistToStore(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="flex items-center gap-x-8 py-4 border-b border-gray-300 last:border-0">
            <button className="flex-[0_0_24px]" onClick={ (e) => { e.preventDefault(); removeFromFavorite(item.productId) } }>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 4L4 18M18 18L4 4.00001" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
            { item.preview && (
                <div className="flex-[0_0_110px]">
                    <img src={ item.preview } alt="" className="w-24 object-cover" />
                </div>
            ) }
            <div className="flex-1 flex items-center gap-x-4 justify-between">
                <div className="flex-1">
                    <h4 className="font-bold">{ item.name }</h4>
                    <h6>
                        <span className="font-bold">Brand: </span>
                        <span className="font-medium text-gray-500">{ item.brand }</span>
                    </h6>
                </div>
                <div>
                    <span className="font-bold text-gray-500">{ `$${item.price}` }</span>
                </div>
                <div className="flex-[0_0_150px]">
                    <Button>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WishlistItem;
