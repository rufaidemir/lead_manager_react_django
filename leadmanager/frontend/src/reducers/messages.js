import { MESSAGE_CREATE } from '../actions/types';

const initialState ={

}

export default function(state = initialState, action){
    switch(action.type){
        case MESSAGE_CREATE:
            {   console.log("REDUCER ACTION",action);
                console.log("REDUCER STATE",state);
                return(state=action.payload)
            }
            default:
                return state
    }
}