import {db} from "../Config/database.js";

export class IngredientesModels{
    static async criarIngrediente(dados){
        try{
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
        }catch(error){
            if(error.code === "23505"){
                throw new Error("Ingrediente já existe");
            }
        }
    }

    static async findByName(nome){
        const query = `SELECT * FROM ingredientes WHERE nome = $1`;
        const value = [nome];

        const result = await db.query(query,value);

        return result.rows[0]
    }

    static async addQuantidadeEstoque(dados){
        const query = `
        UPDATE ingredientes
        SET quantidade_estoque = COALESCE(quantidade_estoque, 0) + $1
        WHERE nome = $2
        RETURNING nome, quantidade_estoque
        `;
        const value = [dados.quantidade_estoque, dados.nome];

        const result = await db.query(query, value);

        return result.rows[0];
    }

    static async deletaIngrediente(id){
        const query = 
        `
        DELETE FROM ingredientes
        WHERE id = $1
        RETURNING *
        `;

        const value = [id];

        const result = await db.query(query,value)

        return result;
    }

    static async listarIngredientesByName(nome){
        const query = 
        `
        SELECT * FROM ingredientes
        WHERE nome ILIKE $1
        `;

        const value = [nome];

        const result = await db.query(query, value);

        return result.rows[0];
    }

    static async listarIngredientes(){
        const query = 
        `
        SELECT * FROM ingredientes
        `

        const result = await db.query(query);

        return result.rows
    }
}