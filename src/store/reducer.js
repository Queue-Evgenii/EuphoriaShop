import { defaultState } from "./state";

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            state = {...state, categories: action.payload};
            return state;
        case "SET_WOMEN_CATEGORIES":
            state = {...state, womenCategories: action.payload};
            return state;
        case "SET_MEN_CATEGORIES":
            state = {...state, menCategories: action.payload};
            return state;
        case "SET_ME":
            state = {...state, me: action.payload}
            return state;
        case "SET_WISHLIST":
            state = {...state, wishlist: action.payload}
            return state;
        case "SET_CART":
            state = {...state, cart: action.payload}
            return state;
        default:
            return state;
    }
};
