import React from "react";
import "./Reviews.css";

const Reviews = () =>{
    return(

        <div className="reviews">

            <p className="reviews-title">WHAT OUR CUSTOMERS ARE SAYING</p>
            <p className="reviews-short-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="inline-reviews">

                <div>

                    <div className="testimonials-message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.
                    </div>

                    <div className="inline-reviews-testimonials">
                        <div className="image-reviews-one"></div>

                        <div>
                            <p className="testimonials-info">Emma Re</p>
                            <p className="testimonials-job-title">Web Designer</p>
                        </div>
                    </div>

                </div>

                <div>

                    <div className="testimonials-message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.
                    </div>

                    <div className="inline-reviews-testimonials">
                        <div className="image-reviews-two"></div>

                        <div>
                            <p className="testimonials-info">John Doe</p>
                            <p className="testimonials-job-title">Freelancer</p>
                        </div>
                    </div>

                </div>

                <div>

                    <div className="testimonials-message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Excepturi, eaque, repellat. Corporis facilis reprehenderit, cupiditate.
                    </div>

                    <div className="inline-reviews-testimonials">
                        <div className="image-reviews-three"></div>

                        <div>
                            <p className="testimonials-info">Emmily Roe</p>
                            <p className="testimonials-job-title">Graphic Designer</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Reviews;