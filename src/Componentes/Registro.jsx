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

  const RegistroInformacion = {

    nombre : Nombre,
    apellido : Apellido,
    email : Email,
    telefono : Telefono,
    password : Password,
    confirmarPassword : ConfirmarPassword
  }

  function EnviarRegistro(event){
    
    event.preventDefault()
    console.log(RegistroInformacion)
  }

  return(
    <>
      <form className="form-container" onSubmit={EnviarRegistro}>
        <label for="nombre">
          Nombre:
          <input id="nombre" className="nombre" type="text" onChange={(event)=>setNombre(event.target.value)}></input>
        </label>
        <label for="apellido">
          Apellido:
          <input id="apellido" className="apellido" type="text" onChange={(event)=>setApellido(event.target.value)}></input>
        </label>
        <label for="email">
          Email:
          <input id="email" className="email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
        </label>
        <label for="telefono">
          Telefono:
          <input id="telefono" className="telefono" type="number" onChange={(event)=>setTelefono(event.target.value)}></input>
        </label>
        <label for="password">
          Password:
          <input id="password" className="password" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
        </label>
        <label for="confirmar_password">
          Confirmar Password:
          <input name="confirmar_password" className="confirmar_password" type="password" onChange={(event)=>setConfirmarPassword(event.target.value)}></input>
        </label>
        <button className="button" type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Registro;