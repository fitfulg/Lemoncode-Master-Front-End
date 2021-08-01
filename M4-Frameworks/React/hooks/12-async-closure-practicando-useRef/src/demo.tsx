import React from "react";

export const MyComponent = () => {
  const [message, setMessage] = React.useState("initial message");
  const [seconds, setSeconds] = React.useState(0);
  const secondsRef = React.useRef(seconds);

  React.useEffect(() => {
    setTimeout(() => {
      setSeconds(1);
      secondsRef.current = 1;
    }, 1000);

    setTimeout(() => {
      setMessage(`Total seconds: ${secondsRef.current}`);
    }, 3000);
    return () => console.log('hey');
     
  }, []);

//  sin useRef, el valor del segundo setTimeout no llega al renderizado y se queda 
// con el del primer setTimeout :
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setSeconds(1);
  //   }, 1000);

  //   setTimeout(() => {
  //     setMessage(`Total seconds: ${seconds}`);
  //   }, 2000);
  // }, []);

  return (
    <>
      <h3>{message}</h3>
      <h4>{seconds}</h4>
    </>
  );
};
