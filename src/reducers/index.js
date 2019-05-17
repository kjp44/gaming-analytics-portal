import { combineReducers } from 'redux';

const DEFAULT_STATE = {
    dashboardProducts: []
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
            if(state.dashboardProducts.find(product => {
                return (product.productId === action.payload.productId && product.subTypeName === action.payload.subTypeName)
            }) === undefined){
                state.dashboardProducts.push(action.payload);
                return getNewState(state);
            } else{
                console.log(state.dashboardProducts);
                return state;
            };
        case 'REMOVE_PRODUCT_FROM_DASHBOARD':
            let productIndex = state.dashboardProducts.findIndex( product => {
                return (product.productId === action.payload.productId && product.subTypeName === action.payload.subTypeName);
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
