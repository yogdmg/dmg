import React from "react";

const BannerBottom = (props) => {
    return (
        <section className="bannerBottom">
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <div className="bannerBottomcontent">
                        <h1 className="text-center headingOne ">
                            {props.heading}
                        </h1>
                        <h1 className="text-center headingOne">
                            {props.headingTwo}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerBottom;
