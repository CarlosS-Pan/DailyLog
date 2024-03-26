import { response } from "express";
import React, { useEffect, useState } from "react";

function App() {
  const [backendNames, setBackendNames] = useState([{}]);

  useEffect(() => {
    fetch("/prueba")
      .then((response) => response.json())
      .then((data) => setBackendNames(data));
  }, []);

  return <div>{typeof backendNames.nombres === "undefined"}</div>;
}

export default App;
