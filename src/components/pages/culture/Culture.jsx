import React, { useEffect, useState } from "react";
import Banner from "../../elements/Banner";
import BannerBottom from "../../elements/BannerBottom";
import bannerImg from "../../../assets/images/People-culture/banner-people-culture.jpg";
import galleryOne from "../../../assets/images/People-culture/people-culture-g1.jpg";
import galleryTwo from "../../../assets/images/People-culture/people-culture-g2.jpg";
import galleryThree from "../../../assets/images/People-culture/people-culture-g3.jpg";
import Lightbox from "yet-another-react-lightbox";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Culture = () => {
  const [open, setOpen] = React.useState(false);
  const [openOne, setOpenOne] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);

 

  return (
    <>
      <Helmet>
        <title data-react-helmet="true">
        People and culture | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="People and Culture" />
        <meta name="keywords" content="Top retail distribution, Top distribution partner for fmcg companies, Ecossential Foods Corporation" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Ecossential Foods Corporation is the team of highly motivated, dedicated, and experienced leaders and talents with the passion, expertise."/>
        <link rel="cannonical" href="/culture" />
      </Helmet>
      <Banner image={bannerImg} title="/PEOPLE+CULTURE" />
      <BannerBottom heading="WE HAVE THE MOST AGILE, FOCUSED, GROUNDED, 
      AND EXCEPTIONALLY DETERMINED LEADERS AND TEAMS"/>

      <section className="thrive">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-4 col-lg-3 d-flex flex-column align-items-start align-items-md-end">
                  <div className="sideHeadings">
                    <h3 className="headingTwo text-start text-md-end m-0">
                      WE THRIVE
                    </h3>

                    <h3 className="headingTwo colorDark  text-start text-md-end m-0">
                      BECAUSE OF
                    </h3>

                    <h3 className="headingTwo colorDark text-start text-md-end m-0">
                      OUR PEOPLE.
                    </h3>
                  </div>
                </div>

                <div className="col-md-8 col-lg-9 mt-4 mt-md-0">
                  <p><b>Ours is a company built and strengthened by our people.</b></p>
                  <p className="justify colorGrey">
                    EFC is a team of highly motivated, dedicated, and
                    experienced leaders and talents with the passion, expertise,
                    and agility to take on the challenges inherent in further
                    growing an already massive distribution organization.
                  </p>
                  <p className="justify colorGrey">
                    At the heart of why the company works so well is our
                    philosophy of disciplined entrepreneurship. Our organization
                    is built on an entrepreneurial mindset that is backed by
                    quick decision-making and the ability to adapt easily to the
                    various local environments.
                  </p>
                  <p className="justify colorGrey">
                    One of our main strengths is our commitment to our core
                    value of Malasakit. Everyone in the company, whatever their
                    task or position, works as if they are co-owners of the
                    company, valuing it and its people as they do their family.
                  </p>
                  <p className="jutify colorGrey">
                    Malasakit speaks of compassion and stewardship - an innate
                    and deep concern for the good of the group that makes one
                    work beyond what is required, and makes one prudent in the
                    use of company resources.
                  </p>
                  <p className="justify colorGrey">
                    It is these aspects of our corporate culture that have
                    elicited our strong customer relationships, allowing EFC to
                    develop powerful strategic partnerships with our clients,
                    principals and key retailers. This, in turn, drives our
                    systems, protocols, network, and the overall success and
                    growth of the company.
                  </p>

                  <h2 className="headingOne colorDark mt-3 mb-4">
                    WE PLAY HARD! WE WORK HARDER!
                  </h2>


                  
              <div className="accordion" id="coreValues">
                <div className="accordion-item border-0 my-3">
                  <button
                    className="acordionBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h3 className="headingTwo   colorBlue">
                      /THE VALUES AT OUR CORE
                    </h3>
                    <i className="fa-solid fa-plus"></i>
                  </button>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#coreValues"
                  >
                    <div className="accordion-body">
                      <p>
                        Our organizational core values are our guiding
                        principles and fundamental beliefs. These values unite
                        us as a team and lead us to achieve our business
                        objectives.
                      </p>

                      <div className="d-flex justify-content-center">
                        <NavLink
                          to="/values"
                          className="contactBtn white text-center mt-4"
                        >
                          Our Values
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container ">
          
          <div className="gallaryBorder">
            <h2 className="headingTwo text-center mb-3">GALLERY</h2>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="relative">
                      <img
                        src={galleryOne}
                        className="img-fluid pointer"
                        alt="img_not_found pointer"
                        onClick={() => setOpen(true)}
                      />


                      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                          { src: `${require('../../../assets/images/People-culture/training/1.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/2.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/3.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/4.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/5.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/6.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/7.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/8.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/9.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/10.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/11.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/12.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/13.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/14.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/training/15.jpg')}`},
                        ]}
                      />
                    </div>

                    <p className="colorRed text-center mt-2 font4">Training and Team building</p>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="relative">
                      <img
                        src={galleryTwo}
                        className="img-fluid pointer"
                        alt="img_not_found"
                        onClick={() => setOpenOne(true)}
                      />
                         <p className="colorRed text-center mt-2 font4">Events and Parties</p>

                      <Lightbox
                        open={openOne}
                        close={() => setOpenOne(false)}
                        slides={[
                          { src: `${require('../../../assets/images/People-culture/events/11.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/12.jpg')}`},
						              { src: `${require('../../../assets/images/People-culture/events/13.jpg')}`},
						              { src: `${require('../../../assets/images/People-culture/events/14.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/16.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/1.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/2.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/3.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/4.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/5.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/6.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/7.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/9.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/events/10.jpg')}`},
						  
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="relative">
                      <img
                        src={galleryThree}
                        className="img-fluid pointer "
                        alt="img_not_found"
                        onClick={() => setOpenTwo(true)}
                      />

<p className="colorRed text-center mt-2 font4">Engagement Activities</p>

                      <Lightbox
                        open={openTwo}
                        close={() => setOpenTwo(false)}
                        slides={[
                          { src: `${require('../../../assets/images/People-culture/engagement/1.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/2.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/3.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/4.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/5.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/6.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/7.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/8.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/9.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/10.jpg')}`},
                          { src: `${require('../../../assets/images/People-culture/engagement/11.jpg')}`},
                        ]}
                      />
                    </div>
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

export default Culture;
