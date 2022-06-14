import React from "react";
import "./Navbar.css";

const Navbar = () =>{

    const hamburgerHandle = () =>{
        document.querySelector(`.nav-links`).classList.toggle(`active`);
    };

    return(

        <div>
            
            <nav className="nav">

                <p className="logo-nav">RU<span className="logo-nav-span">BIC</span></p>

                <p onClick={hamburgerHandle} className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
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

        </div>

    );
};

export default Navbar;