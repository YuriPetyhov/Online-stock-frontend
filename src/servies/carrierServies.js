import axios from 'axios';
import server from "../serverConfig";

export const addCarrier = (carrier) => {

    const{email, tel, company, passport, country} = carrier.carrier;
    return axios.post(`${server}api/carriers/addCarrier`, {
        email: email,
        tel: tel,
        company: company,
        passportNumber: passport,
        countryCode: country
    })
};

export const searchCarrier = (carrier) => {
    const{passport} = carrier;
    return  axios.get(`${server}api/carriers/${passport}`)
};

export const allCarriers = (carrier) => {
    return axios.get(`${server}api/carriers`)
};