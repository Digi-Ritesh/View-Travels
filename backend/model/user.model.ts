import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =
  mongoose.models.User ||
  mongoose.model("User", UserSchema);

export default UserModel;