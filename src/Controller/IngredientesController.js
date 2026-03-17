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
    
    static async deletaIngredienteById(req, res){
        const id = Number(req.params.id);

        try{
            const result = await IngredientesModels.deletaIngrediente(id);

            if(result.rowCount === 0){
                throw new Error("Ingrediente não encontrado.")
            }

            return res.status(200).json({
                message: "Ingrediente deletado",
                data: result.rows[0]
            })

        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    static async listarIngredientesByName(req, res){
        const nome = String(req.params.nome);
    
        try{
            const result = await IngredientesModels.listarIngredientesByName(nome)

            console.log(result)

            if(!result){
                throw new Error("Ingrediente não existe")
            }

            return res.status(200).json({
                id: result.id,
                nome: result.nome
            })
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    static async listarIngredientes(req, res){
        try{
            const result = await IngredientesModels.listarIngredientes();
            
            return res.status(200).json(result)
        }catch{
            return res.status(403).json({
                error: "Erro de conexão de servidor."
            })
        }
    }
}