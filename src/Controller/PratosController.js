import { Pratos } from "../Models/PratosModels.js";
import { PratosService } from "../Service/PratosService.js";

export class PratosController{

    static async buscarPratos(req, res){
        try{
            const result = await Pratos.listarPratos();

            if(result.rowCount === 0){
                throw new Error("Nenhum prato cadastrado.")
            }

            return res.status(200).json({Pratos: result.rows});
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    static async cadastrarPrato(req, res){
        const nome = req.body.nome

        try{
            await PratosService.temPrato(nome)

            const result = await Pratos.cadastrarPratos(nome);

            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    static async deletarPrato(req, res){
        const id = Number(req.params.id);

        try{
            const result = await PratosService.deletado(id);

            return res.status(200).json({
                message: "Prato deletado",
                prato: result.rows[0]
            })
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }
}