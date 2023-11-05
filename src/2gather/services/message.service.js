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

export const SaveMessage = async ({text, idSentBy, idGroup, pkeSentBy, pkeReceiver}) => {
    try {
        const data = { text:text, idSentBy:idSentBy, idGroup:idGroup, pkeSentBy:pkeSentBy, pkeReceiver:pkeReceiver, priority:0 }
        const result = await sendAuthenticatedRequest('/message/create/', 'POST', data);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};