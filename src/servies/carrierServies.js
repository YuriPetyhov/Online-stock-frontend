import axios from 'axios';
import server from "../serverConfig";

export const addCarrier = (carrier) => {
    const{email, tel, company, passportNumber, countryCode} = carrier;
    return axios.post(`${server}api/carriers/addCarrier`, {
        email,
        tel,
        company,
        passportNumber,
        countryCode
    })
};

export const searchCarrier = (carrier) => {
    const{passport} = carrier;
    return  axios.get(`${server}api/carriers/${passport}`)
};

export const allCarriers = (carrier) => {
    return axios.get(`${server}api/carriers`)
};