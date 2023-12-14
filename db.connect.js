import mongoose from "mongoose";


const dbName = process.env.DB_NAME;
const dbPass = encodeURIComponent(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME)
export const connectDB = async () => {
  try { 
    await mongoose.connect(
      `mongodb+srv://wwwghimiresagar88:${dbPass}@cluster0.8gihaah.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};
