import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken'
import { blackListToken } from '../models/tokenBlacklist.js';
const userRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if ([username, email, password].some(field => !field || field.trim() == "")) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
                error: {
                    missing: [
                        (!username || username.trim() === "") && "Username",
                        (!email || email.trim() === "") && "E-mail",
                        (!password || password.trim() === "") && "Password",

                    ].filter(Boolean)
                }
            })
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Enter a valid email",
                success: false,
                error: "Invalid email format"
            });
        }
        if(password.length < 6){
            return res.status(400).json({
                message:"Password must be atleast 6 characters",
                success:false
            })
        }
        /* Checking if user already exists or not */
        const isUserAlreadyExist = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserAlreadyExist) {
            return res.status(400).json({
                message: "User already exists with username or email",
                success: false
            })
        }

        const user = await User.create({
            username,
            email,
            password
        })

        const createdUser = await User.findById(user._id).select(
            "-password "
        )

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })
        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            createdUser
        })
    } catch (error) {
        console.log(error);

    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if ([email, password].some(field => !field || field.trim() === "")) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
                error: {
                    missing: [
                        (!email || email.trim() === "") && "E-mail",
                        (!password || password.trim() === "") && "Password",
                    ].filter(Boolean)
                }
            });
        }

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return res.status(400).json({
                message: "Account doesn't exist",
                success: false,
            });
        }

        const isMatch = await checkUser.isPasswordCorrect(password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false,
            });
        }

        const token = jwt.sign(
            {
                id: checkUser._id,
                username: checkUser.username,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        );

        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        const userResponse = await User.findById(checkUser._id).select("-password");
        return res.status(200).json({
            message: "Logged in successfully",
            success: true,
            user: userResponse,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
            error: error.message,
        });
    }
}

const logout = async(req, res)=>{
    const token = req.cookies.token;

    if(token){
        await blackListToken.create({token});
    }
    res.clearCookie("token")
    return res.status(200).json({
        message:"Logout-Successfully",
        success:true
    })
}
const getme = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "No current logged in user",
                success: false,
            });
        }
        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Unable to fetch current user",
            success: false,
            error: error.message,
        });
    }
}
export { userRegister, login, logout, getme }