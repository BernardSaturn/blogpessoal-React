import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  // Obtendo o contexto de autenticação
  const { usuario } = useContext(AuthContext);

  // Variável para armazenar o componente do rodapé
  let footerComponent;

  // Obtendo o ano atual
  let data = new Date().getFullYear();

  // Verifica se o usuário está logado (token não está vazio)
  if (usuario.token !== "") {
    // Define o componente do rodapé quando o usuário está logado
    footerComponent = (
      <>
        <div className="flex justify-center bg-zinc-900 text-white">
          <div className="container flex flex-col items-center py-4">
            {/* Texto de copyright */}
            <p className="text-xl font-bold">
              Blog pessoal Generation | Copyright: {data}
            </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            {/* Ícones das redes sociais */}
            <div className="flex gap-2">
              <LinkedinLogo size={48} weight="bold" />
              <InstagramLogo size={48} weight="bold" />
              <FacebookLogo size={48} weight="bold" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {footerComponent}{" "}
      {/* Renderiza o componente do rodapé se o usuário estiver logado */}
    </>
  );
}

export default Footer;
