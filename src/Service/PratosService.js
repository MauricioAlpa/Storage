import { Pratos } from "../Models/PratosModels.js";

export class PratosService{
    static async temPrato(dados){
        const temPrato = await Pratos.findByName(dados);

        if(temPrato){
            throw new Error("Prato já cadastrado")
        }
    }

    static async deletado(id){
                
        const deletado = await Pratos.deletaPrato(id);
                
        if(deletado.rowCount === 0){
            throw new Error("Prato não encontrado")
        }else{
            return deletado;
        }
    }
}