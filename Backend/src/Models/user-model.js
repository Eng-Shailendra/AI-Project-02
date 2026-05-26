import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "user name already taken "],
        require: true,
    },
    email: {
        type: String,
        unique: [true, "user name already taken "],
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    

}, { timestamps: true })
export const userModel = mongoose.model("User", userSchema);