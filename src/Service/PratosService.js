import { Pratos } from "../Models/PratosModels.js";

export class PratosService{
    static async temPrato(dados){
        const temPrato = await Pratos.findByName(dados);

        if(temPrato){
            throw new Error("Prato já cadastrado")
        }
    }
}