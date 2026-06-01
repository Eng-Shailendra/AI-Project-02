import { useContext } from "react";
import { InterviewContext } from "../auth/InterviewContext";

const useInterview = () => {
    const context = useContext(InterviewContext);
    if (!context) {
        throw new Error("useInterview must be within interview provider ")
    }
    const { loading, setLoding, report, setReport, reports, setReports } = context;


    const generateInterviewReport = async ({ selfDescription, jobDescription, resume }) => {
        try {
            setLoding(true);
            const resp = generateInterviewReportApi({ selfDescription, jobDescription, resume });
            setReport(resp);
        } catch (err) {
            console.log(err);
        } finally {
            setLoding(false)
        }


    }
    return { loading, report, reports, generateInterviewReport }
}
export { useInterview };
