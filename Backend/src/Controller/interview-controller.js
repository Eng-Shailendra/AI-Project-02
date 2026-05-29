import { PDFParse } from "pdf-parse";
import { generateInterViewReport } from "../Services/AI-service.js";
import { interviewReportModel } from "../Models/InterviewReport-model.js";
import { success } from "zod";

export const generateInterviewController = async (req, res) => {
    try {
        const resumeFile = req.file;
        const resumeContent = await (new PDFParse(Uint8Array.from(resumeFile.buffer))).getText();
        const { selfDescription, jobDescription } = req.body;

        const interviewReportByAi = await generateInterViewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        })

        const interviewReport = await interviewReportModel.create({
            user: req.user.Id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            aiReport: interviewReportByAi
        })

        res.status(201).json({
            success: true,
            message: "Interview report generateed successfully",
            data: interviewReport
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