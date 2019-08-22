import axios from 'axios';
import {GET_ERRORS} from './types';
import server from '../serverConfig'

export const registerUser = (user, reset) => dispatch => {
    console.log(user)
    axios.post(`${server}api/users/registration`, user)
        .then(() => {
            reset();
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            if (err.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};

