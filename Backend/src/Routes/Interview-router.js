import { Router } from "express";
import authUser from "../Middlewares/auth-middleware.js";
import * as controller from "../Controller/interview-controller.js"
import { uploade } from "../Middlewares/file-middleware.js";



const interviewRoutre = Router();


/**
 * @route /api/v1/initerview/
 * @description "Use to generate interview report on the basis of user self description resumepdf and job description"
 * @access private
 */
interviewRoutre.post("/", authUser, uploade.single("resume"), controller.generateInterviewController)

interviewRoutre.get("/ai-report", authUser, controller.showAiReprotToUser);



export default interviewRoutre;