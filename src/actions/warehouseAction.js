import axios from 'axios';
import {GET_ERRORS} from './types';
import server from '../serverConfig';

export const registerWarehouse = (warehouse, reset,unlock) => dispatch => {
    axios.post(`${server}api/warehouses/registration`, warehouse)
        .then(() => {
            reset();
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            if (err.response) {
                unlock()
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};