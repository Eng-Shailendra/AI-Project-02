import { userModel } from '../Models/user-model.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { tokenBlacklistedModel } from '../Models/blackList-model.js';


/**
     * @name registerUserController
     * @description Register a user, expects username, email and password from body
     * @access public
     */
export const registerUserController = async (req, res) => {
    const { email, username, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all username, email, password"
        });
    }

    const isExistUser = await userModel.findOne({
        $or: [{ username }, { email }]
    })
    if (isExistUser) {
        return res.status(400).json({
            success: false,
            message: "User already register "
        })
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({
            username,
            email,
            password: newPassword,
        });

        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        res.cookie("token", token);
        res.status(200).json({
            success: true,
            message: "User created success fully"
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Internal error occur"
        })
    }




}

/**
     * @name loginUserController
     * @description login a user, expects  email and password from body
     * @access public
     */
export const loginUserController = async (req, res) => {


    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all fields email, password"
        });
    }
    try {


        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET_KEY);
        res.cookie("token", token);

        res.status(200).json({
            success: true,
            message: "User login successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Some thing went wrong"
        });
    }



}

/**
 * @name LogoutUserController 
 * @description "Logout User from have to remove token from  the browser and teh cookes   "
 * @access public
 */
export const LogoutUserController = async (req, res) => {
    const token = req.cookies.token;
    if (token) {
        await tokenBlacklistedModel.create({ token });
    }
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "User Logout successfully"
    })
}

/**
 * @name get-me
 * @description "get the current loggin user  "
 * @access private
 * 
 */
export const getMeController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id);
        res.status(200).json({
            success: true,
            message: "user detailed fetched successfully",
            User: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Internal error ot get-me user "
        })
    }

}
