import Tema from './Tema'; // Importa a interface Tema do arquivo Tema
import Usuario from './Usuario'; // Importa a interface Usuario do arquivo Usuario

// Define a interface Postagem
export default interface Postagem {
  id: number; // ID da postagem
  titulo: string; // Título da postagem
  texto: string; // Texto da postagem
  data: string; // Data da postagem, representada como string
  tema: Tema | null; // Objeto tema relacionado à postagem, que pode ser nulo
  usuario: Usuario | null; // Objeto usuario relacionado à postagem, que pode ser nulo
}
