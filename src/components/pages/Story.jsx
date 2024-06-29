import React, { useEffect } from "react";
import Banner from "../elements/Banner";
import bannerImg from "../../assets/images/story/banner-our-story.jpg";
import BannerBottom from "../elements/BannerBottom";

import blue from "../../assets/images/story/color-blue.jpg";
import red from "../../assets/images/story/color-red.jpg";
import kopiko from "../../assets/images/story/kopiko-story.jpg";
import { Helmet } from "react-helmet";

const Story = () => {
   
  return (
    <>
     <Helmet>

<title data-react-helmet="true">
  Our Story - Ecossential Foods Corporation
</title>
<link rel="canonical" href="https://php.com.ph" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta data-react-helmet="true" name="title" content="Our Story" />
<meta name="keywords" content="Ecossential Foods Corporation, distribution business, product distribution, distributors company, retail philippines, retail business in the philippines" />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta
  data-react-helmet="true"
  name="description"
  content="World-class distributor and marketer of diverse consumer goods"
/>
<link rel="cannonical" href="/story" />
</Helmet>
      <Banner image={bannerImg} title="/OUR STORY"/>
      <BannerBottom heading="BEHIND EVERY SALE IS A HUMAN STORY" />

      <div className="container">
        <div className="row py-4 pt-5">
          <div className="col-md-10 mx-auto">
            <p className="colorGrey justify">
              <b>Founded in October 2005, Ecossential Foods Corporation (EFC) was built with the mission of providing essential, everyday products to respond to the needs of  Filipinos.</b></p>
            
            <p className="colorGrey justify"><b>
              Starting out with a single coffee candy brand, EFC has slowly grown a rich product portfolio with brands in growing categories, partnering with reputable global companies in coffee, cereals, snacks, beverages and nutritional products.
              </b></p>
          </div>
<div className="col-md-10 mx-auto">
  <div className="row">
  <div className="col-md-7 mt-3 pe-md-0">
            <div className="relative">
              <img src={red} className="img-fluid mission" alt="" />
              <div className="overlay missionOverlay p-3 p-lg-4 ">
                <h3 className="white">OUR MISSION</h3>
                <p className="white ">
                  To improve the quality of life of the Filipino consumers by
                  providing quality products that are easily accessible through
                  efficient distribution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-3 ps-md-0">
            <div className="relative">
              <img src={blue} className="img-fluid vision" alt="" />
              <div className="overlay visionOverlay p-3 p-lg-4">
                <h3 className="white">OUR VISION</h3>
                <p className="white  ">
                  To be the most preferred National Distribution Company for
                  Fast Moving Consumer Goods in the Philippines.
                </p>
              </div>
            </div>
          </div>

  </div>
</div>

       
          <div className="col-md-10 mx-auto pt-5">
          <p className="colorGrey justify">
          <b>At the heart of this growth is Disciplined Entrepreneurship which has become the DNA of EFC's business. With our strong desire to provide accessible quality products for every Filipino, EFC set out to build a company and infrastructure entirely ready to face the challenges that come with making brands the top-of-mind and everyday choice.</b>
          </p>
            <p className="colorGrey justify">
            <b>We've come a long way to build who we are. Starting from the ground up, EFC made a name for products who competed against established brands in the Philippines who have been in the market for several decades. And this is only the beginning. EFC continues to aspire to reach its vision largely through braver, bolder and borderless strategies, supported by our growing family of talented and dedicated teams who are disciplined, highly efficient and unafraid of challenges.</b>
            </p>

          </div>
          <div className="col-md-10 mx-auto">
          <h4 className="colorBlue bold7 my-4">CASE 1/ THE KOPIKO STORY</h4>

            <img src={kopiko} alt="imgNotFound" className="img-fluid" />


            <p className="justify colorGrey my-4 bold6">EFC's success is a story of David beating Goliath.</p>
            <p className="justify colorGrey">
            <b>The company is best known for the massive distribution of Kopiko 3-in-1 coffee mixes. Now, Kopiko is the undisputed market leader in the soluble coffee segment in the Philippines with almost 50% market share, but this did not come without its challenges.</b>
            </p>

            <p className="justify coloGrey">
              <b>Competing against household brands in the country, powerful marketing strategies and an unparalleled distribution infrastructure propelled Kopiko to gain the top spot. This supported what was an already excellent product to change the landscape for soluble coffee in the Philippines.</b></p>

            <p className="justify colorGrey">
            <b>From 2005 to today, the alliance between Mayora Group and EFC has resulted in unprecedented growth for EFC and incredible successes for the Mayora Group brands. The partnership has also fostered successes and growth among other entrepreneurs, sub-distributors, as well as its retail partners all over the country. It has created a lot of jobs and has provided additional income for a million retailers and sari-sari stores who sell our products to 100 million Filipinos.</b>
            </p>

            <p className="justify colorGrey">
            <b>Carrying the learnings from this feat, EFC continues to see tremendous growth within the next decade as it seeks partnerships with another equally cutting edge FMCG global companies to penetrate the Philippine market with equally exciting and marketable brands.</b>
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Story;
