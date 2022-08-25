import React from "react";
import moon from "../Assets/Images/moon.png";
import sun from "../Assets/Images/sun.png";

const Navbar = ({darkMode, setDarkMode}) => {
    return (
        <nav className="primary-nav-bar">

            <div className="nav-bar-left">
                <a href="/" className="test">Home</a>
            </div>

            <div className="nav-bar-right">
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/hobbies">Hobbies</a>
                <button onClick={() => {setDarkMode(!darkMode)}}> { darkMode ? <img src={moon} alt="dark mode"></img> :  <img src={sun} alt="light mode"></img> }  </button>
            </div>
            
        </nav>
    )
}

export default Navbar;