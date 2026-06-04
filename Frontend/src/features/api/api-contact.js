import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/v1/contact`,
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