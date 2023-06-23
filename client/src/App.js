// client/src/App.js

import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((response) => response.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;
