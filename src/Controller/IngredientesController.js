import { IngredientesService } from "../Service/IngredientesService.js";
import { IngredientesModels } from "../Models/IngredientesModels.js";


export class IngredientesController {
    static async criarIngrediente(req, res){

        const dados = req.body

        try{
            await IngredientesService.temIngrediente(dados)

            const ingrediente = await IngredientesModels.criarIngrediente(dados)

            return res.status(201).json(ingrediente);

        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    static async addQuantidade(req, res){
        const dados = req.body;

        try{
            await IngredientesService.adicionarEstoque(dados);


            await IngredientesModels.addQuantidadeEstoque(dados)

            return res.status(200).json({
                message: "Estoque atualizado"
            });

        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    
}