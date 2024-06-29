import React, { useState, useEffect } from "react";
import Banner from "../elements/Banner";
import bannerImg from "../../assets/images/Awards/banner-awards.jpg";

import imageOne from "../../assets/images/Awards/awards-gallery-1.jpg";
import imageTwo from "../../assets/images/Awards/awards-gallery-2.jpg";
import imageThree from "../../assets/images/Awards/awards-gallery-3.jpg";
import Lightbox from "yet-another-react-lightbox";

import galleryMain from "../../assets/images/Awards/gallery/mainImg.jpg";
import { Helmet } from "react-helmet";

const Awards = () => {
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Helmet>
        <title data-react-helmet="true">
        Awards and recognition | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Awards and Recognition" />
        <meta name="keywords" content="FMCG distribution partner, Top distribution partner for fmcg companies"/>
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation is an award -winning FMCG distribution company in the Philippines."
        />
        <link rel="cannonical" href="/awards" />
      </Helmet>
            <Banner image={bannerImg} title="/AWARDS+RECOGNITION" />

            <section className="awards pb-5 pt-3 pt-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-4 pt-md-0 px-md-3">
                            <div className="awardCard">
                                <h4 className="headingThree text-center m-0 text-uppercase">
                                    PRIMADUTA AWARD
                                </h4>
                                <p className="date text-center text-uppercase ">
                                    OCTOBER, 2021
                                </p>
                                <p className="justify colorGrey awardData m-0">
                                    The Primaduta Award is a yearly honor bestowed 
                                    by the Indonesian government to acknowledge 
                                    and show appreciation for international importers 
                                    who continue to buy Indonesian products. The award 
                                    lauds the loyalty, commitment, and outstanding 
                                    performance of global companies who sustain 
                                </p>

                                {showOne ? (
                                    <p className="colorGrey justify">
                                    
                                    business relationships in Indonesia, helping 
                                    promote economic recovery, growth, and advancement 
                                    of the country.
                                    </p>
                                ) : null}
                                <div className="d-flex justify-content-center mt-2 mt-md-4">
                                    <button
                                        className="readMoreBtn"
                                        onClick={() => {
                                            if (showOne === true) {
                                                setShowOne(false);
                                            } else {
                                                setShowOne(true);
                                            }
                                        }}
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-5 pt-md-0 px-md-3">
                            <div className="awardCard">
                                <h4 className="headingThree text-center m-0 text-uppercase">
                                    AGORA AWARD
                                </h4>
                                <p className="date text-center text-uppercase ">
                                    OCTOBER, 2012
                                </p>
                                <p className="justify colorGrey awardData m-0">
                                The AGORA Award is the highest marketing honor 
                                in the country and is given annually by the 
                                Philippine Marketing Association to both 
                                corporations and individuals who have made 
                                significant contributions to the country's 
                                marketing profession and whose products and 
                                services have improved the Filipino’s way of 
                                </p>

                                {showTwo ? (
                                    <p className="colorGrey justify">
                                
                                life. The Award spotlights Filipino marketing 
                                excellence, with an emphasis on ingenuity, 
                                versatility, and innovation.
                                    </p>
                                ) : null}
                                <div className="d-flex justify-content-center mt-2 mt-md-4">
                                    <button
                                        className="readMoreBtn"
                                        onClick={() => {
                                            if (showTwo === true) {
                                                setShowTwo(false);
                                            } else {
                                                setShowTwo(true);
                                            }
                                        }}
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-5 pt-md-0 px-md-3">
                            <div className="awardCard">
                                <h4 className="headingThree text-center m-0 text-uppercase">
                                    TRADE AWARDS
                                </h4>
                                <p className="date text-center text-uppercase ">
                                    .</p>
                                <p className="date text-center text-uppercase "></p>
                                <p className="justify colorGrey awardData m-0">
                                    Within EFC’s 16 years, the company has
                                    received numerous awards, certifications,
                                    and recognition from our principals and
                                    various retail, trade, and business
                                    organizations. Among these are rather
                                    prestigious honors. Among them are: Supplier 
                                    Excellence Award (from 7-Eleven), Top Trade
                                    
                                </p>

                                {show ? (
                                    
                                    
                                    
                                   
                                    


                                    <ul className="colorGrey -small newUl p-0 m-0 ps-3">
                                        Partner Awards from the AFP Commissary and
                                    AFPCES.
                                        <li>
                                            Supplier Excellence Award (from
                                            7-Eleven)
                                        </li>
                                        <li>
                                            Top Trade Partner Awards (from the
                                            AFP Commissary and AFPCES){" "}
                                        </li>
                                        <li>
                                            Bronze Category for Trade Partner of
                                            the Year (from Robinsons)
                                        </li>
                                        <li>
                                            Silver Category for Trade Partner of
                                            the Year (from Robinsons)
                                        </li>
                                        <li>
                                            Gold Apple Category for Trade
                                            Partner of the Year (from Robinsons)
                                        </li>
                                        <li>
                                            Top 9 Supplier Award (from the AFP
                                            Commissary) Friendship in Trade
                                            Award (from Isetann)
                                        </li>
                                        <li>
                                            Most Outstanding Key Accounts
                                            Manager (from Robinsons)
                                        </li>
                                        <li>
                                            Best in New Product (from Isetann)
                                        </li>
                                    </ul>
                                ) : null}
                                <div className="d-flex justify-content-center mt-2 mt-md-4">
                                    <button
                                        className="readMoreBtn"
                                        onClick={() => {
                                            if (show === true) {
                                                setShow(false);
                                            } else {
                                                setShow(true);
                                            }
                                        }}
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="awardGallery">
                <div className="container">
                    <h2 className="headingTwo text-center mb-3">GALLERY</h2>
                    <div className="row">
                        <div className="col-md-10 mx-auto mt-3">
                            <div className="relative">
                                <img
                                    src={galleryMain}
                                    className="img-fluid pointer w-100 "
                                    alt="img_not_found"
                                    onClick={() => setOpen(true)}
                                />

                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={[
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/1.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/2.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/3.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/4.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/5.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/6.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/7.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/8.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/9.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/10.jpg")}`,
                                        },
                                        {
                                            src: `${require("../../assets/images/Awards/gallery/11.jpg")}`,
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Awards;
