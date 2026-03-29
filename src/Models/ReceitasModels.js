import { db } from "../Config/database.js";
import { handleDbError } from "../Middlewares/HandleDbError.js";
 
export class Receitas {
    static async adicionaReceita(dados) {
        try {
            const query = `
            INSERT INTO receitas(prato_id, ingrediente_id, quantidade)
            VALUES($1, $2, $3)
            RETURNING id, prato_id, ingrediente_id, quantidade
            `;
 
            const result = await db.query(query, [dados.prato_id, dados.ingrediente_id, dados.quantidade]);
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Receita");
            throw error;
        }
    }
 
    static async listarReceitas() {
        try {
            const result = await db.query(`SELECT * FROM receitas`);
            return result.rows;
        } catch (error) {
            if (error.code) handleDbError(error, "Receita");
            throw error;
        }
    }
 
    static async deletaReceita(id) {
        try {
            const query = `DELETE FROM receitas WHERE id = $1 RETURNING *`;
            const result = await db.query(query, [id]);
            return result;
        } catch (error) {
            if (error.code) handleDbError(error, "Receita");
            throw error;
        }
    }
}