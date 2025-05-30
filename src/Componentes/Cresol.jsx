import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/estilos.css";

export default function Cresol() {
  return (
    <article>
      <img src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1" width="300" alt="Logo UTN" />
      <h1>BECA CRESOL</h1>
      <p className="justificado">
        La Municipalidad de San Francisco, a través de la Secretaría de Vinculación Educativa, Tecnológica y Productiva, informa que ya se encuentran disponibles las planillas de inscripción para acceder a los créditos Solidarios Cresol, destinados a todas aquellas personas que inician una carrera de nivel superior o universitario y están interesadas en obtener este beneficio.
      </p>
      <Link to="/inicio-becas" className="boton_inico">Inico</Link>
      <div>
      <Link to="/FormularioPos" className="boton_postulacion">Quiero Postularme</Link>
      </div>
    </article>
  );
}