import {db} from "../Config/database.js";

export class Pratos {
    static async listarPratos(){
        const query = 
        `
        SELECT * FROM pratos
        `;

        const result = await db.query(query);

        return result.rows
    }

    static async cadastrarPratos(dados){
        const query = 
        `
        INSERT INTO pratos(nome)
        VALUES($1)
        RETURNING id, nome
        `;

        const value = [dados];

        const result = await db.query(query, value)

        return result.rows[0];
    }

    static async findByName(nome){
        const query = 
        `
        SELECT * FROM pratos
        WHERE nome = $1
        `;

        const value = [nome]

        const result = await db.query(query, value);

        return result.rows[0]
    }
}