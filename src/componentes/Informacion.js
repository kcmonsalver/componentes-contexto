import React from "react";
import UseUser from "../Hooks/UseUser";


export default function Datos (){
    const {nombre, edad, genero} =  UseUser();
    
    //console(user);

    return (
        <div>

         <h1>Datos del Usuario</h1> 
         <p> Nombre: {nombre} </p> 
         <p> Edad: {edad} </p>
         <p> Genero: {genero} </p> 
        </div>
    )
}