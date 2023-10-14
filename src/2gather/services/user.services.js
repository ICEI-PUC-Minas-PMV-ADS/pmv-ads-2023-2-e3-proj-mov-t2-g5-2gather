import { sendAuthenticatedRequest } from './auth.services.js'

export const GetUserList = async () => {
    try {
        const result = await sendAuthenticatedRequest('/user/list/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const UpdateUserStatus = async ({userId, reason}) => {
    try {
        const data = { 'status':0 };
        const result = await sendAuthenticatedRequest(`/user/update/${userId}/admin/`, 'PATCH', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
