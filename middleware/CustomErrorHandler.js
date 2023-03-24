export const ErrorHandler = (err, req, res, next) => {
    const { message, statuscode, name } = err
    console.log(err)
    res.status(statuscode).json({
        success: "failed",
        message: message,
        name: name
    })
}