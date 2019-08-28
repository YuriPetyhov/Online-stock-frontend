import axios from 'axios';
import server from "../serverConfig";

export const addDriver = (driver) => {
    const{email, name, surnName, drivingLicense} = driver;

    axios.post(`${server}api/drivers/addDriver`,  {
        email:email,
        name: name,
        surname:  surnName,
        drivingLicense: drivingLicense
    })
};

export const findDriver = (data) => {
    const{license} = data;
    return axios.get(`${server}api/drivers/${license}`)
}