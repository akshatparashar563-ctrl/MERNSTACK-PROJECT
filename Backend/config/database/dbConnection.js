import dns from "node:dns";
import mongoose from "mongoose";

export const dbConnection = () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("MONGO_URI is not configured.");
    }

    const dnsServers = process.env.MONGO_DNS_SERVERS
        ?.split(",")
        .map((server) => server.trim())
        .filter(Boolean);

    if (dnsServers?.length) {
        dns.setServers(dnsServers);
    }

    mongoose
        .connect(mongoUri, {
            dbName: "RESTURANT",
        })
        .then(() => {
            console.log("Connected to database successfully!");
        })
        .catch((err) => {
            console.error("Database connection failed.");
            console.error("Check your MONGO_URI in Backend/config/config.env or start MongoDB locally.");
            console.error(err.message);
        });
};