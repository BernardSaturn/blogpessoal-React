import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Função para cadastrar um usuário
export const cadastrarUsuario = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.post(url, dados); // Faz uma requisição POST para cadastrar um usuário
    setDados(resposta.data); // Atualiza os dados com a resposta da API
};

// Função para realizar login
export const login = async (url: string, dados: any, setDados: Function) => {
    const resposta = await api.post(url, dados); // Faz uma requisição POST para realizar login
    setDados(resposta.data); // Atualiza os dados com a resposta da API
};

// Função para buscar dados da API
export const buscar = async (url: string, setDados: Function, header: any) => {
    const resposta = await api.get(url, header); // Faz uma requisição GET para buscar dados da API
    setDados(resposta.data); // Atualiza os dados com a resposta da API
};

// Função para cadastrar dados na API
export const cadastrar = async (url: string, dados: any, setDados: Function, header: any) => {
    const resposta = await api.post(url, dados, header); // Faz uma requisição POST para cadastrar dados na API
    setDados(resposta.data); // Atualiza os dados com a resposta da API
};

// Função para atualizar dados na API
export const atualizar = async (url: string, dados: any, setDados: Function, header: any) => {
    const resposta = await api.put(url, dados, header); // Faz uma requisição PUT para atualizar dados na API
    setDados(resposta.data); // Atualiza os dados com a resposta da API
};

// Função para deletar dados na API
export const deletar = async (url: string, header: any) => {
    await api.delete(url, header); // Faz uma requisição DELETE para deletar dados na API
};
