
const sendResponse = ({res, statusCode, message, data, error}) => {
    res.status(statusCode);
    if(error){
        return res.json({
            message,
            error
        });
    }
    return res.json({
        message,
        data
    })
};

const sendErrorResponse= (error, req, res,next) => {
    return res.status(error.status).json(error);
}

module.exports = {
    sendResponse,
    sendErrorResponse
};