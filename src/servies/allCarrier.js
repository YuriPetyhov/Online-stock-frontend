import axios from 'axios';
import server from "../serverConfig";

export const allCarriers = (carrier) => {
    return axios.get(`${server}api/carriers`)
};