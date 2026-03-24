import { IngredientesService } from "../Service/IngredientesService.js";
import { IngredientesModels } from "../Models/IngredientesModels.js";


export class IngredientesController {
    static async criarIngrediente(req, res){

        const dados = req.body

        try{
            await IngredientesService.ingredienteExiste(dados)

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
            await IngredientesService.temIngrediente(dados);


            const result = await IngredientesModels.addQuantidadeEstoque(dados)

            return res.status(200).json({
                message: "Estoque atualizado",
                ingrediente: result.rows
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
        
            const result = await IngredientesService.temDeletar(id);

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
        const nome = req.params.nome.trim();

    
        try{
            await IngredientesService.temIngrediente(nome)

            const result = await IngredientesModels.findByName(nome)

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