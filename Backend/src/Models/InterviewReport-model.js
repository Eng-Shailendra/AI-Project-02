import mongoose from "mongoose";

/**
 * @description job description schema
 */

const technicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    intention: {
        type: String,
        require: true,
    },
    answer: {
        type: String,
        require: true
    }
},
    { _id: false })

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    intention: {
        type: String,
        require: true,
    },
    answer: {
        type: String,
        require: true
    }
},
    { _id: false }
)


const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        require: true,
    },
    severity: {
        type: String,
        require: true,
        enum: ["low", "medium", "high"],
    }
}, {
    _id: false
})

const preprationPlanScheam = new mongoose.Schema({
    day: {
        type: Number,
        require: true,

    },
    focus: {
        type: String,
        require: true
    },
    task: [{
        type: String,
        require: true
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        require: true
    },
    resume: {
        type: String,

    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        require: true
    },
    technicalQuestions: [technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillGap: [skillGapSchema],
    preparationPlan: [preprationPlanScheam],
}, { timestamps: true })

export const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);