import axios from 'axios';
import {GET_ERRORS, GET_CURRENT_USER} from './types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken'
import server from '../serverConfig'

export const setCurrentUser = decoded => {
    return {
        type: GET_CURRENT_USER,
        payload: decoded
    }
};

export const loginUser = (user,reset) => dispatch => {
    axios.post(`${server}api/allUsers/login`, user)
        .then(() => {
            console.log(reset)
          reset()
        })
};

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/');
};