import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Passwd() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [userFound, setUserFound] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para verificar se o usuário existe no backend
    // Mock para simular uma busca no banco de dados
    const isUserFound = Math.random() > 0.5; // Simulação de busca
    setUserFound(isUserFound);
    // Após enviar, redirecione para a página de confirmação
    // history.push("/confirm-reset");
  };

  const handleBack = () => {
    // Redirecionar para a página de login
    history("/");
  };

  return (
    <div>
      <h1>Redefinir Senha</h1>
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
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {userFound !== null && (
        <p>
          {userFound
            ? "Usuário encontrado. Confira seu email para redefinir a senha."
            : "Usuário não encontrado. Verifique suas credenciais."}
        </p>
      )}
      <button onClick={handleBack}>Cancelar</button>
    </div>
  );
}

export default Passwd;
