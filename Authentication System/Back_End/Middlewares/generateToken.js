import jwt from "jsonwebtoken"

export const generateToken = (user) =>{

    const accessToken = jwt.sign(
      { _id: user._id, username:user.username, role: user.role },
      process.env.ACCESS_TOKEN_SECRETE,
      {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
    )

    const refreshToken = jwt.sign(
      { _id: user._id },
      process.env.REFRESH_TOKEN_SECRETE,
      {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )

    return { accessToken, refreshToken }

}