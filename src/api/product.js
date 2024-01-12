import axios from "./index";

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`/product?id=${id}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("err getProduct", err);
                reject(err);
            });
    });
}
