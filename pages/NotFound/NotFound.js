import "./NotFound.css";

const template = () => {
  return `
  <h2>Not Found</h2>
  `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
