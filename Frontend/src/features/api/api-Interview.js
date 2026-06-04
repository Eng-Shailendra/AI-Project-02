import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/v1/interview`,
    withCredentials: true,
});

export const generateInterviewReportApi = async ({ resume, jobDescription, selfDescription }) => {
    try {
        const formData = new FormData();
        formData.append("resume", resume);
        formData.append("jobDescription", jobDescription);
        formData.append("selfDescription", selfDescription);
        const response = await api.post("/generate-report", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const showReportApi = async (id) => {
    try {
        const resp = await api.get(`/ai-report/${id}`);
        return resp.data;
    } catch (err) {
        console.log(err);
    }
};

export const showAllReportApi = async () => {
    try {
        const resp = await api.get("/all-ai-report");
        return resp.data;
      
    } catch (err) {
        console.log(err);
    }
};

export const getQuestionsApi = async () => {
    try {
        const resp = await api.get("/questions");
        return resp.data;
    } catch (err) {
        console.log(err);
    }
};
