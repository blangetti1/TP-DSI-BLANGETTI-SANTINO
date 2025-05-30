import React from "react";
import "../Estilos/estilos.css";
import { Link } from "react-router-dom";

function Formulario_Postulacion() {
  return (
    <article>
      <img src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1" width="300" alt="Logo UTN" />
      <h1>Formulario de Postulación</h1>
      <form action="https://formspree.io/f/mdkggqor" method="POST" className="formulario">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="Apellido">Apellido:</label>
        <input type="text" id="Apellido" name="Apellido" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="anio">Año de Ingreso:</label>
        <input type="number" id="anio" name="anio" required />

        <label htmlFor="Legajo">Legajo:</label>
        <input type="number" id="Legajo" name="Legajo" required />

        <label htmlFor="file">Foto de DNI (frente y reverso):</label>
        <input type="file" id="file" name="file" required />

        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
    </article>
  );
}

export default Formulario_Postulacion;