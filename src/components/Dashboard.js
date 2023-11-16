import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Lógica para obter o nome do usuário após o login (do local storage, por exemplo)
  useEffect(() => {
    const loggedInUserName = localStorage.getItem("userName");
    if (loggedInUserName) {
      setUserName(loggedInUserName);
    }
  }, []);

  const handleLogout = () => {
    // Lógica para fazer logout
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/"); // Redirecionar para a página de login após o logout
  };

  return (
    <div>
      <h1>Bem-vindo, {userName}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;