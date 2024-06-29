import React, { useEffect } from "react";
import Banner from "../../elements/Banner";
import BannerBottom from "../../elements/BannerBottom";
import bannerImg from "../../../assets/images/partner/banner-partner-with-us.jpg";
import BecomePartner from "../../elements/BecomePartner";
import partnerOne from "../../../assets/images/partner/partner-with-us-img-1.jpg";
import partnerTwo from "../../../assets/images/partner/partner-with-us-img-2.jpg";
import partnerThree from "../../../assets/images/partner/partner-with-us-img-3.jpg";
import partnerFour from "../../../assets/images/partner/partner-with-us-img-4.jpg";
import partnerFive from "../../../assets/images/partner/partner-with-us-img-5.jpg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Partners = () => {
    return (
        <>
          <Helmet>
        <title data-react-helmet="true">
        Become our partner | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Partner with us" />
        <meta name="keywords" content="Distribution partner companies in philippines, Product distribution, Ecossential Foods Corporation
" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation is leading FMCG distribution in Philippines. Become a partner with Ecossential Foods Corporation.
          "
        />
        <link rel="cannonical" href="/partners" />
      </Helmet>
            <Banner image={bannerImg} title="/PARTNER WITH US" />

            <BannerBottom heading="EFC AS A BUSINESS PARTNER" />

            <div className="container">
                <div className="row pt-3 pt-md-5 pb-lg-3">
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 mt-3">
                                <img
                                    src={partnerOne}
                                    className="img-fluid"
                                    alt="img_not_found"
                                />
                            </div>

                            <div className="col-lg-6 mt-3">
                                <h5 className="headingThree text-uppercase">
                                    Extensive Supply chain Infrastructure and
                                    Network
                                </h5>

                                <p className="colorGrey justify">
                                    From supermarkets, groceries, drug stores,
                                    convenience stores, public markets, and sari
                                    sari stores, our massive distribution
                                    organization and extensive infrastructure
                                    enable us to bring our products to the most
                                    remote locations.
                                </p>
                            </div>
                        </div>

                        <div className="row pt-3 pt-md-5 pb-lg-3">
                            <div className="order-last order-lg-first col-lg-6 mt-3">
                                <h5 className="headingThree text-uppercase">
                                    Robust Financial Muscle and Corporate
                                    Governance
                                </h5>

                                <p className="colorGrey justify">
                                    Our strong business activity and financial
                                    stability allow us to build long-term
                                    strategic relationships with our business
                                    partners. We match our business strategies
                                    with ample resources to find both current
                                    and future growth aspirations. We have good
                                    corporate governance and regulatory
                                    practices in place to ensure business
                                    continuity, streamlined operations, and
                                    minimized risks.
                                </p>
                            </div>

                            <div className="order-first order-lg-last col-lg-6 mt-3">
                                <img
                                    src={partnerTwo}
                                    className="img-fluid"
                                    alt="img_not_found"
                                />
                            </div>
                        </div>

                        <div className="row pt-3 pt-md-5 pb-lg-3">
                            <div className="col-lg-6 mt-3">
                                <img
                                    src={partnerThree}
                                    className="img-fluid"
                                    alt="img_not_found"
                                />
                            </div>

                            <div className="col-lg-6 mt-3">
                                <h5 className="headingThree text-uppercase">
                                    Proven Track Record of Building Brands and
                                    Partnerships
                                </h5>

                                <p className="colorGrey justify">
                                    Our decades of business experience cements
                                    our expertise in bringing brands to market
                                    leadership positions. Our strong strategic
                                    alliances with key business partners allow
                                    us a better understanding of market dynamics
                                    and evolving business environment.
                                </p>
                            </div>
                        </div>

                        <div className="row pt-3 pt-md-5 pb-lg-3">
                            <div className="order-last order-lg-first col-lg-6 mt-3">
                                <h5 className="headingThree text-uppercase">
                                    Disciplined Entrepreneurship, Culture, and
                                    Leadership
                                </h5>

                                <p className="colorGrey justify">
                                    We have a healthy mix of experienced and
                                    young, dynamic talents bringing with them
                                    the most innovative ideas and most efficient
                                    executions. Everyone treats the business as
                                    their own; mindful of the costs and making
                                    sure that we get optimum return on all our
                                    investments.
                                </p>
                            </div>

                            <div className="order-first order-lg-last col-lg-6 mt-3">
                                <img
                                    src={partnerFive}
                                    className="img-fluid"
                                    alt="img_not_found"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="reasons">
                <div className="container">
                    <div className="row mt-4 mt-md-5">
                        <div className="col-md-10 mx-auto">
                            <BecomePartner />
                        </div>
                        <div className="col-md-10 mx-auto pt-3 pt-md-3">
                            <h3 className="headingTwo text-center mt-4 mt-md-5">
                                MORE REASONS TO BELIEVE
                            </h3>

                            <ul className="reasonsUl">
                                <li>
                                    <img
                                        src={require("../../../assets/images/PartnerMore/champion.jpg")}
                                        alt="img_not_found"
                                        className="img-fluid"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={require("../../../assets/images/PartnerMore/energen.jpg")}
                                        alt="img_not_found"
                                        className="img-fluid"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={require("../../../assets/images/PartnerMore/kopiko.jpg")}
                                        alt="img_not_found"
                                        className="img-fluid"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={require("../../../assets/images/PartnerMore/le-minerale.jpg")}
                                        alt="img_not_found"
                                        className="img-fluid"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={require("../../../assets/images/PartnerMore/lucky-day.jpg")}
                                        alt="img_not_found"
                                        className="img-fluid"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-10 mx-auto text-center">
                            <NavLink to="/partners-brand">
                                {" "}
                                <img
                                    src={
                                        require("../../../assets/icons/arrow.svg")
                                            .default
                                    }
                                    alt="icon_not_fount"
                                    className="arrowSvg"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
