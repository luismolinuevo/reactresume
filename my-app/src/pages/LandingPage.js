import React from 'react'
import "../styles/Landingpage.css"

const LandingPage = () => {
  return (
    <React.Fragment>
        <section id = "home">
            <div className = "container">
              <div className = "hero">
                <div className ="home-info">
                  <p className = "hey">Hey</p>
                  <h1>Im Luis Molinuevo</h1>
                  <p className = "intro">A FullStack Webdeveloper from NYC that builds scalable Web Applcations.</p>
                  {/* <button className="contact-button"> */}
                    <a className="contact-button" href="#contact-me">Hire Me</a>
                  {/* </button> */}
                </div>
                <div>
                  <p className="emjoi">👨‍💻</p>
                  <p>Hey</p>
                </div>
              </div>


            </div>
        </section>
    </React.Fragment>
  )
}

export default LandingPage


//make good and longer about me. Maybe get different colors that make the page feel more alive.Find something to take up some space
//colors https://color.adobe.com/explore?page=2