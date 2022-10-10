
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Skills from "./pages/Skills"


function App() {
  return (
    // <Router>
    //   {/* <Navbar/> */}
    //   <Routes>
    //     <Route path="/" element={<Test/>}/>
    //     <Route path='/skills' element={<Skills/>}/>
    //   </Routes>

    // </Router> 
    <React.Fragment>
      <Navbar/>
      <LandingPage/>
      <Skills/>
    </React.Fragment>
      
    

  );
}

export default App;


//make everything in one page