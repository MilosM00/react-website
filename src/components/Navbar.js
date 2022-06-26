import React from "react";
import "./Navbar.css";

const Navbar = () =>{

    const [hamburger, setHamburger] = React.useState(true);

    const hamburgerHandle = () =>{
       setHamburger(!hamburger) 
    };

    const scrollTop = () =>{
        document.body.scrollIntoView();
    };

    return(

        <div className="navbar-section">
            
            <nav className="nav">

                <p className="logo-nav" onClick={scrollTop}>RU<span className="logo-nav-span">BIC</span></p>

                <p onClick={hamburgerHandle} className="hamburger">

                    {hamburger === true &&
                        <i className="fa fa-bars"></i>
                    }

                    {hamburger === false &&
                        <i className="fa fa-times"></i>
                    }

                </p>

                <ul className="nav-links">
                    <li><a href="#features-section" rel="noreferrer">Features</a></li>
                    <li><a href="#about-section" rel="noreferrer">About</a></li>
                    <li><a href="#pricing-section" rel="noreferrer">Pricing</a></li>
                    <li><a href="#reviews-section" rel="noreferrer">Reviews</a></li>
                    <li><a href="#contact-section" rel="noreferrer">Contact</a></li>
                    <li><a className="button-components" href="https://github.com/" target="_blank" rel="noreferrer">Components</a></li>
                </ul>
                
            </nav>

               {hamburger === false &&
                    <ul className="hamburger-links">
                        <li><a href="#features-section" rel="noreferrer" onClick={hamburgerHandle}>Features</a></li>
                        <li><a href="#about-section" rel="noreferrer" onClick={hamburgerHandle}>About</a></li>
                        <li><a href="#pricing-section" rel="noreferrer" onClick={hamburgerHandle}>Pricing</a></li>
                        <li><a href="#reviews-section" rel="noreferrer" onClick={hamburgerHandle}>Reviews</a></li>
                        <li><a href="#contact-section" rel="noreferrer" onClick={hamburgerHandle}>Contact</a></li>
                        <li><a className="button-components" href="https://github.com/" target="_blank" rel="noreferrer" onClick={hamburgerHandle}>Components</a></li>
                    </ul> 
               }         

        </div>

    );
};

export default Navbar;