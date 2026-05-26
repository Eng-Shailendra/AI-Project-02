import express, { urlencoded } from "express";
const app = express();
import authRouter from "./Routes/auth-router.js";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cookieParser())


// all route here
app.use("/api/v1/auth", authRouter);



export default app;
