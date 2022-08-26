import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";

import me from "./Assets/Images/Home/me.png";

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
      <Hero />
    </div>
  );
}

export default App;
