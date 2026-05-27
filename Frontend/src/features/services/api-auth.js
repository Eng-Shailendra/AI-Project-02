import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1/auth",
    withCredentials: true
})


export const registerApi = async ({ username, email, password }) => {
    try {
        const responce = await api.post("/register", { username, email, password })
        return responce.data;
    } catch (err) {
        console.log(err);
    }
}

export const loginApi = async ({ email, password }) => {
    try {
        const responce = await api.post("/login", { email, password })
        return responce.data;
    } catch (err) {
        console.log(err);
    }
}

export const logoutApi = async () => {
    try {
        const responce = await api.get("/logout")
        return responce.data;
    } catch (err) {
        console.log(err)
    }
}

export const getMeApi = async () => {
    try {
        const responce = await api.get("/get-me")
        return responce.data;
    } catch (err) {
        console.log(err)
    }
}