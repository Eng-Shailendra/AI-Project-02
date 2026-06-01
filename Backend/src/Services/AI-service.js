import { GoogleGenAI } from "@google/genai";
import z from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export async function generateInterViewReport({ resume, selfDescription, jobDescription }) {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        // 1. Defined Schema matching your desired exact structure
        const interviewReportSchema = z.object({
            matchScore: z
                .number()
                .min(0)
                .max(100)
                .describe("A score indicating how well the candidate's profile matches the job description"),
            technicalQuestions: z.array(
                z.object({
                    question: z.string().describe("Technical question that can be asked in interview"),
                    intention: z.string().describe("Why interviewer asks this question"),
                    answer: z.string().describe("How to answer this question, important points and approach"),
                })
            ),
            behavioralQuestions: z
                .array(
                    z.object({
                        question: z.string().describe("Behavioral question that can be asked in interview"),
                        intention: z.string().describe("Why interviewer asks this behavioral question"),
                        answer: z.string().describe("How to answer this behavioral question with proper approach"),
                    })
                )
                .describe("Behavioral questions asked in interview"),
            skillGap: z
                .array(
                    z.object({
                        skill: z.string().describe("Skill that candidate is lacking"),
                        severity: z.enum(["low", "medium", "high"]).describe("Severity level of the skill gap"),
                        improvementPlan: z.string().describe("How candidate can improve this skill"),
                    })
                )
                .describe("List of candidate skill gaps"),
            preparationPlan: z
                .array(
                    z.object({
                        day: z.number(),
                        focus: z.string(),
                        task: z.array(z.string()),
                    })
                )
                .describe("A day-wise preparation plan for the candidate to improve and perform well in interview"),
        });

        // Clean data inputs to prevent [object Object] errors stringifying the text
        const cleanResume = typeof resume === "object" ? JSON.stringify(resume) : resume;
        const cleanSelfDescription = typeof selfDescription === "object" ? JSON.stringify(selfDescription) : selfDescription;
        const cleanJobDescription = typeof jobDescription === "object" ? JSON.stringify(jobDescription) : jobDescription;

        const prompt = `
      Analyze the candidate's profile based on the provided resume, self-description, and job description.
      Generate a comprehensive interview report matching the schema.

      Resume: ${cleanResume}
      Self Description: ${cleanSelfDescription}
      Job Description: ${cleanJobDescription}
    `;

        // 2. Fixed Request Configuration payload matching modern SDK standards
        const resp = await ai.models.generateContent({
            model: "gemini-1.5-pro",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: zodToJsonSchema(interviewReportSchema),
            },
        });

        console.log("Raw AI Response:", resp.text);

        // 3. Safe Parsing of Response Object
        const result = interviewReportSchema.parse(JSON.parse(resp.text));
        console.log("AI Response:", result);

        return result;

    } catch (err) {
        console.error("Error executing report generation:", err.message);
        throw err;
    }
}
