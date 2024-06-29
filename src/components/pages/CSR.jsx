import React, { useEffect } from "react";
import Banner from "../elements/Banner";
import { crsData } from "./csrData";
import bannerImg from "../../assets/images/csr/banner-csr.jpg";
import { Helmet } from "react-helmet";

const CSR = () => {
   
  return (
    <>
      <Helmet>
        <title data-react-helmet="true">
        CSR Activities | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="CSR Activities" />
        <meta name="keywords" content="Distribution partner for fmcg companies, Distribution partner companies in philippines" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation is  committed to give back to our society and Mother Earth."/>
         <link rel="cannonical" href="/csr" />
      </Helmet>
      <Banner image={bannerImg} title="/CSR ACTIVITIES" />
      <section className="bannerBottom">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="headingTwo text-center text-md-end text-uppercase">
                    GIVING BACK TO THE COMMUNITY WE SERVE
                  </h3>
                </div>

                <div className="col-md-9 text-center text-md-start">
                  <p className="font400">
                    Our core value of MALASAKIT goes beyond the workplace. We
                    are committed to give back to our society and Mother Earth.
                    This is born out of a deep sense of responsibility and a
                    deeper sense of gratitude for our successes. As a company,
                    we have, and will continue to create various volunteer-led
                    programs and activities promoting sustainability and
                    supporting the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-10 mx-auto">

              <div className="row">
              {crsData.map((data, index) => {
              return (
                <div className="col-md-4 mt-3" key={index}>
                  <img
                    src={data.image}
                    alt="imageNotFound"
                    className="img-fluid w-100"
                  />
                  <h5 className="mt-2 mb-2 mt-4">{data.title}</h5>
                  <p className="colorGrey m-0 text-uppercase">
                    {data.subTitle}
                  </p>
                  <p className="colorGrey medium">{data.content}</p>
                </div>
              );
            })}
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default CSR;
