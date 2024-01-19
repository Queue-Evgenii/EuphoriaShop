import axios from "./index";

export const getCategories = (gender) => {
  return new Promise((resolve) => {
      axios.get(`/categories?gender=${gender}`)
          .then(res => {
              resolve(res.data);
          })
          .catch(err => {
              console.log("err getCategories", err);
          })
  })
};
