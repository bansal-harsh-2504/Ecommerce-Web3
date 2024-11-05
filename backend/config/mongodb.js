import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to mongoDB");
  });
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectToDB;
