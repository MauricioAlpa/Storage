import {IngredientesModels} from "../Models/IngredientesModels.js";

export class IngredientesService{
     
    static async ingredienteExiste(dados){

        const temIngrediente = await IngredientesModels.findByName(dados.nome);

        if(temIngrediente){
            throw new Error("Ingrediente já cadastrado")
        }
    }

    static async temIngrediente(dados){
        const temIngrediente = await IngredientesModels.findByName(dados);

        if(!temIngrediente){
            throw new Error("Ingrediente não encontrado")
        }
    }

    static async temDeletar(id){
        
        const deletado = await IngredientesModels.deletaIngrediente(id);

        if(deletado.rowCount === 0){
            throw new Error("Ingrediente não encontrado")
        }
    }
}