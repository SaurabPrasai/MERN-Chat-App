
export default function errorHandler(statusCode,errorMessage){
        let error=new Error();
        error.statusCode=statusCode;
        error.message=errorMessage
        return error;
}