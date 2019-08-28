import axios from 'axios'
import server from "../serverConfig"

export const registerDeliver = deliverData => {
    axios.post(`${server}api/managers/registerDelivery`, deliverData)
};