import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cresol from "./Componentes/Cresol";
import Inicio from "./Componentes/Inicio";
import Inicio_Becas from "./Componentes/Inicio_Becas";
import MB from "./Componentes/MB";
import PG from "./Componentes/PG";
import Sau from "./Componentes/Sau";  
import Preguntas_Frecuentes from "./Preg/Preguntas_Frecuentes";
import Uno from "./Preg/Uno";
import Dos from "./Preg/Dos";
import Tres from "./Preg/Tres";
import Cuatro from "./Preg/Cuatro";
import Cinco from "./Preg/Cinco";
import Duda_Puntual from "./Preg/Duda_Puntual";
import "./Estilos/estilos.css";
import FormularioPostulacion from "./Componentes/FormularioPostulacion";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cresol" element={<Cresol />} />
        <Route path="/inicio-becas" element={<Inicio_Becas />} />
        <Route path="/mb" element={<MB />} />
        <Route path="/pg" element={<PG />} />
        <Route path="/sau" element={<Sau />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas_Frecuentes />} />
        <Route path="Uno" element={<Uno />} />
        <Route path="Dos" element={<Dos />} />
        <Route path="Tres" element={<Tres />} />
        <Route path="Cuatro" element={<Cuatro />} />
        <Route path="Cinco" element={<Cinco />} />
        <Route path="/duda-puntual" element={<Duda_Puntual />} />
        <Route path="/FormularioPostulacion" element={<FormularioPostulacion />} />
        <Route path="/Preg/Preguntas_Frecuentes" element={<Preguntas_Frecuentes />} />
        <Route path="/Componentes/Inico_Becas" element={<Inicio_Becas />} />
        <Route path="Preguntas_Frecuentes" element={<Preguntas_Frecuentes/>} />

      </Routes>
    </Router>
  );
} 

export default App;
