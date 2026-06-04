import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }

}, { timestamps: true });

export const Message = mongoose.model("message", messageSchema);