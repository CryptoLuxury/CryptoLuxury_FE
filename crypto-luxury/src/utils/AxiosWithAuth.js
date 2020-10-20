import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ADMIN = process.env.REACT_APP_ADMIN;

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Authorization: token,
            admin: ADMIN
        }
    })
}