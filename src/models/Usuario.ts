import Postagem from "./Postagem"; // Importa a interface Postagem do arquivo Postagem

// Define a interface Usuario
export default interface Usuario {
    id: number; // ID do usuário
    nome: string; // Nome completo do usuário
    usuario: string; // Nome de usuário (login)
    senha: string; // Senha do usuário
    foto: string; // URL da foto do usuário
    postagem?: Postagem[] | null; // Lista de postagens associadas ao usuário (opcional, pode ser nulo)
}
