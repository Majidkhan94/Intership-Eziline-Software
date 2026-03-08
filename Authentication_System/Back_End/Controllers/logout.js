import { asyncHandler } from "../Utils/asyncHandler.js"
import { apiResponse } from "../Utils/apiResponse.js"
import { authModels } from "../Models/authModels.js"


export const logout = asyncHandler( async (req,res,next)=>{

  // Find User
    await authModels.findByIdAndUpdate(
      req.user._id,
      {$set: {refreshToken: undefined}},
      {new: true}
    )

    // Options
      const Options = { httpOnly: true, secure : true }

    // Response
    res.status(200)
    .clearCookie("accessToken", Options)
    .clearCookie("refreshToken", Options)
    .json(new apiResponse(200, "Logout Successfully"))


}) 