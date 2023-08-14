import "./Login.css";

const template = () => {
  return `
  <h2>Login</h2>
  <p>Inicio de perfil o registro</p>
  `;
};

const Login = () => {
  document.querySelector("main").innerHTML = template();
};

export default Login;
