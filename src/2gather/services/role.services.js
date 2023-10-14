import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"
import { sendAuthenticatedRequest } from './auth.services.js'

const API_URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;

export const GetRoles = async () => {
    try {
        let response = await fetch(`${API_URL}/role/list/`)

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

//Um exemplo de endpoint usando auth
export const createRole = async () => {
    try {
        const data = { name: 'Eng2' };  // Customize the payload as needed
        const result = await sendAuthenticatedRequest('/role/create/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};