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

export const UpdatePublicE2e = async ({publicE2e}) => {
    try {
        const data = { 'pke': publicE2e };
        const result = await sendAuthenticatedRequest(`/user/update/`, 'PATCH', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const UpdateUserDetails = async ({ name, email, phone, photo, description, idRole, lastActive, status }) => {
    const API_URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;
    try {
        const response = await fetch(`${API_URL}user/update/${uuid}/admin/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, photo, description, idRole, lastActive, status })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Recuperação de Senha
export const GetUserPassword = async () => { // o nome dessa função está um pouco ruim, e esse endpoint não existe. talvez password recovery? e nesse caso pode ficar no auth.services
    try {
        const result = await sendAuthenticatedRequest('/user/password/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

//Alteração/Registro de foto
export const updateUserPhoto = async ({ newPhoto }) => {
    try {
        const data = { photo: newPhoto };
        const response = await sendAuthenticatedRequest(`/user/update/`, 'PATCH', data);
        if (response.ok) {
            return true; // Registro de nova foto bem-sucedido
        } else {
            return false; // Falha no registro da nova foto
        }
    } catch (error) {
        console.log('Error updating user photo:', error);
        return false; // Erro durante a troca
    }
};