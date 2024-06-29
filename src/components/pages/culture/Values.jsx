import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import bannerImg from "../../../assets/images/Values/banner-values.jpg"
import values from "../../../assets/images/Values/values-1.png"
import Banner from "../../elements/Banner";
import BannerBottom from "../../elements/BannerBottom";
const Values = () => {
  
  return (
    <>
      <Helmet>
        <title data-react-helmet="true">
        Our core values | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Values" />
        <meta name="keywords" content="Top distribution partner for fmcg companies, Product distribution, Product distribution
" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Integrity, Accountability, Malasakit, Passion for Excellence, Fairness & Respect and  Collaboration are the core values of Ecossential Foods Corporation
          "
        />
        <link rel="cannonical" href="/values" />
      </Helmet>
      <Banner image={bannerImg} title="/OUR VALUES"/>
      <BannerBottom heading="OUR CORE VALUES" />
      <section className="values mt-5">
        <div className="container">
          <div className="row">
             
            <div className="col-md-4">
              <img
                src={values}
                className="img-fluid"
                alt="values_image"
              />
            </div>

            <div className="col-md-8">
              <div className="accordion" id="valuesAccordion">
                <div className="accordion-item   valueBorder ">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                     

                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">I</h2>
                      </div>
                    </div>

                    <div>
                      <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        Integrity
                      </h5>
                      <p className="m-0 colorGrey text-start">
                        We do the right thing, even when no one is looking. We
                        are honest, ethical, and we follow the rules.
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#valuesAccordion"
                  >
                    <div className="accordion-body p-0"></div>
                  </div>
                </div>
                <div className="accordion-item  valueBorder">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                     

                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">A</h2>
                      </div>
                    </div>

                    <div>
                    <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        Accountability
                      </h5>
                      <p className="m-0 colorGrey text-start">
                      We deliver things with excellence. We hold ourselves to a high standard. “Di pwede ang pwede na. Di pwede ang bahala na.”
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#valuesAccordion"
                  >
                   <div className="accordion-body p-0"></div>
                  </div>
                </div>

                <div className="accordion-item valueBorder">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                     
                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">M</h2>
                      </div>
                    </div>

                    <div>
                    <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        malasakit
                      </h5>
                      <p className="m-0 colorGrey text-start">
                        We value the company as if it is our own family. We do
                        what is right for the company and its people.
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#valuesAccordion"
                  >
                <div className="accordion-body p-0"></div>
                  </div>
                </div>

                <div className="accordion-item valueBorder">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                     
                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">E</h2>
                      </div>
                    </div>

                    <div>
                    <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        passion for excellence
                      </h5>
                      <p className="m-0 colorGrey text-start">
                        We commit our heart and mind to everything we do. We do
                        things with a sense of urgency. We continue to improve
                        and innovate.
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#valuesAccordion"
                  >
                  <div className="accordion-body p-0"></div>
                  </div>
                </div>

                <div className="accordion-item valueBorder">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                     
                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">F</h2>
                      </div>
                    </div>

                    <div>
                    <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        fairness & respect
                      </h5>
                      <p className="m-0 colorGrey text-start">
                        We respect our peers and treat one another with dignity.
                        We treat our peers and our customers the way we want to
                        be treated. We conduct ourselves in a manner that will
                        project a good name for the company.
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#valuesAccordion"
                  >
                   <div className="accordion-body p-0"></div>
                  </div>
                </div>

                <div className="accordion-item valueBorder">
                  <button
                    className="valuesBtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                     
                    <div>
                      <div className="valueBox">
                        <h2 className="bold7 m-0 colorRed">C</h2>
                      </div>
                    </div>

                    <div>
                    <h5 className="colorRed text-uppercase text-start m-0 bold6">
                        collaboration
                      </h5>
                      <p className="m-0 colorGrey text-start">
                        We foster teamwork within the company. We are team-oriented. We value partnerships with our customers,
                        suppliers, and stakeholders.
                      </p>
                    </div>
                  </button>

                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#valuesAccordion"
                  >
                    <div className="accordion-body p-0"></div>
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

export default Values;
