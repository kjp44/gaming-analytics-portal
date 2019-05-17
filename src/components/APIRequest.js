import axios from "axios";

const BEARER_TOKEN = '8A-h4gVCSzG0Y1-SQtOrTG-F3_pP2YCDo2xgdOHOT-w3SaVuUJwPytVPDHEyzE8MdE_M2PuLMUo5lzdMuADz97_V3zYYwne0i2UaGAfTA8iLZsRh_KTrc9ecBtcWpfxsqnbHt1G4ug-d_4Ucznj-5VIQQRedsAcmTDgadE3xVe7gH_adyB3lkQPf41o6AO5kK8qLlJhVgqDKXfH-9ollpvD6Oucv69_XdXZ5jVSDUGwUYliCgEQDObNapDJXRfgDU7pJoVY4zhrKF0MQx-68WTGb26VcCbhRdsQqQ5s3MRxFu3PsQkH5cX1ZqPaDxS_uzL9Xaw';

const TCGPlayer = axios.create({
    baseURL: 'http://api.tcgplayer.com/v1.27.0',
    headers: {
        Authorization: `bearer ${ BEARER_TOKEN }`
    }
});

const getCategories = async () => {
    const response = await TCGPlayer.get('/catalog/categories', {
        params: {
            limit: 58,
            sortOrder: 'categoryId'
        }
    } );

    return response;
};

const getSets = async (categoryID) => {
    const response = await TCGPlayer.get(`/catalog/categories/${ categoryID }/groups`, {
        params: {
            limit: 100,
        }
    } );

    return response;
};

const getProducts = async (setID) => {
    const response = await TCGPlayer.get(`/catalog/products`, {
        params: {
            groupId: setID,
            limit: 100
        }
    } );

    return response;
};

const getProductDetails = async (productID) => {
    const response = await TCGPlayer.get(`/catalog/products/${ productID }`);

    return response;
};

const getProductPricing = async (productID) => {
    const response = await TCGPlayer.get( `/pricing/product/${ productID }`);

    return response;
}


export default {TCGPlayer, getCategories, getSets, getProducts, getProductDetails, getProductPricing};
