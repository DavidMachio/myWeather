import "./Header.css";

const template = () => {
  return `
    <h1>Origin Weather</h1>
    <nav>
      <ul>
        <li>
          <a href="/">Weather</a>
        </li>
        <li>
          <a href="/proyect">Proyect</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
    `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
