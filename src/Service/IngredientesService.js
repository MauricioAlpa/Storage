import {IngredientesModels} from "../Models/IngredientesModels.js";

export class IngredientesService{
     
    static async temIngrediente(dados){
        
        if(dados.quantidade_min < 2){
            throw  new Error("Quantidade mínima inválida.")
        }

        const temIngrediente = await IngredientesModels.findByName(dados.nome);

        if(temIngrediente){
            throw new Error("Ingrediente já cadastrado")
        }

        return await IngredientesModels.addIngrediente(dados);
    }
}