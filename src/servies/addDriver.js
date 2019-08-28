import axios from 'axios';
import server from "../serverConfig";

export const addDriver = (driver) => {
    const{email, name, surnName} = driver;

    axios.post(`${server}api/drivers/addDriver`,  {
        email:email,
        name: name,
        surname:  surnName
    } )
};