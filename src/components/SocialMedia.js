import React from "react";
import "./SocialMedia.css";

const SocialMedia = () =>{
    return(

        <div className="social-media-bar">

            <div>
                <p className="social-media-title">Social Media</p>
                <p className="social-media-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptate numquam sed expedita vitae ipsa?</p>
            </div>

            <ul className="social-media-links">
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a></li>
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                <li className="social-media-li"><a className="social-media-a" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fa fa-stack-overflow"></i></a></li>
            </ul>

        </div>

    );
};

export default SocialMedia;