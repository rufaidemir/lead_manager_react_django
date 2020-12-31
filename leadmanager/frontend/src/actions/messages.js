import { MESSAGE_CREATE, GET_ERRORS } from './types';


export const createMessage = msg => {
    console.log("ACTION ALUSTURULDU")
    return {
        type: MESSAGE_CREATE,
        payload : msg
    } 
}

export const getErrors = (msg, status) => {
    return{
        type:GET_ERRORS,
        payload: {
            msg,
            status,
        }
    }
}
