export const addProductToDashboard = (productId, name, subTypeName, lowPrice, midPrice, highPrice, imageUrl) => {
    return {
        type: 'ADD_PRODUCT_TO_DASHBOARD',
        payload: {
            productId, name, subTypeName, lowPrice, midPrice, highPrice, imageUrl
        }
    };
};

export const removeProductFromDashboard = (productId, subTypeName) => {
    return {
        type: 'REMOVE_PRODUCT_FROM_DASHBOARD',
        payload: {
            productId, subTypeName
        }
    }
};