import React from "react";
import "../Estilos/estilos.css";
import { Link } from "react-router-dom";

export default function PG() {
  return (
    <>
      <article>
        <img
          src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
          width="300"
          alt="Logo UTN"
        />
        <h1>BECA PROGRESAR</h1>
        <p className="justificado">
          La Convocatoria 2025 para Progresar Trabajo estará abierta del 21 de abril al 30 de noviembre. Recordá que no se requiere de gestores ni intermediarios. No compartas datos personales, claves ni documentos con terceros. El trámite es personal, gratuito y se realiza a través de los canales oficiales.
        </p>
        <strong>Requisitos para acceder a las Becas Progresar</strong>
        <ul>
          <li>Progresar nivel obligatorio</li>
          <li>Progresar nivel superior</li>
          <li>Progresar Trabajo</li>
        </ul>
      </article>
      <Link to="/inicio-becas" className="boton_inico">Inico</Link>
      <div>
      <Link to="/FormularioPostulacion" className="boton_postulacion">Quiero Postularme</Link>
      </div>
    </>
  );
}