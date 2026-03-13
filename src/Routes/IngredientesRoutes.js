import { Router } from "express";
import { IngredientesController } from "../Controller/IngredientesController.js";

export const IngredientesRouter =  Router();

IngredientesRouter.post('/addIngrediente', IngredientesController.criarIngrediente)

