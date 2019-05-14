import { combineReducers } from 'redux';
import axios from "axios/index";
import React from "react";

const BEARER_TOKEN = '8A-h4gVCSzG0Y1-SQtOrTG-F3_pP2YCDo2xgdOHOT-w3SaVuUJwPytVPDHEyzE8MdE_M2PuLMUo5lzdMuADz97_V3zYYwne0i2UaGAfTA8iLZsRh_KTrc9ecBtcWpfxsqnbHt1G4ug-d_4Ucznj-5VIQQRedsAcmTDgadE3xVe7gH_adyB3lkQPf41o6AO5kK8qLlJhVgqDKXfH-9ollpvD6Oucv69_XdXZ5jVSDUGwUYliCgEQDObNapDJXRfgDU7pJoVY4zhrKF0MQx-68WTGb26VcCbhRdsQqQ5s3MRxFu3PsQkH5cX1ZqPaDxS_uzL9Xaw';

const DEFAULT_STATE = {
    categories: [
        {
            "categoryId": 2,
            "name": "YuGiOh",
            "modifiedOn": "2019-03-04T21:54:42.943",
            "displayName": "YuGiOh",
            "seoCategoryName": "YuGiOh",
            "sealedLabel": "Sealed Products",
            "nonSealedLabel": "Single Cards",
            "conditionGuideUrl": "https://store.tcgplayer.com/help/yugiohconditions",
            "isScannable": true,
            "popularity": 1058057
        },
        {
            "categoryId": 3,
            "name": "Pokemon",
            "modifiedOn": "2019-03-04T16:37:09.093",
            "displayName": "Pokemon",
            "seoCategoryName": "Pokemon",
            "sealedLabel": "Sealed Products",
            "nonSealedLabel": "Single Cards",
            "conditionGuideUrl": "https://store.tcgplayer.com/help/cardconditionguide",
            "isScannable": true,
            "popularity": 576635
        },
        {
            "categoryId": 4,
            "name": "Axis & Allies",
            "modifiedOn": "2017-03-01T11:03:09.737",
            "displayName": "Axis & Allies",
            "seoCategoryName": "Axis & Allies",
            "sealedLabel": "Sealed Products",
            "nonSealedLabel": "Miniatures",
            "conditionGuideUrl": "https://store.tcgplayer.com/",
            "isScannable": false,
            "popularity": 0
        }
    ]
};

const TCGPlayer = axios.create({
    baseURL: 'http://api.tcgplayer.com/v1.27.0',
    headers: {
        Authorization: `bearer ${ BEARER_TOKEN }`
    },
    params: {
        limit: 58
    }
});

const getCategories = async () => {
    const response = await TCGPlayer.get('/catalog/categories' );
    this.setState({ data: response.data.results });
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
