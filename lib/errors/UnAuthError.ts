import CustomError from "./CustomError";

export default class UnauthError extends CustomError {
    constructor(message: string){
        super(message, 401);
    }
}

