import React from 'react'
import "../styles/Projects.css"
import {FaReact, FaHtml5, FaCss3} from "react-icons/fa";
import {SiJavascript} from "react-icons/si"

const Projects = () => {
  return (
    <section id="projects">
        <div className="container">
            <h1 className='heading'>Projects</h1>
            <div className= "projects">
                <div className = "project-element">
                    <div></div>
                    <div>
                        <h3>Weather App</h3>
                        <p>This app was created with React.js and CSS. 
                        It uses states to get a city name.
                        And then fetches from a public api to get the weather for
                        that city.
                        </p>
                        <div>
                           <p>Tech Stack: React.js, JS, CSS</p>
                        </div>
                    </div>
                </div>

                <div className = "project-element">
                    <div></div>
                    <div>
                        <h3>City Searcher</h3>
                        <p>This app was created with React.js and CSS. 
                        It uses states to get a zip code.
                        And then fetches from a public api to find all of the citys
                        associated with that zipcode.
                        </p>
                        <div>
                            <FaReact/>
                            <FaCss3/>
                            <SiJavascript/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects

//try and change opacity on nav bar elments