class ValidationError extends Error{}

function handleError(err, req,res, next){

    res.render('error',{
        message: err instanceof ValidationError ? err.message : 'Sorry, try again later.'
    });
}

module.exports = {
    handleError, ValidationError
}