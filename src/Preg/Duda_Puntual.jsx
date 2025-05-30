import React from "react";
import "../Estilos/estilos.css";

export default function DudaPuntual() {
  return (
    <>
      <article>
        <img
          src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
          width="300"
          alt="Logo UTN"
        />
        <h1>Escribinos tu duda</h1>
        <p>Escriba aquí su duda y se la contestaremos a la brevedad</p>
      </article>
      <form
        action="https://formspree.io/f/mdkggqor"
        method="POST"
        className="formulario"
      >
        <h2>¿Tenés alguna duda? Escribinos</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensaje">Tu duda:</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
        <input type="hidden" name="_redirect" value="https://tusitio.com/gracias.html" />
        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
      <a href="/Inicio_Becas" className="boton_volver">Inicio</a>
    </>
  );
}