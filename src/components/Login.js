import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      if (response.ok) {
        const { token, nome } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("userName", nome); // Armazenando o nome do usuário
        navigate("/dashboard");
      } else {
        setErrorMessage("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setErrorMessage("Erro ao tentar fazer login");
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1>Seja bem-vindo!</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <Link to="/passwd">Esqueceu a sua senha? clique e altere-a!</Link>
    </div>
  );
}

export default Login;
