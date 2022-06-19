import React from "react";
import "./Pricing.css";

const Pricing = () =>{
    return(

        <div className="pricing">
            <p className="pricing-title">PRICING OPTIONS</p>
            <p className="pricing-short-info">Loerm ipsum dolor sit amet. consectetur adipiscing elit.</p>

            <div className="overlay-pricing">

                <div className="first-card">
                    <p className="overlay-pricing-title">Basic</p>
                    <p className="overlay-pricing-price">
                        $<span className="price-number">0</span>
                    </p>
                    <p className="overlay-pricing-payment">Free for Life</p>
                    <p className="overlay-pricing-data">1 GB OF SPACE</p>
                    <p className="overlay-pricing-data">10 GB OF BANDWIDTH</p>
                    <p className="overlay-pricing-data">3 WEBSITES</p>
                    <p className="overlay-pricing-data">BASIC CUSTOMIZATION</p>
                    <p className="overlay-pricing-data">WORDPRESS INTEGRATION</p>
                    <p className="overlay-pricing-data-no">EMAIL SUPPORT</p>
                </div>

                <div className="second-card">
                    <p className="overlay-pricing-title">Professional</p>
                    <p className="overlay-pricing-price">
                        $<span className="price-number">14.99</span>
                    </p>
                    <p className="overlay-pricing-payment">Monthly Payment</p>
                    <p className="overlay-pricing-space">OUR MOST POPULAR</p>
                    <p className="overlay-pricing-data">5 GB OF SPACE</p>
                    <p className="overlay-pricing-data">50 GB OF BANDWIDTH</p>
                    <p className="overlay-pricing-data">10 WEBSITES</p>
                    <p className="overlay-pricing-data">ADVANCED CUSTOMIZATION</p>
                    <p className="overlay-pricing-data">WORDPRESS INTEGRATION</p>
                    <p className="overlay-pricing-data-no">EMAIL SUPPORT</p>
                </div>

                <div className="third-card">
                    <p className="overlay-pricing-title">Enterprise</p>
                    <p className="overlay-pricing-price">
                        $<span className="price-number">99</span>
                    </p>
                    <p className="overlay-pricing-payment">Monthly Payment</p>
                    <p className="overlay-pricing-data">UNLIMITED SPACE</p>
                    <p className="overlay-pricing-data">UNLIMITED BANDWIDTH</p>
                    <p className="overlay-pricing-data">120 WEBSITES</p>
                    <p className="overlay-pricing-data">ADVANCED CUSTOMIZATION</p>
                    <p className="overlay-pricing-data">WORDPRESS INTEGRATION</p>
                    <p className="overlay-pricing-data-no">EMAIL SUPPORT</p>
                </div>

            </div>
        </div>

    );
};

export default Pricing;