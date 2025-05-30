import React from "react";
import "../Estilos/estilos.css";

export default function Tres() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1>¿Se puede renovar una beca cada año? ¿Qué condiciones se deben cumplir?</h1>
      <p>
        Sí, muchas becas pueden renovarse cada año, pero para mantener el beneficio es necesario cumplir ciertas condiciones. Las más comunes son: mantener un promedio académico mínimo, aprobar un determinado número de materias o créditos por ciclo lectivo, y en algunos casos, presentar nuevamente documentación socioeconómica actualizada. También puede exigirse la participación en actividades académicas, sociales o de voluntariado vinculadas al programa de becas.
      </p>
      <div>
        <a href="/Preguntas_Frecuentes" className="boton_volver">Inicio</a>
      </div>
    </article>
  );
}