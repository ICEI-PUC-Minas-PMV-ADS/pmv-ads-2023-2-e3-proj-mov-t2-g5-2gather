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

export const CreateNewGroups = async ({ title, photo, description, idAdmin, isTransmission, isPrivate, archived, participants }) => {
    console.log(title, idAdmin)
    try {   
        const result = await sendAuthenticatedRequest('/group/create/', 'POST', { title, photo, description, idAdmin, isTransmission, isPrivate, archived, participants });
        return result;
    } catch (error) {
        //alert('Por favor, preencha o "Nome do grupo"!')
        throw new Error(error.message);
    }
};

export const getOrCreatePrivateGroup = async ({idPartner, idSelf}) => {
    try {
        const data = { idPartner:idPartner, idSelf:idSelf };
        const result = await sendAuthenticatedRequest('/group/get-or-create/private/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const CreateNewList = async ({ title, idAdmin, isTransmission, isPrivate, archived, participants }) => {
    console.log(title, idAdmin)
    try {   
        const result = await sendAuthenticatedRequest('/group/create/', 'POST', { title, idAdmin, isTransmission, isPrivate, archived, participants });
        return result;
    } catch (error) {
        //alert('Por favor, preencha o "Nome da lista"!')
        throw new Error(error.message);
    }
};

export const showListData = async () => {
    try {
        const result = await sendAuthenticatedRequest('/group/list/transmission/', 'GET');
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};