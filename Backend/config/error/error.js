class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    const statusCode =
        err.statusCode || (err.name === "ValidationError" ? 400 : 500);

    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error!",
    });
};

export default ErrorHandler;