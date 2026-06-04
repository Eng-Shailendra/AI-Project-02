
import { Message } from "../Models/message-model.js";

export const registerMessageController = async (req, res) => {
    try {
        const { fullname, email, message } = req.body;
        if (!fullname || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Message is not sended"
            })
        }
        const data = await Message.create({ fullname, email, message, user: req.user.id });
        return res.status(200).json({
            success: true,
            message: "Message sended successfully",
            data: data
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: "Enable to register your message"
        })
    }
}
