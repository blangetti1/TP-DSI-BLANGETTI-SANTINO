import React from "react";
import "../Estilos/estilos.css";
import { Link } from "react-router-dom";
export default function InicioBecas() {
  return (
    <main>
      <header>
        <img src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1" width="300" alt="Logo UTN" />
        <h1>Bienvenido al Portal de Becas</h1>
      </header>
      <section>
        <p className="justificado">
          Aquí podrás encontrar toda la información sobre las becas disponibles, requisitos y formularios de inscripción. Selecciona la beca que te interesa para conocer más detalles o postularte.
        </p>
        {/* Aquí puedes agregar enlaces o botones a los diferentes tipos de becas */}
        <div className="becas-lista">
          <a href="/Cresol" className="boton_beca" class="boton_becas">Beca CRESOL</a>
          <a href="/MB" className="boton_beca" class="boton_becas">Beca Manuel Belgrano</a>
          <a href="/PG" className="boton_beca" class="boton_becas">Beca Progresar</a>
          <a href="/SAU" className="boton_beca" class="boton_becas">Beca SAU</a>
          <a href="Preg/Preguntas_Frecuentes" className="boton_beca" class="boton_becas">Preguntas Frecuentes</a>
        
          {/* Agrega más enlaces según tus componentes */}
        </div>
      </section>
    </main>
  );
}
