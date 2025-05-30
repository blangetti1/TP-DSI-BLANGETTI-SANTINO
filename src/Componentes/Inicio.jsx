import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/estilos.css";

function Inicio() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const USUARIOS_VALIDOS = {
    "16356": "robo345",
    "17356": "xyz99",
    "11111": "clave"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !clave) {
      alert("Debes completar ambos campos.");
      return;
    }

    if (USUARIOS_VALIDOS[usuario] === clave) {
      navigate("/inicio-becas");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="usuario">Usuario:</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />

      <br /><br />

      <label htmlFor="clave">Contraseña:</label>
      <input
        type="password"
        id="clave"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Inicio;
