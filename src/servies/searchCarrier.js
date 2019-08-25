import axios from 'axios';
import server from "../serverConfig";

export const searchCarrier = (carrier) => {
    const{company} = carrier;
    return  axios.get(`${server}api/carriers/${company}`)

};
