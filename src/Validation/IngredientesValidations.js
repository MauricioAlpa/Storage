import { body, param } from "express-validator";

export class Validacoes {

    static validaCampos(){
        return [

            body("nome")
            .notEmpty()
            .withMessage("Nome do ingrediente obrigatório."),

            body("quantidade")
            .notEmpty()
            .withMessage("Quantidade obrigatória.")
            .isNumeric()
            .withMessage("Quantidade deve ser número.")
            .custom(valor =>{
                if(valor < 1){
                    throw new Error("Quantidade não pode ser menor que 1")
                }
                return true
            }),

            body("quantidade_estoque")
            .notEmpty()
            .withMessage("Quantidade em estoque obrigatória.")
            .isNumeric()
            .withMessage("Quantidade em estoque deve ser número.")
            .custom(valor =>{
                if(valor < 0){
                    throw new Error("Quantidade em estoque não pode ser negativa")
                }
                return true
            }),

            body("quantidade_min")
            .notEmpty()
            .withMessage("Quantidade mínima obrigatória.")
            .isNumeric()
            .withMessage("Quantidade mínima deve ser número.")

        ]
    }

    static validaEstoque(){
        return [
            body("nome")
            .notEmpty()
            .withMessage("Campo nome obrigatório"),

            body("quantidade_estoque")
            .notEmpty()
            .withMessage("Quantidade obrigatória")
            .isNumeric()
            .withMessage("Quantidade deve ser um número.")
            .custom(valor =>{
                if(valor < 1){
                    throw new Error("Quantidade não pode ser menor que 1")
                }
                return true
            })

        ]
    }

    static validaDelete(){
        return [
            param("id")
            .notEmpty()
            .withMessage("ID obrigatório")
            .isInt()
            .withMessage("ID deve ser um número inteiro")
        ]
    }

    static validaLista(){
        return [
            param("nome")
            .notEmpty()
            .withMessage("Nome obrigatório")
            .isString()
            .withMessage("Nome deve ser uma string")
        ]
    }
}
