import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

export default ReviewSchema;