import express, { urlencoded } from "express";
const app = express();
import authRouter from "./Routes/auth-router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import interviewRoutre from "./Routes/Interview-router.js";
import contactRouter from "./Routes/contact-router.js";

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())


// all route here
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/interview", interviewRoutre);
app.use("/api/v1/contact", contactRouter)



export default app;
