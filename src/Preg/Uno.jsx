import React from "react";
import "../Estilos/estilos.css";

export default function Uno() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1>¿Cuáles son los requisitos para obtener una beca?</h1>
      <p>
        Los requisitos para obtener una beca dependen del tipo y la institución que la otorga. Generalmente, se solicita un buen promedio académico, comprobación de la situación económica familiar, presentación de documentación personal (como DNI, constancia de estudios o certificados), y en algunos casos, cartas de recomendación, carta de motivación y participación en actividades extracurriculares, deportivas o comunitarias. Algunas becas también exigen mantener un rendimiento mínimo una vez otorgadas.
      </p>
      <div>
        <a href="/Preguntas_Frecuentes" className="boton_volver">Inicio</a>
      </div>
    </article>
  );
}