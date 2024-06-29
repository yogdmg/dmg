import React, { useState, useEffect } from "react";
import Banner from "../../elements/Banner";
import BecomePartner from "../../elements/BecomePartner";
import kalbe from "../../../assets/images/Mayora-kalbe-Logo/our-partners-kalbe.jpg"
import mayora from   "../../../assets/images/Mayora-kalbe-Logo/our-partners-mayora.jpg"


import LayerOne from "./LayerOne";
import LayerTwo from "./LayerTwo";
import LoadMore from "./LoadMore";

import bannerImgOne from "../../../assets/images/banner-partners-mayora.jpg";
import bannerImgTwo from "../../../assets/images/banner-partners-kalbe.jpg"
import { Helmet } from "react-helmet";

const PartnerBrands = () => {
 

  return (
    <>
        <Helmet>
        <title data-react-helmet="true">
        Our partners | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Our Partners" />
        <meta name="keywords" content="Product distribution, Product distribution, Ecossential Foods Corporation
" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation is leading FMCG distribution in Philippines. Become a partner with Ecossential Foods Corporation
          "
        />
        <link rel="cannonical" href="/partners-brand" />
      </Helmet>
      <section className="bannerCarousel mt-5 mt-md-0">
        <div
          id="brandCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#brandCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#brandCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img src={bannerImgOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={bannerImgTwo} className="d-block w-100" alt="..." />
            </div>
            
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#brandCarousel"
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
            data-bs-target="#brandCarousel"
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

      <section className="py-5">
        <div className="container">

        
          <div className="row">

            <div className="col-md-10 mx-auto">

              <div className="row">
              <div className="col-md-4 ">
              <div className="brandImgContainer p-2 p-md-4">
                <img
                  src={mayora}
                  className=" img-fluid"
                  alt="img_not_found"
                />
              </div>
            </div>
            <div className="col-md-8 mt-3 mt-md-0">
              <h4 className="headingTwo text-uppercase">
                MAYORA GROUP (PT MAYORA INDAH TBK)
              </h4>

              <p className="justify">
              The Mayora Group was formally established in 1977 and has now grown as a recognized global company in the fast moving consumer goods industry. It has since been producing and marketing the best love brands in the varied categories: biscuit, candy, wafer, chocolate, coffee, instant food, beverage and cereal.
              </p>

              <p className="justify">
                The Mayora Group has been serving goodness and happiness for
                more than <b> 65 years </b>with a global presence in over{" "}
                <b>90 countries </b> employing over <b>30,000 people.</b>
              </p>

              <div className="partnerBranding">
                <div className="row">
                  <LayerOne />
                </div>

                <div className="row collapse" id="readMore">
                  <LoadMore />
                </div>
              </div>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          
          <div className="col-md-10 mx-auto text-center">
          <hr />
            <a
              className="colorRed"
              data-bs-toggle="collapse"
              href="#readMore"
              role="button"
              aria-expanded="false"
              aria-controls="readMore"
            >
              Load More
            </a>
          </div>
        </div>
      </div>

      <section className="py-5 pb-0">
        <div className="container">
          <div className="row">

            <div className="col-md-10 mx-auto">
              <div className="row">
              <div className="col-md-4 ">
              <div className="brandImgContainer p-2 p-md-4">
                <img
                  src= {kalbe}
                  className=" img-fluid"
                  alt="img_not_found"
                />
              </div>
            </div>
            <div className="col-md-8 mt-3 mt-md-0">
              <h4 className="headingTwo text-uppercase">kalbe international</h4>

              <p className="justify">
                Kalbe International is a multi-national marketing company that
                mainly handles the trading/export transaction of total Kalbe
                Farm group of business. The core operation of Kalbe
                International includes product development, procurement,
                production, marketing and brand management, up to logistics and
                distribution.
              </p>

              <p className="justify">Kalbe International Marketing Division currently headquarters
                in 12 countries: Singapore, Cambodia, Malaysia, Myanmar,
                Philippines, Vietnam, Sri Lanka, South Africa, Nigeria,
                Thailand, and UAE.
              </p>

              <div className="partnerBranding">
                <div className="row">
                   

                  <LayerTwo />
                </div>
              </div>
            </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="reasons">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
            <BecomePartner />
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default PartnerBrands;
