import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        require: [true, "Token is required to added in black list"]

    }
}, { timestamps: true })

export const tokenBlacklistedModel = mongoose.model("BlackListTokens", blacklistTokenSchema);