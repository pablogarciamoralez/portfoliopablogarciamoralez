import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar2 from "./Components/NavBar/NavBar";

import Home from "./Components/Home/Home";
// import TecnologiasHerramientas from "./Components/TecnologiasHerramientas/TecnologiasHerramientas";
// import Habilidades from "./Components/Habilidades/Habilidades";
// import Proyectos from "./Components/Proyectos/Proyectos";
// import Contacto from "./Components/Contacto/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <TecnologiasHerramientas />
      <Habilidades />
      <Proyectos />
      <Contacto /> */}
    </div>
  );
}

export default App;
