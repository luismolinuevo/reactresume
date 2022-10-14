import React from 'react'
import "../styles/Landingpage.css"
import Button from '@mui/material/Button';

const LandingPage = () => {
  return (
    <React.Fragment>
        <section id = "home">
            <div className = "container">
              <div className = "hero">
                <div className ="home-info">
                  <p className = "hey">Hello!</p>
                  <h1>Im Luis</h1>
                  <h1><span className = "accent">Moli</span>nuevo</h1>
                  {/* <Button variant="text">Text</Button> */}
                  <p className = "intro">A FullStack Webdeveloper</p>
                    <a className="contact-button" href="#contact-me">Hire Me</a>
                </div>
                {/* <div>
                  <p className="emjoi">👨‍💻</p>
                </div> */}
              </div>


            </div>
        </section>
    </React.Fragment>
  )
}

export default LandingPage


//try and see how it looks with the infomation in the center
