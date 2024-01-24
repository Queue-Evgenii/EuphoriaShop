import axios from "./index";

export const setOrders = (data) => {
    return new Promise((resolve, reject) => {
        axios.post("/orders", data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("setOrders err", err);
                reject(err);
            })
    })
};

export const getOrders = () => {
    return new Promise((resolve, reject) => {
        axios.get("/orders")
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("getOrders err", err);
                reject(err);
            })
    })
};
