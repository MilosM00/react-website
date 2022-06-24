import React from "react";
import "./Navbar.css";

const Navbar = () =>{

    const [hamburger, setHamburger] = React.useState(true);

    const hamburgerHandle = () =>{
       setHamburger(!hamburger) 
    };

    return(

        <div className="navbar-section">
            
            <nav className="nav">

                <p className="logo-nav">RU<span className="logo-nav-span">BIC</span></p>

                <p onClick={hamburgerHandle} className="hamburger">

                    {hamburger === true &&
                        <i className="fa fa-bars"></i>
                    }

                    {hamburger === false &&
                        <i className="fa fa-times"></i>
                    }

                </p>

                <ul className="nav-links">
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Features</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">About</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Pricing</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Reviews</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Contact</a></li>
                    <li><a className="button-components" href="https://github.com/" target="_blank" rel="noreferrer">Components</a></li>
                </ul>
                
            </nav>

               {hamburger === false &&
                    <ul className="hamburger-links">
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer">Features</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer">About</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer">Pricing</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer">Reviews</a></li>
                        <li><a href="https://github.com/" target="_blank" rel="noreferrer">Contact</a></li>
                        <li><a className="button-components" href="https://github.com/" target="_blank" rel="noreferrer">Components</a></li>
                    </ul> 
               }         

        </div>

    );
};

export default Navbar;