import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom
import Tema from "../../../models/Tema"; // Importa o modelo Tema

// Define a interface para as props do componente CardTemas
interface CardTemaProps {
  tema: Tema; // A prop 'tema' é do tipo Tema
}

// Componente CardTemas que recebe um tema como prop
function CardTemas({ tema }: CardTemaProps) {
  return (
    // Container principal do card com classes Tailwind CSS para estilização
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      {/* Cabeçalho do card */}
      <header className="py-2 px-6 bg-zinc-700 text-white font-bold text-2xl">
        Tema
      </header>
      {/* Descrição do tema */}
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
      {/* Container para os botões de editar e deletar */}
      <div className="flex">
        <Link
          to={`/editarTema/${tema.id}`}
          className="w-full text-slate-100 bg-zinc-400 hover:bg-zinc-600 flex items-center justify-center py-2"
        >
          <button>Editar</button> {/* Botão para editar o tema */}
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button> {/* Botão para deletar o tema */}
        </Link>
      </div>
    </div>
  );
}

export default CardTemas; // Exporta o componente CardTemas para uso em outros arquivos
