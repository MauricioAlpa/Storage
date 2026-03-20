import { Router } from "express";
import { handleValidation } from "../Middlewares/HandleValidation.js";
import { PratosController } from "../Controller/PratosController.js";
import { Validacoes } from "../Validation/PratosValidation.js";

export const PratosRouter = Router();

PratosRouter.get('/listarPratos', PratosController.buscarPratos);

PratosRouter.post('/addPratos', Validacoes.validaCampos(), handleValidation, PratosController.cadastrarPrato)