import jwt from 'jsonwebtoken'
import { blackListToken } from '../models/tokenBlacklist.js'

const authMiddleware = async(req, res , next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({
            message:'Token not found',
            success:false
        })
    }
    const isBlacklist = await blackListToken.findOne({ token });
    if (isBlacklist) {
        return res.status(401).json({
            message: "Token is invalid",
            success: false
        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        return next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false,
            error: error.message
        });
    }
}

export default authMiddleware;