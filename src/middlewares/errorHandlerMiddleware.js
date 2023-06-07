export const errorHandlerMiddleware = (err, req, res, next) => {
    const errorStatus = 500;
    const errorMessage = err.message;

    res.status(errorStatus).send({
        message: errorMessage
    });
}