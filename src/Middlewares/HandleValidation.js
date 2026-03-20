import { validationResult } from "express-validator";

export function handleValidation(req, res, next){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const mensagens = errors.array().map(error => error.msg)

        return res.status(400).json({
            errors: mensagens
        });
    }

    next()
}