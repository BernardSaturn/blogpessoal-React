export default interface UsuarioLogin {
    id: number; // ID do usuário
    nome: string; // Nome completo do usuário
    usuario: string; // Nome de usuário (login)
    senha: string; // Senha do usuário
    foto: string; // URL da foto do usuário
    token: string; // Token de autenticação do usuário
}
