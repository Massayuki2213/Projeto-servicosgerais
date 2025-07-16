import "./style.css";import React, { useState } from "react";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a lógica de autenticação (ex: Firebase, API)
    console.log("Tentando login com:", { email, senha });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar no ServiFácil</h2>

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Digite seu e-mail"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Digite sua senha"
        />

        <button type="submit">Entrar</button>

        <p className="link-cadastro">
          Ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}
