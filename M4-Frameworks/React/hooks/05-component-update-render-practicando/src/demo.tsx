// En este ejemplo vamos a ver como usar Reat.useEffect para ejecutar un código justo después de cada renderizado.

import React, { useEffect } from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {/* mostrar solo el componente hijo segun boolean useState */}
      {visible && <MyChildComponent />}
      {/* cambia el flag al pulsar boton ergo muestra/esconde el componente hijo */}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};

// COMPONENTE HIJO
const MyChildComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "John",
    lastname: "Doe",
  });

  React.useEffect(() => {
    //se monta en el DOM
    console.log("A. Called right after every render");

    //desmonta del DOM justo antes de que vuelva a renderizarse, 
    // ya que no se le ha pasado ninguna [dependencia] a este useEffect
    return () => console.log("B. Cleanup function called after every render");
  });

  return (
    <div>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
    </div>
  );
};
