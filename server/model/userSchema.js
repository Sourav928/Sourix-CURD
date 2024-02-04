import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const userSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  username: String,
  email: String,
  phone: String,
});

userSchema.plugin(autoIncrement.plugin, {
  model: "User",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

const User = mongoose.model("User", userSchema);

export default User;
