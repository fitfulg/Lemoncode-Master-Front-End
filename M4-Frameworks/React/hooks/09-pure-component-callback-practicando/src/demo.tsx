import React, { useEffect } from "react";

interface Props {
  onReset: () => void;
}

const ResetValue: React.FC<Props> = React.memo((props) => {
  console.log(
    "Hey I'm only rendered the first time, check React.memo + callback"
  );

  return <button onClick={props.onReset}>Reset value</button>;
});

export const MyComponent = () => {
  const [username, setUsername] = React.useState("John");
  const [lastname, setLastname] = React.useState("Doe");

  //se renderiza todo mediante ambos imputs
  // const resetNameCallback = () => {
  //   setUsername("");
  // };
  
    // parecido a useEffect 
    //solo se renderiza mediante lastname
  // const resetNameCallback = React.useCallback( () => {
  //   setUsername("");
  // }, [lastname]);

   // parecido a useEffect 
   //no se renderiza ninguno
   const resetNameCallback = React.useCallback( () => {
    setUsername("");
  }, []);


  return (
    <>
      <h3>
        {username} {lastname}
      </h3>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <ResetValue onReset={resetNameCallback}>Reset name</ResetValue>
    </>
  );
};
