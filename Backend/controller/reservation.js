import validator from "validator";
import Reservation from "../config/models/Reservation.js";

export const sendReservation = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        reservationDate,
        reservationTime,
        partySize,
        specialRequest = "",
    } = req.body ?? {};

    if (
        typeof firstName !== "string" ||
        !validator.isLength(firstName.trim(), { min: 1, max: 50 }) ||
        typeof lastName !== "string" ||
        !validator.isLength(lastName.trim(), { min: 1, max: 50 }) ||
        typeof email !== "string" ||
        !validator.isEmail(email.trim()) ||
        typeof phone !== "string" ||
        !phone.trim() ||
        typeof reservationDate !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(reservationDate) ||
        Number.isNaN(Date.parse(`${reservationDate}T00:00:00.000Z`)) ||
        new Date(`${reservationDate}T00:00:00.000Z`).toISOString().slice(0, 10) !==
            reservationDate ||
        typeof reservationTime !== "string" ||
        !/^([01]\d|2[0-3]):[0-5]\d$/.test(reservationTime) ||
        !Number.isSafeInteger(partySize) ||
        partySize < 1 ||
        typeof specialRequest !== "string"
    ) {
        return res.status(400).json({
            success: false,
            message:
                "Provide firstName and lastName (up to 50 characters each), a valid email, phone, date (YYYY-MM-DD), time (HH:mm), positive party size, and optional special request.",
        });
    }

    try {
        const reservation = await Reservation.create({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            reservationDate: new Date(`${reservationDate}T00:00:00.000Z`),
            reservationTime,
            partySize,
            specialRequest: specialRequest.trim(),
        });

        return res.status(201).json({
            success: true,
            message: "Reservation created successfully.",
            reservation,
        });
    } catch (error) {
        return next(error);
    }
};
