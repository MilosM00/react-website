import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(

        <div className="footer">
            <p className="thanks">
                Copyright 2022 © <a className="footer-link" href="https://devcrud.com/" target="_blank" rel="noreferrer">DevCurd</a>
            </p>

            <p className="thanks">
                Template used from <a className="footer-link" href="https://www.free-css.com/" target="_blank" rel="noreferrer">Free CSS</a>
            </p>

            <p className="thanks">
                Only for learning and portfolio purposes, more info <a className="footer-link" href="https://github.com/MilosM00/rubic-website-react" target="_blank" rel="noreferrer">here</a>
            </p>

            <ul className="footer-links">
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a></li>
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                <li className="footer-li"><a className="footer-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-stack-overflow"></i></a></li>
            </ul>

        </div>

    );
};

export default Footer;