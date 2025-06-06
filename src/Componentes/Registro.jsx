import React from "react";
import { useState } from "react";
import "../Styles/Registro.css"

function Registro(){

  const [Nombre,setNombre] = useState();
  const [Apellido,setApellido] = useState();
  const [Email,setEmail] = useState();
  const [Telefono,setTelefono] = useState(0);
  const [Password,setPassword] = useState();
  const [ConfirmarPassword,setConfirmarPassword] = useState();
  
  return(
    <>
      <form className="form-container" >
        <label htmlFor="nombre">
          Nombre:
          <input id="nombre" className="nombre" type="text" onChange={(event)=>setNombre(event.target.value)}></input>
        </label>
        <label htmlFor="apellido">
          Apellido:
          <input id="apellido" className="apellido" type="text" onChange={(event)=>setApellido(event.target.value)}></input>
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" className="email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
        </label>
        <label htmlFor="telefono">
          Telefono:
          <input id="telefono" className="telefono" type="number" onChange={(event)=>setTelefono(event.target.value)}></input>
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" className="password" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
        </label>
        <label htmlFor="confirmar_password">
          Confirmar Password:
          <input id="confirmar_password" className="confirmar_password" type="password" onChange={(event)=>setConfirmarPassword(event.target.value)}></input>
        </label>
        <button className="button" type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Registro;