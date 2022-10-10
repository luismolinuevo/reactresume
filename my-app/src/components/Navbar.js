import {useState, useEffect} from 'react'   //rafce is the short cut
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/Navstyles.css"
import { Link} from "react-scroll";



const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);


    useEffect(() => {
        setExpandNavbar(false);
    }, []);


    return (
        <header>
            <div className = "navbar">
                <h1>Molinuevo</h1>
                <nav className={expandNavbar ? "responsive_nav" : " "}>
                    <a href='/'>Home</a>
                    <a href='#skills'>Skills</a>
                    <a href='/#'>Projects</a>
                    <a href='/#'>Contact Me</a>
                    <a href='/#'>Resume</a>
                    {/* <Link to="/"> Home </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/experience"> Experience </Link> */}
                    <button className="nav-btn nav-close-btn" onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}>  
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
    )
}

export default Navbar


