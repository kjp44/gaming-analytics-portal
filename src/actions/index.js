export const addProductToDashboard = (product, type) => {
    return {
        type: 'ADD_PRODUCT_TO_DASHBOARD',
        payload: product
    }
};

export const removeProductFromDashboard = (productId, type) => {
    return {
        type: 'REMOVE_PRODUCT_FROM_DASHBOARD',
        payload: productId
    }
};