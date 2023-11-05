import { sendAuthenticatedRequest } from './auth.services.js'

export const getMessageList = async ({idGroup}) => {
    try {
        const data = { idGroup }
        const result = await sendAuthenticatedRequest('/message/list/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const SendMessage = async ({text, idSentBy, idGroup}) => {
    try {
        const data = { text:text, idSentBy:idSentBy, idGroup:idGroup, priority:0 }
        const result = await sendAuthenticatedRequest('/message/create/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};


//Nesse caso precisamos apresentar com quem estamos trocando as mensagens:
export const GetMessages = async ({ idSentBy }) => {
    try {
        const data = { idSentBy }
        const result = await sendAuthenticatedRequest('/message/list/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};


