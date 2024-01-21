import {Link} from "react-router-dom";
import {updateWishlist} from "../../../api/wishlist";
import store from "../../../store";
import {setWishlistToStore} from "../../../store/actions/products";

const ProductItem = ({ item, wishlist }) => {

    const addToFavorite = (id) =>  {

        updateWishlist(id)
            .then(res => {
                store.dispatch(setWishlistToStore(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Link to={ `/product/${item.productId}` } className="rounded-lg p-3 transition hover:bg-gray-100 cursor-pointer">
            <div className="rounded-lg overflow-hidden mb-4 relative">
                <img src={ item.preview } alt="" className="h-full w-full object-cover object-center" />
                <button className="absolute top-5 right-4 rounded-full overflow-hidden" onClick={ (e) => {e.preventDefault(); addToFavorite(item.productId)} }>
                    <svg className="hover:fill-green-300" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                        {
                            wishlist !== null && wishlist.find(el => el.productId === item.productId)
                                ? <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#28A642" fill="#28A642" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                                : <path fillRule="evenodd" clipRule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" strokeWidth="1.26066" strokeLinecap="round" strokeLinejoin="round" />
                        }
                    </svg>
                </button>
            </div>
            <div className="flex item-center justify-between gap-x-4">
                <div style={{ width: "60%" }}>
                    <h5 className="text-lg font-bold truncate">{item.name}</h5>
                    <span className="text-sm">{item.brand}</span>
                </div>
                <div className="text-lg font-bold py-2 px-4 rounded-lg h-min" style={{ background: "#F6F6F6" }}>{ "$" + item.price }</div>
            </div>
        </Link>
    );
};

export default ProductItem;
