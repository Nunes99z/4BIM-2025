import React from "react";
import "./App.css";

function Formulario() {
  return (
    <div className="container">
      <h1>Formulário de Informações</h1>

      <div className="campos">
        <label>Nome</label>
        <input placeholder="Digite seu nome" />
        
        <label>Idade</label>
        <input placeholder="Digite sua idade" />

        <label>Telefone</label>
        <input placeholder="Digite seu telefone" />

        <label>Instagram</label>
        <input placeholder="Digite seu @ do Instagram" />

        <label>GitHub</label>
        <input placeholder="Digite seu GitHub" />

        <label>Pensamento</label>
        <input placeholder="Um pensamento seu" />

        <label>Probleminha</label>
        <input placeholder="Tem algum probleminha?" />

        <label>Última série assistida</label>
        <input placeholder="Qual foi a última série?" />

        <label>Último jogo jogado</label>
        <input placeholder="Qual foi o último jogo?" />

        <label>Música favorita</label>
        <input placeholder="Qual música você gosta?" />

        <label>Gênero musical</label>
        <input placeholder="Seu gênero musical favorito" />

        <label>Habilidade especial</label>
        <input placeholder="Sua habilidade especial" />

        <label>Poder especial</label>
        <input placeholder="Seu poder especial" />

        <label>Time que torce</label>
        <input placeholder="Qual seu time?" />

        <button>Enviar informações</button>
      </div>
    </div>
  );
}

export default Formulario;
