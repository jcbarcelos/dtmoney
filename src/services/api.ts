import axios  from "axios";

const PORT_URL = 1111 ;
export const api = axios.create({
    baseURL: 'http://localhost:1111/api'
})
