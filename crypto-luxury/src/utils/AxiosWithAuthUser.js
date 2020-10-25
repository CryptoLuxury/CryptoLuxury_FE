import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axiosWithAuthUser = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: `${BASE_URL}`,
        headers: {
            Authorization: token,
        }
    })
}