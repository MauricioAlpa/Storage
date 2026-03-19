import { Router } from "express";
import { PratosController } from "../Controller/PratosController.js";

export const PratosRouter = Router();

PratosRouter.get('/listarPratos', PratosController.buscarPratos)