import React from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

// Define a interface para as propriedades do componente CardPostagem
interface CardPostagemProps {
  post: Postagem; // Espera uma propriedade post do tipo Postagem
}

// Componente CardPostagem que recebe uma propriedade post
function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      {/* Parte superior do card */}
      <div>
        {/* Seção do cabeçalho do card com a foto e nome do usuário */}
        <div className="flex w-full bg-zinc-400 py-2 px-4 items-center gap-4">
          {/* Foto do usuário */}
          <img className='w-14 rounded-full' src="https://github.com/BernardSaturn.png" alt="" />
          {/* Nome do usuário */}
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        {/* Conteúdo principal do card */}
        <div className='p-4 '>
          {/* Título da postagem */}
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          {/* Texto da postagem */}
          <p>{post.texto}</p>
          {/* Descrição do tema da postagem */}
          <p>Tema: {post.tema?.descricao}</p>
          {/* Data da postagem formatada */}
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      {/* Parte inferior do card com botões de ação */}
      <div className="flex">
        {/* Link para editar a postagem */}
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-zinc-400 hover:bg-zinc-700 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        {/* Link para deletar a postagem */}
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem;
