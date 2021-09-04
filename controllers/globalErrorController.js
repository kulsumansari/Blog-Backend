class GlobalErrorhandling {
    constructor({ message, error}) {
        this.message = message;
        this.error = error;
    }
    
    Error(){
        switch(this.message){
            case 'Internal Server Error':
                return {
                    name : "Internal Server Error",
                    status : 500,
                    isOperational : true,
                    message : this.message,
                    error : this.error.toString(),
                }
                
            case 'Bad Request':
                return {
                    name : "Bad Request",
                    status : 400,
                    isOperational : true,
                    message : this.message,
                    error : this.error.toString()
                }

            case 'Not Found':
                return {
                    name : "Not Found",
                    status : 404,
                    message : 'Not Found',
                    error : 'Invalid Page Request : Not Found'
                }

        }   
    }
}

module.exports=GlobalErrorhandling;