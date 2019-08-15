import axios from 'axios';
import {GET_ERRORS} from './types';
import server from '../serverConfig'

export const registerAdmin = (admin, reset) => dispatch => {
    axios.post(`${server}api/admin/registration`, admin)
        .then(() => {
            reset()
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