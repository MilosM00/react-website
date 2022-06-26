import React from "react";
import "./About.css";

const About = () =>{
    return(

        <>
            <section id="about-section">

                <div className="about">

                    <p className="title-about">WHY THIS IS AWESOME</p>
                    <p className="short-info-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                    <div className="inline-about">
                        <div className="about-one">
                            <div className="icon-about"><i className="fa fa-lightbulb"></i></div>
                            <p className="icon-title-about">Thoughtful Design</p>
                            <p className="icon-info-about">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Voluptas eveniet laborum, vero doloremque sunt tempora.
                            </p>
                        </div>

                        <div className="about-two">
                            <div className="icon-about"><i className="fa fa-fill-drip"></i></div>
                            <p className="icon-title-about">Well Crafted</p>
                            <p className="icon-info-about">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Voluptas eveniet laborum, vero doloremque sunt tempora.
                            </p>
                        </div>

                        <div className="about-three">
                            <div className="icon-about"><i className="fa fa-pen"></i></div>
                            <p className="icon-title-about">Easy To Customize</p>
                            <p className="icon-info-about">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Voluptas eveniet laborum, vero doloremque sunt tempora.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </>

    );
};

export default About;