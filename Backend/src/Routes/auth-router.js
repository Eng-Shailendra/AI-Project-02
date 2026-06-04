import { Router } from "express";
import * as controller from "../Controller/auth-controller.js"
import authUser from "../Middlewares/auth-middleware.js";

const authRouter = Router();

/**
 *  @route  POST/api/v1/auth/register
 *  @description "To register the user expect username, email password"
 *  @access public 
 */
authRouter.post("/register", controller.registerUserController);


/**
 *  @route  POST/api/v1/auth/login
 *  @description "To login the user expect email and password"
 *  @access public 
 */
authRouter.post("/login", controller.loginUserController);


/**
 *  @route  POST/api/v1/auth/logout
 *  @description "Clear token from cookes and browser"
 *  @access public 
 */
authRouter.get("/logout", controller.LogoutUserController)


/**
 * @route GET /api/v1/auth/get-me
 * @description get the current logged in user details
 * @access private
 */

authRouter.get("/get-me", authUser, controller.getMeController)

/**
 * @route /api/v1/auth/google-signup
 * @description Signup using google account 
 * @access public
 */
authRouter.get("/google-signup" )

export default authRouter;