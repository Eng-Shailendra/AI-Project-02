import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1/contact",
    withCredentials: true,
})

export const sendmessageapi = async (messagedata) => {
    try {
        const { fullname, email, message } = messagedata;
        const resp = await api.post("/message", { fullname, email, message });
        return resp
    } catch (err) {
        console.log(err);
    }
}