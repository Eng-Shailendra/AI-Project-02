import axios from "axios";


const InerviewAPI = axios.create({
    baseURL: "http://localhost:3000/api/v1/interview",
    withCredentials: true,
})

export const generateInterviewReportApi = async ({ resume, jobDescription, selfDescription }) => {
    try {
        const responce = await api.post("/generate-report", { resume, jobDescription, selfDescription })
        return responce.data;
    } catch (err) {
        console.log(err);
    }    
}  