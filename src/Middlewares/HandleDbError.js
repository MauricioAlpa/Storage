export function handleDbError(error, entidade = "Registro") {
    switch (error.code) {
        case "23505":
            throw new Error(`${entidade} já existe`);
        case "23503":
            throw new Error(`Referência inválida: um dos dados informados não existe no banco`);
        case "23502":
            throw new Error(`Campo obrigatório não informado`);
        case "08006":
        case "08001":
        case "08004":   
            throw new Error("Falha na conexão com o banco de dados");
        default:
            throw new Error(`Erro no banco de dados: ${error.message}`);
    }
}