import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/estilos.css";

export default function MB() {
  return (
    <article>
      <img src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1" width="300" alt="Logo UTN" />
      <h1>BECA MB</h1>
      <p className="justificado">
        La beca MB está destinada a estudiantes que demuestren mérito académico y compromiso con la comunidad universitaria. Para más información sobre requisitos y proceso de postulación, consulta el sitio oficial o comunícate con la Secretaría de Bienestar Estudiantil.
      </p>
      <Link to="/inicio-becas" className="boton_inico">Inico</Link>
      <div>
      <Link to="/FormularioPostulacion" className="boton_postulacion">Quiero Postularme</Link>
      </div>
    </article>
  );
}