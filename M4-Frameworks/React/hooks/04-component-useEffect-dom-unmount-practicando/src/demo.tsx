import React from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false); //flag "visible" 

  return (
    <>
      {/* mostrar solo el componente hijo segun boolean useState */}
      { visible && <MyChildComponent /> } 

      {/* cambia el flag al pulsar boton ergo muestra/esconde el componente hijo */}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};

// COMPONENTE HIJO
export const MyChildComponent = () => {
  React.useEffect(() => {
    console.log("El componente se acaba de montar en el DOM");

    return () => console.log("El componente se acaba de desmontar del DOM");
  }, []);

  return <h4>Hello form child component</h4>;
};