import { asyncHandler } from "../Utils/asyncHandler.js"
import { apiResponse } from "../Utils/apiResponse.js"
import { apiError } from "../Utils/apiError.js"
import { authModels } from "../Models/authModels.js"

export const registration = asyncHandler( async(req,res,next) => {

  const {username, email, password, role = "user"} = req.body

  // Fields Check
  if(!username || !email || !password)
  { return next(new apiError(400, "Please provide all required fields"))}

  // Username Check
  const existingUser = await authModels.findOne({username})
  if(existingUser)
  { return next(new apiError(400, "This username is already taken"))}

 // Email Check
  if(!email.includes("@"))
  { return next(new apiError(400, "Please use a valid email ( example@gmail.com )"))}

  // Password Match
  const passwordRegix = /[@#$]/
  if(!passwordRegix.test(password))
   { return next(new apiError(400, "Password is too weak. Contain at least one special character (@,#,$)"))}
  
  // Added new Admin
    const user = await authModels.create({username, email, password, role})
  
  // Get Response
    res.status(200)
    .json(new apiResponse(200, "User registered successfully"))
})