import React from "react";
import "./Contact.css";

const Contact = () =>{
    return(

        <div className="contact">
            <p className="title-contact">CONTACT US</p>
            <p className="short-info-contact">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="inline-contact">

                <div className="inputs-contact">
                    <input className="input-contact" type="text" placeholder="Name" />
                    <input className="input-contact-other" type="text" placeholder="Email" />
                    <input className="input-contact-other" type="text" placeholder="Subject" />
                </div>

                <textarea className="textarea-contact" placeholder="Message"></textarea>

            </div>

            <button className="button-contact">Send Message</button>

        </div>

    );
};

export default Contact;