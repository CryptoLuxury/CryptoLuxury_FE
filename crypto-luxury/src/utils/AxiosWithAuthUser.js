import axios from "axios"

export const axiosWithAuthUser = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "https://crypto-luxury.herokuapp.com",
        headers: {
            Authorization: token,
        }
    })
}