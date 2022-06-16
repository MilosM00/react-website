import React from "react";
import Navbar from "./components/Navbar";
import BeforeHeader from "./components/BeforeHeader";
import SocialMedia from "./components/SocialMedia";
import Hero from "./components/Hero";

const App = () =>{
    return(

        <div>
            
            <BeforeHeader />
            <Navbar />
            <SocialMedia />
            <Hero />
            
        </div>

    );
};

export default App;