import React from "react";
import "../Estilos/estilos.css";

export default function Dos() {
  return (
    <article>
      <img
        src="https://sanfrancisco.utn.edu.ar/assets/images/logo-utn-frsf.svg?v=1"
        width="300"
        alt="Logo UTN"
      />
      <h1>¿Qué documentos necesito para postularme?</h1>
      <p>
        Los documentos que se requieren para postularse a una beca generalmente incluyen: formulario de solicitud completo, constancia de alumno regular o certificado de estudios, fotocopia del DNI o documento de identidad, comprobantes de ingresos del grupo familiar (como recibos de sueldo o declaración jurada), certificado de domicilio y, en algunos casos, una carta de motivación y cartas de recomendación. Es importante revisar con atención las bases de la convocatoria, ya que cada programa puede pedir requisitos específicos.
      </p>
      <div>
        <a href="/Preguntas_Frecuentes" className="boton_volver">Inicio</a>
      </div>
    </article>
  );
}