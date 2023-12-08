// Importando os módulos necessários
import React, { useState } from 'react';

// Componente da tela de autenticação
const Autenticacao = () => {
  // Estados para armazenar as credenciais
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Lógica de autenticação (substitua pela lógica real)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      setAutenticado(true);
      alert('Autenticação bem-sucedida!');
    } else {
      setAutenticado(false);
      alert('Falha na autenticação. Verifique suas credenciais.');
    }
  };

  // Se o usuário estiver autenticado, exibe uma mensagem
  if (autenticado) {
    return <p>Você está autenticado!</p>;
  }

  // Se não estiver autenticado, exibe o formulário de autenticação
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Autenticacao;