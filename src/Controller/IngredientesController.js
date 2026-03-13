import { IngredientesService } from "../Service/IngredientesService.js";

export class IngredientesController {
    static async criarIngrediente(req, res){


        const dados = req.body

        try{
            const campos = [
            "nome",
            "unidade",
            "quantidade",
            "quantidade_estoque",
            "quantidade_min"
            ];

            const campoFaltando = campos.find(campo => dados[campo] == null);

            if (campoFaltando) {
                throw new Error(`Campo obrigatório: ${campoFaltando}`);
            }

            const newIngrediente = await IngredientesService.temIngrediente(dados);

            return res.status(201).json(newIngrediente);

        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }
}