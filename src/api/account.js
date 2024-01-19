import axios from "./index";

export const registration = (data) => {
    return new Promise((resolve) => {
        axios.post("/registration", data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err =>  {
                console.log("registration Err", err);
            })
    })
}
export const authorization = (data) => {
    return new Promise((resolve) => {
        axios.post("/authorization", data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err =>  {
                console.log("authorization Err", err);
            });
    })
}

export const getMe = () => {
    return new Promise((resolve, reject) => {
        axios.get("/me")
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>  {
                reject(err);
            });
    })
}

export const updateMe = (data) => {
    return new Promise((resolve) => {
        axios.post("/me", data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>  {
                console.log("updateMe err", err);
            });
    })
}
