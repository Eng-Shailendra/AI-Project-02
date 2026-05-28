import { Behavior, GoogleGenAI } from "@google/genai";
import { application } from "express";
import z from "zod";
import { zodToJsonSchema } from "zod-to-json-schema"


const interviewReportSchema = z.object({
    technicalQuestions: z.array(
        z.object({
            question: z.string().describe("Technical question that can be asked in interview"),
            intention: z.string().describe("Why interviewer asks this question"),
            answer: z.string().describe("How to answer this question, important points and approach"),
        })
    ),

    behavioralQuestions: z.array(z.object({
        question: z.string().describe("Behavioral question that can be asked in interview"),
        intention: z.string().describe("Why interviewer asks this behavioral question"),
        answer: z.string().describe("How to answer this behavioral question with proper approach"),
    })
    ).describe("Behavioral questions asked in interview"),

    skillGap: z
        .array(
            z.object({
                skill: z
                    .string()
                    .describe("Skill that candidate is lacking"),

                severity: z
                    .enum(["low", "medium", "high"])
                    .describe("Severity level of the skill gap"),

                improvementPlan: z
                    .string()
                    .describe("How candidate can improve this skill"),
            })
        )
        .describe("List of candidate skill gaps"),

    preparationPlan: z.object({
        duration: z
            .string()
            .describe("Preparation duration like 30 days or 2 weeks"),

        dailyGoals: z.array(
            z.object({
                day: z
                    .string()
                    .describe("Day or timeline"),

                goal: z
                    .string()
                    .describe("Goal for that day"),

                resources: z
                    .array(z.string())
                    .describe("Resources or topics to study"),
            })
        ),

        finalTips: z
            .array(z.string())
            .describe("Final interview preparation tips"),
    }),
});

export async function generateInterViewReport({ resume, selfDescription, jobDescription }) {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });
        const prompt = `
You are an expert technical interviewer.
Analyze the candidate resume and job description.
Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}


`;
        const resp = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });
        return resp.text;

    } catch (err) {
        console.log(err)
    }


}
