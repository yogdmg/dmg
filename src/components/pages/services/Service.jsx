import React, { useEffect } from "react";
import Banner from "../../elements/Banner";
import bannerImg from "../../../assets/images/Services/banner-services.jpg";
import SaleMarketing from "./SaleMarketing";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SupllyChain from "./SupllyChain";
import Merchandising from "./Merchandising";
import { Helmet } from "react-helmet";

const Service = () => {
    return (
        <>
          <Helmet>
        <title data-react-helmet="true">
        Our services | Ecossential Foods Corporation

        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Our Services" />
        <meta name="keywords" content="FMCG distribution partner in Philipines, Product distribution, Ecossential Foods Corporation
" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation has infrastructure and access to the markets and consumers all across the Philippines. Sales and marketing, In-store excellence, supply chain"/>
      </Helmet>
            <Banner image={bannerImg} title="/OUR SERVICES" />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h3 className="headingTwo mt-5 mb-3">
                                WE HELP YOU REACH YOUR ESSENTIALS
                            </h3>

                            <p className="justify colorGrey">
                                Ecossential Foods Corporation is designed to get
                                products from Point A to Point B, to access
                                markets and consumers all across the
                                Philippines. We have built the infrastructure to
                                get our brands where they need to be, created
                                links necessary to get to every consumer touch
                                point, and established the pathways needed to
                                get into the hearts and minds of Filipino
                                consumers.
                            </p>

                            <p>
                                <b>We would be honored to partner with you.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dropdown p-md-1 pt-md-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item border-0 my-1">
                                    <button
                                        className="acordionBtn collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        <h3 className="headingTwo colorBlue m-0">
                                            /SALES+MARKETING
                                        </h3>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>

                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body p-0">
                                            <SaleMarketing />
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item border-0 my-1">
                                    <button
                                        className="acordionBtn collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        <h3 className="headingTwo m-0 colorBlue">
                                            /IN-STORE EXCELLENCE
                                        </h3>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>

                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body p-0">
                                            <Merchandising />
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item border-0  my-1">
                                    <button
                                        className="acordionBtn collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        <h3 className="headingTwo m-0 colorBlue">
                                            /SUPPLY CHAIN
                                        </h3>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>

                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body p-0">
                                            <SupllyChain />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="thrive">
                <div className="container"></div>
            </section>
        </>
    );
};

export default Service;
