import { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";
import { generateInterviewReportApi, showReportApi, showAllReportApi } from "../api/api-Interview.js";

const useInterview = () => {
    const context = useContext(InterviewContext);
    if (!context) {
        throw new Error("useInterview must be within interview provider ");
    }
    const { loading, setLoading, report, setReport, reports, setReports } = context;

    const generateInterviewReport = async ({ selfDescription, jobDescription, resume }) => {
        try {
            setLoading(true);
            const resp = await generateInterviewReportApi({ selfDescription, jobDescription, resume });
            setReport(resp.data);
            return resp.data;
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const showReport = async (id) => {
        try {
            setLoading(true);
            const resp = await showReportApi(id);
            setReport(resp.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const showAllReport = async () => {
        try {
            setLoading(true);
            const resp = await showAllReportApi();
            setReports(resp.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, report, reports, generateInterviewReport, showReport, showAllReport };
};
export { useInterview };
