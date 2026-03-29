import { db } from "../Config/database.js";
import { handleDbError } from "../Middlewares/HandleDbError.js";
 
export class IngredientesModels {
    static async criarIngrediente(dados) {
        try {
            const query = `
            INSERT INTO ingredientes(nome, unidade, quantidade, quantidade_estoque, quantidade_min) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, nome, unidade, quantidade, quantidade_estoque, quantidade_min
            `;
 
            const values = [
                dados.nome,
                dados.unidade,
                dados.quantidade,
                dados.quantidade_estoque,
                dados.quantidade_min
            ];
 
            const result = await db.query(query, values);
 
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Ingrediente");
            throw error;
        }
    }
 
    static async findByName(nome) {
        try {
            const query = `SELECT * FROM ingredientes WHERE LOWER(nome) = LOWER($1)`;
            const result = await db.query(query, [nome]);
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Ingrediente");
            throw error;
        }
    }
 
    static async addQuantidadeEstoque(dados) {
        try {
            const query = `
            UPDATE ingredientes
            SET quantidade_estoque = COALESCE(quantidade_estoque, 0) + $1
            WHERE nome = $2
            RETURNING nome, quantidade_estoque
            `;
 
            const result = await db.query(query, [dados.quantidade_estoque, dados.nome]);
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Ingrediente");
            throw error;
        }
    }
 
    static async deletaIngrediente(id) {
        try {
            const query = `DELETE FROM ingredientes WHERE id = $1 RETURNING *`;
            const result = await db.query(query, [id]);
            return result;
        } catch (error) {
            if (error.code) handleDbError(error, "Ingrediente");
            throw error;
        }
    }
 
    static async listarIngredientes() {
        try {
            const result = await db.query(`SELECT * FROM ingredientes`);
            return result.rows;
        } catch (error) {
            if (error.code) handleDbError(error, "Ingrediente");
            throw error;
        }
    }
}