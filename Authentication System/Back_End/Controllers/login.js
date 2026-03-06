import { asyncHandler } from "../Utils/asyncHandler.js"
import { apiError } from "../Utils/apiError.js"
import { apiResponse } from "../Utils/apiResponse.js"
import { authModels } from "../Models/authModels.js"
import { generateToken } from "../Middlewares/generateToken.js"

export const login = asyncHandler( async (req,res,next)=>{
      
        const { email, password } = req.body

        // Fields Required
        if (!email || !password)
        { return next(new apiError(400, "Email and password are required"))}

        // Email Check
        const user = await authModels.findOne({email})
        if (!user)
        { return next(new apiError(400, "Email not match"))}
        
        // Password Match
        const ispasswordMatch = await user.isPasswordCorrect(password)
        if (!ispasswordMatch)
        { return next(new apiError(400, "Password not match"))}

        // Generate Token
        const {accessToken, refreshToken} = generateToken(user)
        user.refreshToken = refreshToken
       await user.save({ validateBeforeSave: false });

      // Options
      const Options = { httpOnly: true, secure : true }
      
      
       // Response
      res.status(200)
      .cookie("accessToken",accessToken,Options)
      .cookie("refreshToken",refreshToken,Options)
      .json(new apiResponse(200, "Login Successfully",
      {
      user:{
        role: user.role,
        username: user.username,
        email: user.email
      }
}))

})