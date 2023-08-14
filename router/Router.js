//Importamos todas las páginas
import Weather from "../pages/Weather/Weather";
import Proyect from "../pages/Proyect/Proyect";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
//Creamos un array de objetos con las rutas y las páginas de cada una de las partes de la aplicación
const routes = [
  {
    path: "/",
    component: Weather,
  },
  {
    path: "/proyect",
    component: Proyect,
  },
  {
    path: "/login",
    component: Login,
  },
];

//A partir de aquí hay dos funciones, una enruta nuestros componentes y otra da funcionalidad a nuestros anchors

export const router = () => {
  //Almacenar y detectar la ruta del navegdor
  const path = window.location.pathname;
  //Con destructuring sacamos la propiedad component del resultado de hacer una busqueda en el path del array routes coincida con el path que acabamos de almacenar
  const { component } = routes.find((route) => route.path === path) || {
    component: NotFound,
  };
  //Si existe la propiedad component imprimimos ese componente en el main.
  if (component) {
    component();
  }
};

window.addEventListener("popstate", router);
document.querySelector("DOMContentLoaded", router);

//Creamos la función que añade la funcionalidad a los anchors.
export const addLinkListeners = () => {
  const navLinks = document.querySelectorAll("nav a");
  //Recorremos los anchors y le damos un evento click a cada uno de ellos
  navLinks.forEach((link) => {
    //Le añadimos a cada uno un elemento click
    link.addEventListener("click", (ev) => {
      //Quitamos erl comportamniento por defecto de los links para que no recargue la página
      ev.preventDefault();
      //Recuperamos el enlace que tiene cada uno de los links en el href
      const href = link.getAttribute("href");
      //Vamos a controlar el historial de navegación empujando un nuevo estado al cambiar la URL pero sin recargar la página
      history.pushState(null, null, href);
      //Disparamos de nuevo la función router para que pinte el elemento correspondiente en nuestra aplicación
      router();
    });
  });
};
