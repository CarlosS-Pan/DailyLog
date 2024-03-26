import React, { useEffect, useState } from "react";

function App() {
  // const [backendData, setBackendData] = useState([{}]);
  const [backendNames, setBackendNames] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  useEffect(() => {
    fetch("/prueba")
      .then((response) => response.json())
      .then((data) => setBackendNames(data));
  }, []);

  return <div>{typeof backendNames.nombres === "undefined"}</div>;
}

export default App;
