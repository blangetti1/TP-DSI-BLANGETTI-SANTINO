import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/estilos.css";

export default function SAU() {
  return (
    <>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1 className="titulo">BECA SAU</h1>
      <article>
        <p className="justificado">
          El Área de Becas y Ayudas Económicas tiene como eje fundamental de su gestión procurar el acceso al derecho humano de la educación a toda la población universitaria, especialmente a aquella que presenta condiciones de vulnerabilidad socioeconómica, procurando el desarrollo integral del estudiante de manera que se garantice su permanencia, avance académico y graduación. Llevando a cabo dicho eje a partir del apoyo personalizado para favorecer la continuidad de los estudios y el bienestar general.
          Además, corresponde administrar los procesos de asignación, control y seguimiento de becas; así como los servicios complementarios que surjan como alternativa para atender las necesidades socioeconómicas del estudiantado universitario.
        </p>
      </article>
      <Link to="/inicio-becas" className="boton_inico">Inico</Link>
      <div>
      <Link to="/FormularioPostulacion" className="boton_postulacion">Quiero Postularme</Link>
      </div>
    </>
  );
}