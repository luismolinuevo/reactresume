import React from 'react'
import "../styles/skills.css"
import {FaReact,FaBootstrap} from "react-icons/fa";
import {DiJava, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di"
import hey from "../assets/hey.PNG"


const Skills = () => {
  return (
    <section id="skills">
      <div className='container'>
        <h1 className="heading">About Me</h1>
        <div className = "skills-main">
            <div className="about">
              <p className = "accent">Hello!</p>
              <p>My name is Luis Molinuevo and I'm a Web Developer. 
                Im currently a Computer Science senior at Lehman College. 
                Im also In The Knowledge House Innovation and Cuny Tech Prep Fellowships.
                I use modern technology to build fully responsive full stack applications.
                I love to upscale my skills and problem solve.</p>
            </div>
            
            <div className = "skills">
              {/* <img className = "test" src={hey}/> */}
              
              <div className = "skill">
                <FaReact/>
                <p>React.js</p>
              </div>
              <div className = "skill">
                <DiJava/>
                <p>Java</p>
              </div>
              <div className = "skill">
                <DiJavascript1/>
                <p>JS</p>
              </div>
              <div className = "skill">
                <DiHtml5/>
                <p>HTML</p>
              </div>
              <div className = "skill">
                <DiCss3/>
                <p>CSS</p>
              </div>
              <div className = "skill">
                <DiCss3/>
                <p>Python</p>
              </div>
              <div className = "skill">
                <FaBootstrap/>
                <p>Bootstrap</p>
              </div>
              <div className = "skill">
                <DiCss3/>
                <p>Git</p>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Skills

//rename in navbar to about or the opposite