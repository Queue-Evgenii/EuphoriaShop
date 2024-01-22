import axios from "./index";

export const getCart = () => {
    return new Promise((resolve, reject) => {
        axios.get("/cart")
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("getCart err", err);
            });
    });
}

export const updateCart = (data) => {
    return new Promise((resolve, reject) =>  {
        axios.post("/cart", data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("updateCart err", err);
                reject(err);
            });
    });
}
