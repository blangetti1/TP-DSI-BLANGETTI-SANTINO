import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/estilos.css";

const USUARIOS = [
  { usuario: "16356", contrasenias: ["11111"] },
  { usuario: "17356", contrasenias: ["44444"] },
  { usuario: "18356", contrasenias: ["77777"] }
];

function Inicio() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = USUARIOS.find(u => u.usuario === usuario);
    if (user && user.contrasenias.includes(clave)) {
      navigate("/inicio-becas");
    } else {
      alert("Usuario o contraseña incorrectos. Recuerda que el usuario y la contraseña deben ser numéricos de 5 dígitos.");
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <label htmlFor="usuario">Legajo:</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
        pattern="\d{5}"
        title="El usuario debe ser una combinación de 5 números"
        maxLength={5}
      />
      <br /><br />
      <label htmlFor="clave">Contraseña:</label>
      <input
        type="password"
        id="clave"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        required
        pattern="\d{5}"
        title="Debe ser una combinación de 5 números"
        maxLength={5}
      />
      <br /><br />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Inicio;