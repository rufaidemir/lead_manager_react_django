import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './types';
import { createMessage } from '../actions/messages';

// check token 
export const loadUser = () => (dispatch)=>{
    // user loading
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig)
    .then(res => {
            console.log("tokenConfig");
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            console.log("user loading errior", err);
        })
}

// LOGIN 

// check token 
export const login = (username, password) => dispatch=>{

    const body = JSON.stringify({ username, password })
    // headers
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios.post('/api/auth/login',body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.data
            })
            console.log(err);
        })
}
// register
export const register = ({username, password, email}) => dispatch=>{
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username, password, email})

    axios.post('/api/auth/register',body , config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: createMessage,
                payload: err.data
            })
            console.log("REGISTEr ErROR--------",err);
        })
}

// check token 
export const logout = () => (dispatch, getState)=>{
    axios.post('/api/auth/logout/',null, tokenConfig)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(err => {
            console.log(err);
        })
}


export const tokenConfig = getState => {
    // get token from state
    const token = getState().auth.token;

    // headers
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    // if token add headers
    if(token){
         config.headers['Authorization'] = `Token ${token}`
    }

    return config
}