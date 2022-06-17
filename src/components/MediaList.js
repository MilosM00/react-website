import React from "react";
import "./MediaList.css";

const MediaList = () =>{
    return(

        <div className="media-list">

            <div className="inline-media-list">

                <div className="img-list-media"></div>

                <div>
                    <p className="title-media-list">Section with Media list</p>
                    <p className="info-media-list">
                        Consectetur adipisicing elit. 
                        Quam odit odio et neque perferendis perspiciatis magnam hic ut facilis possimus!consectetur adipisicing elit. 
                        Impedit repellat ipsam quaerat error odit commodi.
                    </p>

                    <div className="list-media-list">
                        <p className="icon-list-media"><i className="fa fa-gift"></i></p>
                        <p className="p-list-media">
                            List-based media object <br />
                            <span className="span-list-media">Cras sit amet nibh libero, in gravida nulla.</span>
                        </p>
                    </div>

                    <div className="list-media-list">
                        <p className="icon-list-media"><i className="fa fa-bell"></i></p>
                        <p className="p-list-media">
                            Another one <br />
                            <span className="span-list-media">Cras in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                        </p>
                    </div>

                    <div className="list-media-list">
                        <p className="icon-list-media"><i className="fa fa-microphone"></i></p>
                        <p className="p-list-media">
                            One more <br />
                            <span className="span-list-media">Nulla vel metus scelerisque ante sollicitudin. Cras purus odio.</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default MediaList;