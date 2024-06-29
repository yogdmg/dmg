import React from "react";

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.image} alt="img_not_found" className="img-fluid" />
            <div className="overlay ">
                <div className="bannerTitle">
                    <h2 className="headingTwo margin pbt">{props.title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
