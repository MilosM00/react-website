import React from "react";
import "./BeforeHeader.css";

const BeforeHeader = () =>{
    return(

        <div className="background-image">
            <div className="dark-overlay">

                <div className="inline-before-header">

                    <div>
                        <p className="title-before-header">RU<span className="title-span">BIC</span></p>
                        <p className="about-before-header">Creative Mylti-purpose Bootstrap theme</p>
                        <p className="info-before-header">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Commodi dolores voluptatem voluptatum adipisci vel, beatae unde! Mollitia voluptatum, ullam quisquam optio!
                        </p>
                        <button className="button-before-header">Download</button>
                    </div>

                    <div className="overlay-free-trial">
                        <p className="try-free">Try your <span className="try-free-span">Free</span> trial today.</p>

                        <input type="text" className="input-before-header" placeholder="Name" />

                        <input type="text" className="input-before-header" placeholder="Email" />

                        <input type="password" className="input-before-header" placeholder="Password" />

                        <button className="button-get-started">Get Started</button>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default BeforeHeader;