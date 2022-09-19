import React, {useState} from "react";

import { 
    languageIcons,
    generalIcons, 
    frontEndIcons,
    backendIcons
} from "../Assets/icon_object";

const About = () => {

    let [displayMode, setDisplayMode] = useState("bio");

    function setContentDisplay(input) {
        setDisplayMode(input);
    }

    return (
        <section className="about-wrapper">
            <div className="section-title-wrapper">
                <h2 className="section-title"> <span className="section-title-number"> 01. </span> About </h2>

                <div className="section-tab-nav">
                    <button onClick={() => setContentDisplay("bio")} className={displayMode === "bio" ? "tab active-tab" : "tab unactive-tab"}> Biography </button> 
                    <button onClick={() => setContentDisplay("skills")} className={displayMode === "skills" ? "tab active-tab" : "tab unactive-tab"}> Skills </button> 
                    <button onClick={() => setContentDisplay("hobbies")} className={displayMode === "hobbies" ? "tab active-tab" : "tab unactive-tab"}> Hobbies </button>
                </div>
            </div>

            {displayMode == "bio" &&
                <div className="about-content">
                    <p className="about-text">Hello there, I am Brenton! </p> <br></br>
                    <p className="about-text"> Today I'm enthralled by web development, creating new experiences, implementing eye pleasing designs and making them come to life with animation is what I love.</p> <br></br>
                    <p className="about-text"> Today I'm enthralled by web development, creating new experiences, implementing eye pleasing designs and making them come to life with animation is what I love.</p> <br></br>
                </div>
            }

            {displayMode == "skills" &&
                <div className="about-content skills">
        
                    <div className="skill-column">
                        <h3>Languages</h3>
                        {languageIcons.map((icon) => {
                            return (
                                <div className="skill-unit"> 
                                    <img src={icon.icon_src} className="skill-icon"></img>
                                    <p> {icon.icon_title} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="skill-column">
                        <h3>General Skills</h3>
                        {generalIcons.map((icon) => {
                            return (
                                <div className="skill-unit"> 
                                    <img src={icon.icon_src} className="skill-icon"></img>
                                    <p> {icon.icon_title} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="skill-column">
                        <h3>Front End</h3>
                        {frontEndIcons.map((icon) => {
                            return (
                                <div className="skill-unit"> 
                                    <img src={icon.icon_src} className="skill-icon"></img>
                                    <p> {icon.icon_title} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="skill-column">
                        <h3>Back End</h3>
                        {backendIcons.map((icon) => {
                            return (
                                <div className="skill-unit"> 
                                    <img src={icon.icon_src} className="skill-icon"></img>
                                    <p> {icon.icon_title} </p>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            }

            {displayMode == "hobbies" &&
                <div> Hobbies </div>
            }   

        </section>
    )
}

export default About;