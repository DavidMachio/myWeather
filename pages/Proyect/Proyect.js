import "./Proyect.css";

const template = () => {
  return `
  <h2>Proyect</h2>
  <p>Proceso del proyecto</p>
  `;
};

const Proyect = () => {
  document.querySelector("main").innerHTML = template();
};

export default Proyect;
