import { GoogleGenAI, Type } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export async function generateInterViewReport({ resume, selfDescription, jobDescription }) {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        //! zod schema is not working properly with gemini response, need to check it later
        // // 1. Defined Schema matching your desired exact structure
        const interviewReportSchema = z.object({
            title: z.string().describe("Title of the interview report"),
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
                        day: z.number().describe("Day number in the preparation plan"),
                        focus: z.string().describe("Main focus area for the day"),
                        task: z.array(z.string().describe("Specific tasks or activities to be done on this day")),
                    })
                )
                .describe("A day-wise preparation plan for the candidate to improve and perform well in interview"),
        });

        const geminiResponseSchema = {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "Title of the interview report" },
                matchScore: {
                    type: Type.INTEGER,
                    description: "A score from 0 to 100 indicating profile fit."
                },
                technicalQuestions: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            question: { type: Type.STRING, description: "Technical question for the interview" },
                            intention: { type: Type.STRING, description: "Why interviewer asks this question" },
                            answer: { type: Type.STRING, description: "How to answer this question with important points" }
                        },
                        required: ["question", "intention", "answer"]
                    }
                },
                behavioralQuestions: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            question: { type: Type.STRING, description: "Behavioral question for the interview" },
                            intention: { type: Type.STRING, description: "Why interviewer asks this question" },
                            answer: { type: Type.STRING, description: "How to answer this question using proper approach" }
                        },
                        required: ["question", "intention", "answer"]
                    }
                },
                skillGap: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            skill: { type: Type.STRING, description: "Skill candidate is lacking" },
                            severity: { type: Type.STRING, enum: ["low", "medium", "high"] },
                            improvementPlan: { type: Type.STRING, description: "How candidate can improve" }
                        },
                        required: ["skill", "severity", "improvementPlan"]
                    }
                },
                preparationPlan: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            day: { type: Type.INTEGER, description: "Day number" },
                            focus: { type: Type.STRING, description: "Main focus area" },
                            task: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                                description: "Specific activities to perform on this day"
                            }
                        },
                        required: ["day", "focus", "task"]
                    }
                }
            },
            required: ["matchScore", "technicalQuestions", "behavioralQuestions", "skillGap", "preparationPlan"]
        };

        // FIXED: Swapped prompt interpolation to correct variable positions
        const prompt = `
          Analyze the candidate based on the provided self-description, job description, and resume.
          Generate a comprehensive interview report matching the schema.
          Self Description: ${selfDescription}
          Job Description: ${jobDescription}
          Resume: ${resume.text}
        `;

        // ! fallback response for testing without hitting api rate litmit
        // FIXED: Configuration payload corrected for modern @google/genai SDK standards
        try {
            const resp = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: geminiResponseSchema,
                },
            });
            // 3. Safe Parsing of Response Object
            const result = interviewReportSchema.parse(JSON.parse(resp.text));
            return result;
        } catch (err) {
            throw new Error(`Error generating interview report: ${err.message}`);
        }

    } catch (err) {
        console.error("Error executing report generation:", err.message);
        throw err; // Re-throw to be handled by controller
    }
}
