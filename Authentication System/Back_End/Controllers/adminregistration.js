import { apiResponse } from "../Utils/apiResponse.js"
import { apiError } from "../Utils/apiError.js"
import { authModels } from "../Models/authModels.js"
import { asyncHandler } from "../Utils/asyncHandler.js"

export const adminregistration = asyncHandler( async(req,res,next) => {

  const {username, email, password, role = "admin"} = req.body

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
  
  // Admin Check
  const existingAdmin = await authModels.findOne({role : "admin"})
  if(existingAdmin)
    { return next(new apiError(400, "Admin is already exists."))}
  
  // Added new Admin
    const admin = await authModels.create({username, email, password, role})
  
  // Get Response
    res.status(200)
    .json(new apiResponse(200, "Admin account registered successfully"))
})