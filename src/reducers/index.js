import { combineReducers } from 'redux';

const DEFAULT_STATE = {
    currentCategoryID: 0,
    currentSetID: 0,
    currentProductID: 0,
    dashboardData: []
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
