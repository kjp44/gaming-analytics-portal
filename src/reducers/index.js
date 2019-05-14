import { combineReducers } from 'redux';
import React from "react";

const DEFAULT_STATE = {
    categoryId: 0
};

const categoryReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'CHOOSE_CATEGORY':
            break;
        default:
            return state;
    }
};

export default combineReducers({
    categories: categoryReducer
});
