import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Skills from "./pages/Skills"


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <LandingPage/>
      <Skills/>
      <Contact/>
    </React.Fragment>
      
    

  );
}

export default App;

//add smooth scroll/animations
