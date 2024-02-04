import mongoose from "mongoose";

const Connection = async () => {
  const URL = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error ecounter ${error}`);
  }
};

export default Connection;
