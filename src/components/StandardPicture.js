import React from "react";
import "./StandardPicture.css";

const StandardPicture = () =>{
    return(
        <div className="standard-picture">

            <div className="overlay-standard-picture">
                <div>

                    <p className="title-standard-picture">Standard Picture Section</p>
                    <p className="info-standard-picture">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ut voluptatum ipsum. 
                        Rerum fuga cumque illo nihil nobis vero ducimus, animi voluptatum nemo facilis quae quia odit accusantium doloremque? Totam.
                    </p>
                    <p className="main-info-standard-picture">Adipisicing elit. <br /> Quos ad doloribus numquam cum odio dolorem!</p>
                    <p className="info-standard-picture">Rerum fuga cumque consectetur adipisicing elit. Pariatur quis ipsum facere officiis magni ullam quasi fuga magnam dicta quas.</p>

                </div>
                <div className="image-standard-picture"></div>
            </div>

        </div>
    );
};

export default StandardPicture;