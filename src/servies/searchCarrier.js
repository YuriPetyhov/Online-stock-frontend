import axios from 'axios';
import server from "../serverConfig";

export const searchCarrier = (carrier) => {
    const{passport} = carrier;
    return  axios.get(`${server}api/carriers/${passport}`)

};
