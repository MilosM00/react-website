import React from "react";
import Navbar from "./components/Navbar";
import BeforeHeader from "./components/BeforeHeader";
import SocialMedia from "./components/SocialMedia";
import Hero from "./components/Hero";
import MediaList from "./components/MediaList";
import StandardPicture from "./components/StandardPicture";

const App = () =>{
    return(

        <div>
            
            <BeforeHeader />
            <Navbar />
            <SocialMedia />
            <Hero />
            <MediaList />
            <StandardPicture />
            
        </div>

    );
};

export default App;