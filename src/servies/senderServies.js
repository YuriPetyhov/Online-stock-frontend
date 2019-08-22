import axios from "axios";
import server from "../serverConfig";

export const getAllSender = () => {
    return axios.get(`${server}api/sender/`)
}