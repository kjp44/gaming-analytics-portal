import { combineReducers } from 'redux';

const DEFAULT_STATE = {
    dashboardProducts: [
        {
            productId: 1,
            name: 'Jace, Wielder of Mysteries',
            subTypeName: 'Foil',
            lowPrice: 7,
            midPrice: 8,
            highPrice: 9,
            imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg'
        },
        {
            productId: 2,
            name: 'Jace, Wielder of Mysteries',
            subTypeName: 'Foil',
            lowPrice: 1,
            midPrice: 2,
            highPrice: 3,
            imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg'
        },
        {
            productId: 3,
            name: 'Jace, Wielder of Mysteries',
            subTypeName: 'Foil',
            lowPrice: 10,
            midPrice: 11,
            highPrice: 12,
            imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg'
        },
        {
            productId: 4,
            name: 'Jace, Wielder of Mysteries',
            subTypeName: 'Foil',
            lowPrice: 4,
            midPrice: 5,
            highPrice: 6,
            imageUrl: 'https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/187141_200w.jpg'
        }
    ]
};

const getNewState = (state) => {
    let newState = {
        dashboardProducts: [...state.dashboardProducts]
    };
    return newState;
}

const productReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_DASHBOARD':
            let product = action.payload;
            console.log(product.productId)
            state.dashboardProducts(product);
            return getNewState(state);
        case 'REMOVE_PRODUCT_FROM_DASHBOARD':
            console.log(action.payload);
            let productIndex = state.dashboardProducts.findIndex( product => {
                return product.productId === action.payload;
            });
            state.dashboardProducts.splice(productIndex, 1);
            return getNewState(state);
        default:
            return state;
    }
};

export default combineReducers({
    dashboardProducts: productReducer
});
