import React from "react";
import "../Estilos/estilos.css";

export default function Cinco() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1>¿Las becas son solo para alumnos con altas calificaciones?</h1>
      <p>NO</p>
      <div>
        <a href="/Preguntas_Frecuentes" className="boton_volver">Inicio</a>
      </div>
    </article>
  );
}