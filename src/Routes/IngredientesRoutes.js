import { Router } from "express";
import { IngredientesController } from "../Controller/IngredientesController.js";
import { Validacoes } from "../Validation/IngredientesValidations.js";
import { handleValidation } from "../Middlewares/HandleValidation.js";

export const IngredientesRouter =  Router();

IngredientesRouter.post('/addIngrediente', Validacoes.validaCampos(), handleValidation, IngredientesController.criarIngrediente);

IngredientesRouter.patch('/atualizaQuantidade', Validacoes.validaEstoque(), handleValidation, IngredientesController.addQuantidade);

IngredientesRouter.delete('/deletarAlimento/:id', Validacoes.validaDelete(), handleValidation, IngredientesController.deletaIngredienteById);

IngredientesRouter.get('/listarPorNome/:nome', Validacoes.validaLista(), handleValidation, IngredientesController.listarIngredientes);
