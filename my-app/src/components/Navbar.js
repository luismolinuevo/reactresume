import {useRef} from 'react'   //rafce is the short cut
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

    const navRef = useRef();   //this is will track the dom element.Which is the nav link. Thats why I have ref={navRef} in the nav

    const showNav = () => {
        navRef.current.classList.toggle("responsize_nav");   //each time this function is called it will add or remove the class name from the classlist on nav
    }
    return (
        <header>
            <h1>Molinuevo</h1>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>Skills</a>
                <a href='/#'>Projects</a>
                <a href='/#'>Contact Me</a>
                <a href='/#'>Resume</a>
                <button onClick={showNav()}>  
                    <FaTimes/>
                </button>  
            </nav>
            <button onClick={showNav()}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar


//Notes I reviewd and learned. When making a responsive nav bar in react you could use useRef or useState hook. 
//You have to add the className of responive to the container of the class links and also remove it. You could use toogle like above. Or switch between true and false with react({functionName ? "open" : "close"})