import React, { useEffect, useRef, useState } from "react";
import bannerImgOne from "../../assets/images/home/1.jpg";
import bannerImgTwo from "../../assets/images/home/2.jpg";
import bannerImgThree from "../../assets/images/home/3.jpg";
import gImageOne from "../../assets/images/home/awards-gallery-1.jpg";
import gImageTwo from "../../assets/images/home/home-training.jpg";
import gImageThree from "../../assets/images/home/home-csr.jpg";
import endImg from "../../assets/images/home/sari-sari.png";
import indexOne from "../../assets/images/home/index-1.jpg";
import indexTwo from "../../assets/images/home/index-2.jpg";
import indexThree from "../../assets/images/home/index-3.jpg";
import indexFour from "../../assets/images/home/index-4.jpg";
import { NavLink } from "react-router-dom";
import BusMotion from "../BusMotion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Landing = () => {
    // Flag to render bus
    const [renderBus, setRenderBus] = useState(false);

    // Ref for the divs and container involved in the animation
    const refDiv1 = useRef(null);
    const refDiv2 = useRef(null);
    const refDiv3 = useRef(null);
    const refContainer = useRef(null);

    // Different animation variants
    const variants = {
        left: { x: "-40vw" },
        right: { x: "40vw" },
        end: { x: 0 },
        duration: { duration: 0.7 },
    };
    useEffect(() => {
        // Render bus when the component is loaded
        // So that all the refs have their respective value
        setRenderBus(true);
    }, []);
    return (
        <>
         <Helmet>

<title data-react-helmet="true">
FMCG distribution partner for brands in Philippines | Ecossential Foods Corporation
</title>
<link rel="canonical" href="https://efc.com.ph" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta data-react-helmet="true" name="title" content="Group of Companies" />
<meta name="keywords" content="Memorial Lot, Memorial Lot for sale, Memorial Parks in the Philippines, Heavenly Garden Memorial Park" />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta
    data-react-helmet="true"
    name="description"
    content="Ecossential Foods is preferred partners for FMCG brands in Philippines. EFC is engaged in product distribution, merchandising and in-store excellence."/>
<link rel="cannonical" href="/" />
</Helmet>
            <section className="bannerCarousel mt-5 mt-md-0">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img
                                src={bannerImgOne}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item ">
                            <img
                                src={bannerImgTwo}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src={bannerImgThree}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="bannerBottom">
                
                <motion.div
                    // initial={{ opacity: 0.2, y: "8vh" }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={variants.duration}
                    // variants={variants}
                    className="container"
                >
                
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-5">
                                    <h3 className="headingTwo text-center text-md-end text-uppercase indexblock-head">
                                        <div>ECOSSENTIAL</div>
                                        <div>FOODS CORPORATION</div>
                                    </h3>
                                </div>

                                <div className="col-md-7 text-center text-md-start">
                                    <p class="index-paraMain">
                                        We are the trusted distribution growth
                                        partner of global and local brands with
                                        more than 15 years of solid
                                        transformative experience in the
                                        fast-moving consumer goods industry in
                                        the Philippines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="landing">
                <div className="container" ref={refContainer}>
                    {renderBus && (
                        <BusMotion
                            refData={{
                                refDiv1,
                                refDiv2,
                                refDiv3,
                                refContainer,
                            }}
                        />
                    )}

                    <div
                        className="row py-2 pt-md-4 py-lg-5 rowOne px-lg-3"
                        ref={refDiv1}
                    >
                        <motion.div
                            // initial="left"
                            // whileInView="end"
                            // transition={variants.duration}
                            // variants={variants}
                            className="col-md-6 mt-3"
                        >
                            <img
                                src={indexOne}
                                alt="Landing_Image_one"
                                className="img-fluid"
                            />
                        </motion.div>

                        <motion.div
                            // initial={"right"}
                            // whileInView={"end"}
                            // transition={variants.duration}
                            // variants={variants}
                            className="col-md-6 mt-0 mt-lg-3 relative px-lg-6"
                        >
                            <h3 className="headingThree colorBlue mt-indexblock">
                                VAST DISTRIBUTION FOOTPRINT THAT SPANS THE ENTIRE
                                COUNTRY
                            </h3>

                            <p className="justify">
                                Our massive distribution network covers the
                                entire country with a geographic reach wider
                                than most distribution companies. From
                                supermarkets, groceries, public markets,
                                convenience stores, drug stores, and sari-sari
                                stores, our products get to where they need to
                                go, when they need to be there.
                            </p>

                            <i className="fa-solid fa-location-dot locationOne"></i>
                        </motion.div>
                    </div>

                    <div
                        className="row py-2 pt-md-0 py-lg-5 rowTwo px-md-3 "
                        ref={refDiv2}
                    >
                        <motion.div
                            // initial={{ opacity: 0, y: "20vh" }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // transition={variants.duration}
                            className="order-last order-md-first col-md-6 mt-0 mt-lg-3 relative px-lg-6"
                        >
                            <i className="fa-solid fa-location-dot locationOne"></i>
                            <h3 className="headingThree colorBlue mt-indexblock">
                                STRATEGIC PARTNERSHIPS THAT CREATE POWERFUL
                                BRANDS
                            </h3>

                            <p className="justify">
                                We have built strong, reliable, and long-term
                                partnerships with leading global FMCG companies
                                to bring products closer to the Filipino
                                retailers and consumers.
                            </p>
                        </motion.div>

                        <motion.div
                            // initial={{ opacity: 0, y: "20vh" }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // transition={variants.duration}
                            className="order-first order-md-last col-md-6 mt-3"
                        >
                            <img
                                src={indexTwo}
                                alt="Landing_Image_one"
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>

                    <div
                        className="row py-2 pt-md-0 pb-md-2 py-lg-5 rowThree px-md-3 "
                        ref={refDiv3}
                    >
                        <motion.div
                            // initial={{ x: "-30vw", opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={variants.duration}
                            variants={variants}
                            className="col-md-6 mt-3"
                        >
                            <img
                                src={indexThree}
                                alt="Landing_Image_one"
                                className="img-fluid"
                            />
                        </motion.div>

                        <motion.div
                            // initial={{ x: "30vw", opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={variants.duration}
                            // variants={variants}
                            className="col-md-6 mt-0 mt-lg-3 relative px-lg-6"
                        >
                            <i className="fa-solid fa-location-dot locationOne"></i>
                            <h3 className="headingThree colorBlue mt-indexblock">
                                TEAM OF PASSIONATE EXPERTS WHO ARE THE BEST IN
                                THE INDUSTRY
                            </h3>

                            <p className="justify">
                                We have built a team of highly motivated and
                                dedicated specialists with the grit and agility
                                to forge and run one of the top distribution
                                companies in the country, each working from an
                                entrepreneurial mindset and anchored on our core
                                value of MALASAKIT.
                            </p>
                        </motion.div>
                    </div>

                    <div className="row rowBottom">
                        <img
                            src={endImg}
                            className="img-fluid"
                            alt="not found"
                        />
                    </div>
                </div>
            </section>

            <section className="awardGallery">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: "10vh" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="headingOne colorBlue text-center mb-3 mb-md-4 mb-lg-5 text-uppercase"
                    >
                        everything your business needs
                    </motion.h1>
                    <div className="row">
                        <motion.div
                            initial={"left"}
                            whileInView={"end"}
                            transition={variants.duration}
                            variants={variants}
                            className="col-lg-6 order-last order-lg-first"
                        >
                            <h5 className="colorRed bold7  text-uppercase mt-3">
                                {" "}
                                sales and marketing
                            </h5>
                            <p className="justify small">
                                We are relentless in our pursuit to bring
                                quality products at great value to every
                                Filipino household. We do this by driving
                                efficient and timely distribution and placement
                                of our products in strategic and relevant retail
                                channels. We design our route-to-market
                                strategies to ensure accessibility of our
                                products at the right place, at the right time.
                                Our mission is to delight the Filipino consumer.
                            </p>

                            <h5 className="colorRed bold7  text-uppercase">
                                IN-STORE EXCELLENCE
                            </h5>
                            <p className="justify small">
                                We recognize that the “moment of truth” for our
                                brands happens at the store shelves. This drives
                                our passion to ensure our products are available
                                and visible to the consumers wherever they shop,
                                from sari-sari stores to public markets to
                                groceries and supermarkets to e-commerce. We
                                strive for best-in-class shelf display in
                                self-service retail channels and frontage
                                display in traditional retail channels. We
                                ensure efficient execution of in-store and
                                below-the-line programs to help drive purchase
                                decisions toward our brands.
                            </p>

                            <h5 className="colorRed bold7  text-uppercase">
                                SUPPLY CHAIN AND LOGISTICS
                            </h5>
                            <p className="justify small">
                                Our vast distribution network spans the entire
                                Philippines. We have distribution centers in key
                                cities to ensure efficient and timely delivery
                                of our products to our customers. Our supply
                                chain team employs best-in-class processes and
                                state-of-the-art ERP and warehouse systems to
                                ensure efficient importation and distribution of
                                our products anywhere in the country.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={"right"}
                            whileInView={"end"}
                            transition={variants.duration}
                            variants={variants}
                            className="order-first order-lg-last col-lg-6 d-flex justify-content-center"
                        >
                            <img
                                src={indexFour}
                                className="img-fluid col-md-8 col-lg-12 "
                                alt=""
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="awardGallery bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-8 mt-3 px-1">
                                    <div className="relative">
                                        <div className="awardLink">Awards</div>
                                        <NavLink to="/awards">
                                            <img
                                                src={gImageOne}
                                                className="img-fluid "
                                                alt="award_imageOne"
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3 px-1 ">
                                    <div className="relative">
                                        <div className="awardLink">
                                            Training
                                        </div>
                                        <NavLink to="/culture">
                                            <img
                                                src={gImageTwo}
                                                className="img-fluid"
                                                alt="award_imageTwo"
                                            />
                                        </NavLink>
                                    </div>
                                    <div className="relative pt-3 pt-md-2">
                                        <div className="awardLink awardLinkOne mt-2 mt-md-0 ">
                                            CSR
                                        </div>
                                        <NavLink to="/csr">
                                            <img
                                                src={gImageThree}
                                                className="img-fluid"
                                                alt="award_imageThree"
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
