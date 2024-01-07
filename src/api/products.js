import axios from "./index";

export const getProducts = (params) => {
    return new Promise((resolve, reject) => {
        axios.get(`/products?${params}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("err getProducts", err);
                reject(err);
            })
    })
};
