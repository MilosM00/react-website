import React from "react";
import Navbar from "./components/Navbar";
import BeforeHeader from "./components/BeforeHeader";
import SocialMedia from "./components/SocialMedia";
import Hero from "./components/Hero";
import MediaList from "./components/MediaList";
import StandardPicture from "./components/StandardPicture";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Design from "./components/Design";

const App = () =>{
    return(

        <div>
            
            <BeforeHeader />
            <Navbar />
            <SocialMedia />
            <Hero />
            <MediaList />
            <StandardPicture />
            <About />
            <Pricing />
            <Reviews />
            <Design />
            
        </div>

    );
};

export default App;