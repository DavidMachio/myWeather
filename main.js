import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { router, addLinkListeners } from "./router/Router";

Header();
Footer();
//Con la apertura de la aplicación lanzamos nuestro router para que detecte las paginas
router();
//Y además le añadimos el escuchador de eventos a los anchors
addLinkListeners();
