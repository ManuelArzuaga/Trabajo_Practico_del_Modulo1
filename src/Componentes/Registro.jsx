import React from "react";
import { useState } from "react";
import "../Styles/Registro.css"

function Registro(){

  return(
    <>
      <form className="form-container">
        <label for="nombre">
          Nombre:
          <input id="nombre" className="nombre" type="text"></input>
        </label>
        <label for="apellido">
          Apellido:
          <input id="apellido" className="apellido" type="text"></input>
        </label>
        <label for="email">
          Email:
          <input id="email" className="email" type="email"></input>
        </label>
        <label for="telefono">
          Telefono:
          <input id="telefono" className="telefono" type="number"></input>
        </label>
        <label for="password">
          Password:
          <input id="password" className="password" type="password"></input>
        </label>
        <label for="confirmar_password">
          Confirmar Password:
          <input name="confirmar_password" className="confirmar_password" type="password"></input>
        </label>
        <button className="button" type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Registro;