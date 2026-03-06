import { apiError } from "../Utils/apiError.js"

export const protectedRoutes = (req,res,next) => {
  if(req.user.role !== "admin")
  {return next(new apiError(400, "Access Denied:"))}
  next();
}