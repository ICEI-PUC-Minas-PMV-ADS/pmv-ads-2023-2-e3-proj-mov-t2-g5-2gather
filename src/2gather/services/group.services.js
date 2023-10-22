import { sendAuthenticatedRequest } from './auth.services.js'

export const GetListArchivedGroups = async () => {
    try {
        const result = await sendAuthenticatedRequest('/group/list/archived/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const GetListYourGroups = async () => {
    try {
        const result = await sendAuthenticatedRequest('/group/list/groups/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

