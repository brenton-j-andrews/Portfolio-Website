import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar";

function App() {

  let [ darkMode, setDarkMode ] = useState(true);

  // Dark mode toggle. 
  useEffect(() => {
    let root = document.querySelector(':root');
    if (!darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");

    } else {
      root.classList.remove("dark");
      root.classList.add("light");

    }
  }, [darkMode]);


  return (
    <div className="App">
      <Navbar darkMode = {darkMode} setDarkMode = {setDarkMode}/>
    </div>
  );
}

export default App;
