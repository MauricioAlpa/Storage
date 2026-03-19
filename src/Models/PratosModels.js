import {db} from "../Config/database.js";

export class Pratos {
    static async listarPratos(){
        const query = 
        `
        SELECT * FROM pratos
        `;

        const result = await db.query(query);

        return result
    }

    static async cadastrarPratos(dados){
        const query = 
        `
        INSERT INTO pratos(nome)
        VALUE($1)
        RETURNING id, nome
        `

        const value = [dados]
    }
}