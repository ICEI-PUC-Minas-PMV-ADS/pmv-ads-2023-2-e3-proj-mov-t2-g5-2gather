import CryptoJS from 'crypto-js';

export const combineAndHashStrings = (...args) =>  {CryptoJS.SHA256(args.toString().replaceAll(',','')).toString()}

//transferir para groups service dps, n coloquei pq o arquivo ainda não existe e sei que vai dar conflito.

import { sendAuthenticatedRequest } from './auth.services.js'

export const getOrCreatePrivateGroup = async ({idPartner, idSelf}) => {
    try {
        const data = { idPartner:idPartner, idSelf:idSelf };
        const result = await sendAuthenticatedRequest('/group/get-or-create/private/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};