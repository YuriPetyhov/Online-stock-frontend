import axios from 'axios';
import server from "../serverConfig";

export const addTtn = (info) => {
    const{date, TTNNumber, carrier, products, driver, registrar} = info;
    return axios.post(`${server}api/ttn/addTtn`, {
        number: TTNNumber,
        date: date,
        carrier: carrier,
        driver: driver,
        products: products,
        registrar: registrar
    })
};

