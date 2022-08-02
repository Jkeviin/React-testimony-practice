import React from "react";
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio (props) { //Exporta el componente Testimonio
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"  //Crea una clase para la imagen
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} //Importa la imagen desde la carpeta imagenes y la guarda en la variable src ({} para que sepa que es una variable)
        alt={props.nombre} //Importa el nombre del testimonio y lo guarda en la variable alt
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{props.nombre}</strong> in {props.pais}
          </p>
          <p className="cargo-testimonio">
            {props.cargo} at <strong>{props.empresa}</strong>
          </p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>
  );
}

export default Testimonio;  //Exporta el componente para que pueda ser usado en otros archivos
