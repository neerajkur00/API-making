exports.genetatedErrors = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.staus(statusCode).json({
        message: err.message,
        errName: err.errName,
    });
};