import React from "react";
import moon from "../Assets/Images/Icons/moon.png";
import sun from "../Assets/Images/Icons/sun.png";
import menu from "../Assets/Images/Icons/menu.png";
import white_menu from "../Assets/Images/Icons/white_menu.png";

const Navbar = ({darkMode, setDarkMode}) => {

    function toggleDropdownNav() {
        let bar = document.querySelector(".primary-nav-bar");
        if (bar.className === "primary-nav-bar") {
            bar.className += " responsive";
        } else {
            bar.className = "primary-nav-bar";
        }
    }


    return (
        <nav className="primary-nav-bar">

            <a className="home-link" href="/">Home</a>

            <div className="nav-bar-right">
                <a href="/about">Blog</a>
                <a href="/projects">Projects</a>

                <button onClick={() => {setDarkMode(!darkMode)}} className="dark-mode-toggle"> 
                    { darkMode ? <img src={moon} alt="dark mode"></img> :  <img src={sun} alt="light mode"></img> }  
                </button>
            </div>


            <button onClick={() => toggleDropdownNav()} className="reactive-bar"> 
                { darkMode ? <img src={menu} alt="dark mode"></img> :  <img src={white_menu} alt="light mode"></img> }  
            </button>

        </nav>
    )
}

export default Navbar;