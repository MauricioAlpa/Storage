import { body, param } from "express-validator";

export class Validacoes{
    static validaCampos(){
        return [
            body("nome")
            .notEmpty()
            .withMessage("Campo nome obrigatŕoio."),

            body("nome")
            .isString()
            .withMessage("Campo nome deve ser uma string")
        ]
    }

    static validaId(){
        return [
            param("id")
            .notEmpty()
            .withMessage("Id obrigatório.")
        ]
    }

    static validaNome(){
        return [
            param("nome")
            .notEmpty()
            .withMessage("Nome obrigatório.")
        ]
    }
}