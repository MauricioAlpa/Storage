import {IngredientesModels} from "../Models/IngredientesModels.js";

export class IngredientesService{
     
    static async temIngrediente(dados){

        const temIngrediente = await IngredientesModels.findByName(dados.nome);

        if(temIngrediente){
            throw new Error("Ingrediente já cadastrado")
        }
    }

    static async adicionarEstoque(dados){
        const temIngrediente = await IngredientesModels.findByName(dados.nome);

        if(!temIngrediente){
            throw new Error("Ingrediente não encontrado")
        }
    }
}