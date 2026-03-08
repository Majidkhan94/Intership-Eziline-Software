import mongoose from "mongoose";

export const connectionString= async ()=>{
      try {
          const connect = await mongoose.connect(process.env.CONNECTION_STRING)
          if (connect) console.log(`Connection String Connected`)
      } catch (error) {
        console.log(`Connection String Not Connected`)
      }
}

