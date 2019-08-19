import axios from 'axios';
import {GET_ERRORS} from './types';
import server from '../serverConfig'

export const registerAdmin = (admin, reset) => dispatch => {
    axios.post(`${server}api/admins/registration`, admin)
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

export const getStatistic = (date) => dispatch => {
    axios.post(`${server}api/admins/getStatistic`, date)
        .then(() => {
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