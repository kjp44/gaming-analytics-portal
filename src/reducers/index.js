import { combineReducers } from 'redux';

const DEFAULT_STATE = {
    dashboardProducts: [{name: 'Jace, Wielder of Mysteries', imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg', subTypeName: 'Foil', lowPrice: 7.5, midPrice: 9.96, highPrice: 16.99},
        {name: 'Jace, Wielder of Mysteries', imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg', subTypeName: 'Foil', lowPrice: 7.5, midPrice: 9.96, highPrice: 16.99}]

};

const productReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_DASHBOARD':
            break;
        case 'REMOVE_PRODUCT_FROM_DASHBOARD':
            break;
        default:
            return state;
    }
};

export default combineReducers({
    dashboardProducts: productReducer
});
