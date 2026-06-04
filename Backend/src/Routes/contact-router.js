import { Router } from "express";
import authUser from "../Middlewares/auth-middleware.js";
import { registerMessageController } from "../Controller/contact-cotroller.js";

const contactRouter = Router();

/**
 * @path /api/v1/contact/message
 * @description "Use to save massagese from user"
 * @access private
 */
contactRouter.post("/message", authUser, registerMessageController);


export default contactRouter;