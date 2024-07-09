import FormularioPostagem from "../formularioPostagem/FormularioPostagem"; // Importa o componente FormularioPostagem

import "reactjs-popup/dist/index.css"; // Importa os estilos padrão do pacote reactjs-popup
import Popup from "reactjs-popup"; // Importa o componente Popup do pacote reactjs-popup

import "./ModalPostagem.css"; // Importa os estilos personalizados para o modal

function ModalPostagem() {
  return (
    <>
      {/* O componente Popup é utilizado para criar um modal */}
      <Popup
        // Define o botão que aciona a abertura do modal
        trigger={
          <button className="border rounded px-4 hover:bg-white hover:text-zinc-700">
            Nova postagem
          </button>
        }
        modal // Define que o popup será um modal
      >
        {/* O conteúdo do modal */}
        <div>
          {/* Componente FormularioPostagem será renderizado dentro do modal */}
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem; // Exporta o componente ModalPostagem para uso em outros arquivos
