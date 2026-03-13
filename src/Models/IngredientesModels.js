import {db} from "../Config/database.js";

export class IngredientesModels{
    static async criarIngrediente(dados){
        const query = `INSERT INTO ingredientes(nome, unidade, quantidade, quantidade_estoque, quantidade_min) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, nome, unidade, quantidade, quantidade_estoque, quantidade_min
        `;

        const values = [
            dados.nome,
            dados.unidade,
            dados.quantidade,
            dados.quantidade_estoque,
            dados.quantidade_min
        ]

        const result = await db.query(query, values);

        return result.rows[0];
    }

    static async findByName(nome){
        const query = `SELECT * FROM ingredientes WHERE nome = $1`;
        const value = [nome];

        const result = await db.query(query,value);

        return result.rows[0]
    }
}