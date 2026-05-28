import dotenv from "dotenv";
dotenv.config({ quiet: true });
import app from './src/app.js';
import connectdb from "./src/Config/database.js";


const PORT = process.env.PORT
connectdb();

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})