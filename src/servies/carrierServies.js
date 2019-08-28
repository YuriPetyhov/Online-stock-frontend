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

export const listCarriers = (carrier) => {
    return axios.get(`${server}api/carriers`)
};

export const allCarriers = () => {
    return axios.get(`${server}api/carriers/all`)
};

export const deleteCarriers = (id) => {
    return axios.delete(`${server}api/carriers/${id}`)
};

export const updateCarrier = (newCarrier) => {
    const{company, countryCode, email, passportNumber, tel, _id} = newCarrier;
    axios.post(`${server}api/carriers/update`, {
     id:_id,
     company: company,
     countryCode:countryCode,
     email: email,
     passportNumber: passportNumber,
     tel: tel
 })
     .then((res) => {console.log(res)})
        .catch((err) => console.log(err))
}