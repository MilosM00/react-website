import React from "react";
import "./ImageOverlay.css";
import Design from "./Design";
import Contact from "./Contact";
import Reviews from "./Reviews";

const ImageOverlay = () =>{
    return(

        <div className="image-overlay">
            
            <Reviews />
            <Design />
            <Contact />

        </div>

    );
};

export default ImageOverlay;