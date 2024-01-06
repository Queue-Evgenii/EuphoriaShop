import { defaultState } from "./state";

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            state = {...state, categories: action.payload};
            return state;
        default:
            return state;
    }
};
