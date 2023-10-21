import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"
import { sendAuthenticatedRequest } from './auth.services.js'

const API_URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;

export const GetListArchivedGroups = async () => {
    try {
        const result = await sendAuthenticatedRequest('/group/list/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const GetListYourGroups = async () => {
    try {
        const result = await sendAuthenticatedRequest('/group/list/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

