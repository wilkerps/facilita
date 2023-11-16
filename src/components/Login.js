import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1>Seja bem-vindo!</h1>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
