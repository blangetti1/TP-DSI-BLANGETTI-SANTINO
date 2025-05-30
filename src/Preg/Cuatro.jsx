import React from "react";
import "../Estilos/estilos.css";

export default function Cuatro() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1>¿Dónde se publican las convocatorias oficiales de becas?</h1>
      <p>
        Las convocatorias oficiales de becas se publican principalmente en los sitios web oficiales de las instituciones educativas, en portales gubernamentales, y también pueden ser notificadas a través del correo electrónico institucional o carteleras de la universidad.
      </p>
      <div>
        <a href="/Preguntas_Frecuentes" className="boton_volver">Inicio</a>
      </div>
    </article>
  );
}