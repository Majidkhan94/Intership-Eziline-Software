import { authModels } from "../Models/authModels.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyToken = asyncHandler(async(req,res,next)=>{

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE);
    const user = await authModels.findById(verifyToken?._id).select("-password -refreshToken");
    req.user = user;
    next();

})