import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_FAIL } from '../actions/types';

const initialState ={
    token:localStorage.getItem("token"),
    isAuthenticated:null,
    isLoading:false,
    user:null
}

export default function(state=initialState, action){
    switch (action.type) {
        case USER_LOADING:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case USER_LOADED:{
            return{
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user

            }

        }
        case REGISTER_FAIL:
        case LOGOUT_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:{
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                isLoading: false
            }
        }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false
            }
        
        case LOGOUT_SUCCESS:{
            localStorage.removeItem('token')
            return{
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        }
        default:
            return state;
    }
}