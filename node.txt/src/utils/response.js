exports.error = (message) => {
    return {
        success: false,
        statusCode: 500,
        data: null,
        errorMessage: message,
    };
};
exports.success = (data) => {
    return {
        success: true,
        statusCode: 200,
        data: data,
    };
};
exports.notFound = () => {
    return {
        success: true,
        statusCode: 404,
        data: null,
        message: 'Not found'
    };
};
exports.deleted = () => {
    return {
        success: true,
        statusCode: 204,
        data: null,
        message: 'No content',
    };
};
exports.badRequest = (message = 'Bad request') => {
    return {
        success: false,
        statusCode: 400,
        data: null,
        errorMessage: message,
    };
}



