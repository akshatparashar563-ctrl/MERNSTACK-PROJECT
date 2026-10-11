import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
            validate: (value) => validator.isLength(value.trim(), { min: 1, max: 50 }),
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
            validate: (value) => validator.isLength(value.trim(), { min: 1, max: 50 }),
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate: (value) => validator.isEmail(value),
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        reservationDate: {
            type: Date,
            required: true,
        },
        reservationTime: {
            type: String,
            required: true,
        },
        partySize: {
            type: Number,
            required: true,
            min: 1,
            validate: Number.isInteger,
        },
        specialRequest: {
            type: String,
            trim: true,
            default: "",
        },
    },
    { timestamps: true },
);

export default mongoose.model("Reservation", reservationSchema);
