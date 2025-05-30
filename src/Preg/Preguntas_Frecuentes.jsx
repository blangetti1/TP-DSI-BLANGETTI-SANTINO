import React from "react";
import "../Estilos/estilos.css";
import { Link } from "react-router-dom";
function Preguntas_Frecuentes() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN FRSF"
      />
      <h1>Preguntas Frecuentes</h1>
      <ul className="lista_color">
        <li>
          <a href="/Uno" className="boton_preg">
            ¿son los requisitos para obtener una beca?
          </a>
        </li>
        <li>
          <a href="/Dos" className="boton_preg">
            ¿Que Documentos necesito para postularme?
          </a>
        </li>
        <li>
          <a href="/Tres" className="boton_preg">
            ¿Se puede renovar una beca cada año? ¿Qué condiciones se deben cumplir?
          </a>
        </li>
        <li>
          <a href="/Cuatro" className="boton_preg">
            ¿Dónde se publican las convocatorias oficiales de becas?
          </a>
        </li>
        <li>
          <a href="/Cinco" className="boton_preg">
            ¿Las becas son solo para alumnos con altas calificaciones?
          </a>
        </li>
      </ul>
      <p>
        <a href="duda_puntual.html" className="boton_preg_puntual">
          ¿Seguis con dudas?
        </a>
      </p>
      <div>
      <Link to="/Componentes/Inico_Becas" className="boton_volver">Inicio</Link>      
      </div>
    </article>
  );
}

export default Preguntas_Frecuentes;