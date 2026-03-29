import { db } from "../Config/database.js";
import { handleDbError } from "../Middlewares/HandleDbError.js";
 
export class Pratos {
    static async listarPratos() {
        try {
            const result = await db.query(`SELECT * FROM pratos`);
            return result.rows;
        } catch (error) {
            if (error.code) handleDbError(error, "Prato");
            throw error;
        }
    }
 
    static async cadastrarPratos(dados) {
        try {
            const query = `
            INSERT INTO pratos(nome)
            VALUES($1)
            RETURNING id, nome
            `;
 
            const result = await db.query(query, [dados]);
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Prato");
            throw error;
        }
    }
 
    static async findByName(nome) {
        try {
            const query = `SELECT * FROM pratos WHERE nome = $1`;
            const result = await db.query(query, [nome]);
            return result.rows[0];
        } catch (error) {
            if (error.code) handleDbError(error, "Prato");
            throw error;
        }
    }
 
    static async deletaPrato(id) {
        try {
            const query = `DELETE FROM pratos WHERE id = $1 RETURNING *`;
            const result = await db.query(query, [id]);
            return result;
        } catch (error) {
            if (error.code) handleDbError(error, "Prato");
            throw error;
        }
    }
}