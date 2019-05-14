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
            limit: 58
        }
    } );

    return response;
};

export default {TCGPlayer, getCategories};
