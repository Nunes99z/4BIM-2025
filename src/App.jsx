import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const [pensamento, setPensamento] = useState('');
  const [probleminha, setProbleminha] = useState('');
  const [serie, setSerie] = useState('');
  const [jogo, setJogo] = useState('');
  const [musica, setMusica] = useState('');
  const [genero, setGenero] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [poder, setPoder] = useState('');
  const [time, setTime] = useState('');

  const mudarEmail = (e) => {
    setEmail(e.target.value);
  }
  const mudarSenha = (e) => {
    setSenha(e.target.value);
  }
  const mudarIdade = (e) => {
    setIdade(e.target.value);
  }
  const mudarTelefone = (e) => {
    setTelefone(e.target.value);
  }
  const mudarInstagram = (e) => {
    setInstagram(e.target.value);
  }
  const mudarGithub = (e) => {
    setGithub(e.target.value);
  }
  const mudarPensamento = (e) => {
    setPensamento(e.target.value);
  }
  const mudarProbleminha = (e) => {
    setProbleminha(e.target.value);
  }
  const mudarSerie = (e) => {
    setSerie(e.target.value);
  }
  const mudarJogo = (e) => {
    setJogo(e.target.value);
  }
  const mudarMusica = (e) =>{
    setMusica(e.target.value);
  }
  const mudarGenero = (e) => {
    setGenero(e.target.value);
  }
  const mudarHabilidade = (e) => {
    setHabilidade(e.target.value);
  }
  const mudarPoder = (e) => {
    setPoder(e.target.value);
  }
  const mudarTime = (e) => {
    setTime(e.target.value);
  }
  const enviarForms = (e) => {
    e.preventDefault()
    fetch('https://api.alanleiser.com/user',{
      method: 'POST',
      body:JSON.stringify({email, password:senha})
    })
    console.log(`Email: ${email}, Senha: ${senha}`)
  }
  const info = {
    //colocar todas as informações do user + id e depois só colocar info dentro do stringify//
  }
  const enviarInfos = (e) => {
    e.preventDefault()
    fetch('https://api.alanleiser.com/user/ +id',{
      method: 'PATCH',
      body:JSON.stringify(info)
    })
    console.log(`Email: ${email}, Senha: ${senha}`)
  }

useEffect(() => {
  fetch("https://api.alanleiser.com/")
    .then((res) => res.json())
    .then((data) => console.log("API carregada:", data))
    .catch((err) => console.error("Erro:", err));
}, []);

return (
  <div className="container">
    <h1>Formulário de Cadastro</h1>
    <div className="campos">
      <form onSubmit={enviarForms}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={mudarEmail}
          placeholder="Digite seu email"
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={mudarSenha}
          placeholder="Digite sua senha"
        />

        <label>Idade</label>
        <input
          value={idade}
          onChange={mudarIdade}
          placeholder="Digite sua idade"
        />

        <label>Telefone</label>
        <input
          value={telefone}
          onChange={mudarTelefone}
          placeholder="Digite seu telefone"
        />

        <label>Instagram</label>
        <input
          value={instagram}
          onChange={mudarInstagram}
          placeholder="Digite seu @ do Instagram"
        />

        <label>GitHub</label>
        <input
          value={github}
          onChange={mudarGithub}
          placeholder="Digite seu GitHub"
        />

        <label>Pensamento</label>
        <input
          value={pensamento}
          onChange={mudarPensamento}
          placeholder="Um pensamento seu"
        />

        <label>Probleminha</label>
        <input
          value={probleminha}
          onChange={mudarProbleminha}
          placeholder="Tem algum probleminha?"
        />

        <label>Última série assistida</label>
        <input
          value={serie}
          onChange={mudarSerie}
          placeholder="Qual foi a última série?"
        />

        <label>Último jogo jogado</label>
        <input
          value={jogo}
          onChange={mudarJogo}
          placeholder="Qual foi o último jogo?"
        />

        <label>Música favorita</label>
        <input
          value={musica}
          onChange={mudarMusica}
          placeholder="Qual música você gosta?"
        />

        <label>Gênero musical</label>
        <input
          value={genero}
          onChange={mudarGenero}
          placeholder="Seu gênero musical favorito"
        />

        <label>Habilidade especial</label>
        <input
          value={habilidade}
          onChange={mudarHabilidade}
          placeholder="Sua habilidade especial"
        />

        <label>Poder especial</label>
        <input
          value={poder}
          onChange={mudarPoder}
          placeholder="Seu poder especial"
        />

        <label>Time que torce</label>
        <input
          value={time}
          onChange={mudarTime}
          placeholder="Qual seu time?"
        />

        <button type="submit">Enviar informações</button>
      </form>
    </div>
  </div>
);
}

export default App;
