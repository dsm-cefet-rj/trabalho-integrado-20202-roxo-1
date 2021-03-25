import React from "react";
import "../estilos/style.css";

const Login = () => {
  return (
    <div className="flexible">
      <form method="POST">
        <input type="text" placeholder="Digite seu email aqui" />
        <input type="password" id="senha" placeholder="Digite a senha aqui" />
        <input
          className="btn btn-block btn-primary"
          id="entrar"
          type="submit"
          value="Entrar"
        />
      </form>
    </div>
  );
};
export default Login;
