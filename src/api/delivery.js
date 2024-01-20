import axios from "./index";

export const getUserDelivery = () => {
    return new Promise((resolve, reject) => {
        axios.get("/delivery")
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>  {
                console.log("getUserDelivery err", err);
                reject(err);
            });
    });
}

export const updateUserDelivery = (data) =>  {
    return new Promise((resolve, reject) => {
        axios.post("/delivery", data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("updateUserDelivery err", err);
                reject(err);
            });
    });
}
