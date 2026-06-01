import { PDFParse } from "pdf-parse";
import { generateInterViewReport } from "../Services/AI-service.js";
import { interviewReportModel } from "../Models/InterviewReport-model.js";

/**
 * 
 * @ to
 * @param {*} res 
 * @returns 
 */
export const generateInterviewController = async (req, res) => {
    try {
        const resumeFile = req.file;
        const resumeText = await (new PDFParse(Uint8Array.from(resumeFile.buffer))).getText();
        const { selfDescription, jobDescription } = req.body;

        const interviewReportByAi = await generateInterViewReport({
            resume: resumeText,
            selfDescription,
            jobDescription
        })
        console.log("Interview Report by AI:", interviewReportByAi);

        // const interviewReport = await interviewReportModel.create({
        //     user: req.user.Id,
        //     resume: resumeText,
        //     selfDescription,
        //     jobDescription,
        //     // ...interviewReportByAi,

        // })

        res.status(201).json({
            success: true,
            message: "Interview report generateed successfully",
            // data: interviewReport
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: "Error report not generated"
        })

    }

}

export const showAiReprotToUser = async (req, res) => {

}

export const getAllReportOfUser = async (req, res) => {

}