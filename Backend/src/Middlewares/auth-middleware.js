import jwt from "jsonwebtoken"
import { tokenBlacklistedModel } from "../Models/blackList-model.js";


const authUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Token is not avilable"
        })
    }
    try {
        const isTokenBlackListed = await tokenBlacklistedModel.findOne({ token })
        if (isTokenBlackListed) {
            return res.status(400).json({
                success: false,
                message: "token is black listed, please login again"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = decoded
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Token not provided"
        })
    }

}
export default authUser;
