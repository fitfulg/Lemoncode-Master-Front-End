import React from "react";

export const MyComponent: React.FC = () => {
  const [username, setUsername] = React.useState("");

  // PROBAR EN DEBUBUGER DEVTOOLS PARA ENTENDER MEJOR

  React.useEffect(() => {
    console.log('componente se monta en el DOM');
    
    setUsername("John");
    return () => console.log("El componente se acaba de desmontar del DOM");
  }, [])

  // React.useEffect(() => {
  //   console.log('componente se monta en el DOM');
  //   setUsername("John");
  //   // no se llega a ejecutar la siguiente linea:
  // return () => console.log("El componente se acaba de desmontar del DOM");
  // }, [])

  // React.useEffect(() => {
  //   console.log('componente se monta en el DOM');
  //   // Simulating async call
  //   setTimeout(() => {
  //     setUsername("John");
  //   }, 2500);
  //   // no se llega a ejecutar la siguiente linea:
  //   return () => console.log("El componente se acaba de desmontar del DOM");
  // }, []);

  return (
    <>
      <h4>{username}</h4>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </>
  );
};