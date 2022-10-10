import {useState, useEffect} from 'react'   //rafce is the short cut
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/Navstyles.css"
import { Link} from "react-scroll";



const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [click, setClick] = useState(false)
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setExpandNavbar(!expandNavbar)   //sets expandnavbar to opposite value

    useEffect(() => {
        setExpandNavbar(false);
    }, []);

    // const changeBackground = () => {
    //     if(window.scollY >= 90) {
    //         setNavbar(true)
    //     } 
    //     else {
    //         setNavbar(false)
    //     }
    // }

    // window.addEventListener("scroll", changeBackground)

    return (
        <div className = "container">
            <header className = {navbar ? "active" : " "}>
                <div className = "navbar">
                    <h1 className = "logo">Molinuevo</h1>
                    <nav className={expandNavbar ? "responsive_nav" : " "}>
                        <a href='/' onClick={handleClick}>Home</a>
                        <a href='#skills' onClick={handleClick}>Skills</a>
                        <a href='/#' onClick={handleClick}>Projects</a>
                        <a href='/#' onClick={handleClick}>Resume</a>
                        <a href='#contact-me' className ="contact-button" onClick={handleClick}>Contact Me</a>
                        <button className="nav-btn nav-close-btn" onClick={handleClick}> 
                            <FaTimes/>
                        </button>  
                    </nav>
                </div>
                
                    <button className="nav-btn" onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}>
                        <FaBars/>
                    </button>
            </header>
        </div>

    )
}

export default Navbar


//If i was making a website with different pages then I would use react-router-dom