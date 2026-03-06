import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const authModelsSchema = new Schema({
  username:     { type: String, unique: true, required: true, index: true },
  email:        { type: String, unique: true, required: true },
  password:     { type: String, unique: true, required: true },
  role:         { type: String },
  refreshToken: { type: String }

},{timestamps: true})

// Password Hash

authModelsSchema.pre("save", async function(){
  if(!this.isModified("password")) return
      this.password = await bcrypt.hash(this.password, 10)
})

// Password Match

authModelsSchema.methods.isPasswordCorrect = async function(password){
      return await bcrypt.compare(password, this.password)
}

export const authModels = mongoose.model("Registeration", authModelsSchema)