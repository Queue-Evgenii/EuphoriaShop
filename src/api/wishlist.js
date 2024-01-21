import axios from "./index";

export const getWishlist = () => {
    return new Promise(resolve => {
        axios.get("/wishlist")
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("getWishlist err", err);
            });
    });
}

export const updateWishlist = (productId) => {
    return new Promise((resolve, reject) => {
        axios.post("/wishlist", productId)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("updateWishlist err", err);
                reject(err);
            });
    });
}
