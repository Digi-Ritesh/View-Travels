import { PlaceCategory } from "@/backend/constants/TouristPlacesEnum";
import ReviewSchema from "@/backend/model/review.model";
import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        url: String,

        city: String,

        state: String,

        country: String,

        location: String,

        category: {
            type: String,
            enum: Object.values(PlaceCategory),
            required: true,
        },

        image: String,

        tours: {
            type: Number,
            default: 0,
        },

        price: {
            type: Number,
            min: 0,
        },

        description: String,

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },

        averageRating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },

        reviews: [ReviewSchema],

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const PlacesDao =
    mongoose.models.Place ||
    mongoose.model("Place", PlaceSchema);

export default PlacesDao;