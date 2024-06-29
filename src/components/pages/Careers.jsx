import React, { useState } from "react";
import Banner from "../elements/Banner";
import BannerBottom from "../elements/BannerBottom";
import bannerImg from "../../assets/images/career/banner-careers.jpg";
import { Helmet } from "react-helmet";
import PdfModal from "../elements/PdfModal";
import ReCAPTCHA from 'react-google-recaptcha';

//6LfHHgQqAAAAALqbuu3e8Pv-SbooXMXx6dqDNL07

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  const [capVal, setCapVal] = useState(null);

  const [model, setModel] = useState(false);

  const handleOpenModal = (pdfUrl) => {
    setCurrentPdfUrl(pdfUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPdfUrl("");
  };

  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <>
      {model && (
        <div className="apply-model">
          <div className="apply-model-content">
            <div className="apply-model-header mb-4">
              <h2>Apply Now</h2>
              <button className="close-btn" onClick={() => setModel(false)}>
                Close
              </button>
            </div>
            <div className="apply-model-body">
              <form>
                <div className=" field-container d-md-flex">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="custom-field"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <div className="field-container d-md-flex">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  
                  <select name="position" id="position">
                    <option value="">Select Position</option>
                    <option value="1">Key Accounts Management</option>
                    <option value="2">Distribution Management</option>
                    <option value="3">Trade Marketing</option>
                    <option value="4">Sales Information & Sales Capability</option>
                    <option value="5">Supply Chain and Logistics</option>
                    <option value="6">Human Resources & Corporate Services</option>
                    <option value="7">Finance and Accounting</option>
                    <option value="8">Management Trainee</option>
                  </select>
                </div>

                <div className="field-container">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    className="resume"
                    placeholder="Upload your CV"
                  />
                </div>
                <div className="field-container">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <ReCAPTCHA sitekey="6LfHHgQqAAAAALqbuu3e8Pv-SbooXMXx6dqDNL07" onChange={(val) => setCapVal(val)} />
                <div className="field-container">
                  <button type="submit" className="apply-now" disabled={!capVal}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Helmet>
        <title data-react-helmet="true">
          Career with us | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta
          data-react-helmet="true"
          name="title"
          content="Group of Companies"
        />
        <meta
          name="keywords"
          content="Career with EFC, Ecossential Foods Corporation, Top distribution company"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Join Ecossential Foods Corporation, the leading FMCG distribution company in Philippines."
        />
        <link rel="cannonical" href="/careers" />
      </Helmet>
      <Banner image={bannerImg} title="/CAREERS" />
      <BannerBottom
        heading={`WE ARE A COMPANY WITH PURPOSE.`}
        headingTwo="LET US HELP YOU FIND YOURS."
      />

      <section className="career mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p className="colorGrey justify font18">
                We focus on two key concerns: the efficient distribution of our
                clients’ products thus strengthening their brands in our
                markets, and building a team of experts of diverse talents and
                backgrounds allowing each one an equal opportunity for growth.{" "}
              </p>
              <p className="colorGrey justify font18">
                More importantly, we seek to go beyond improving our employees’
                skills and building their networks. We are here to help them
                discover their purpose and allow them to feed the dreams they
                have for themselves, their families, and their tomorrows.{" "}
              </p>
              <p className="justify bold4 font18">
                If you have experience in any of the skills listed below and are
                interested to grow with us, please send your CV to
                <a href="mailto:efccareers@efc.com.ph">
                  {" "}
                  efccareers@efc.com.ph
                </a>
              </p>
              <ul className="careerUl p-3">
                {[
                  {
                    title: "Key Accounts Management",
                    url: "./pdf/1.pdf",
                  },
                  {
                    title: "Distribution Management",
                    url: "./pdf/2.pdf",
                  },
                  {
                    title: "Trade Marketing",
                    url: "./pdf/3.pdf",
                  },
                  {
                    title: "Sales Information & Sales Capability",
                    url: "./pdf/4.pdf",
                  },
                  {
                    title: "Supply Chain and Logistics",
                    url: "./pdf/5.pdf",
                  },
                  {
                    title: "Human Resources & Corporate Services",
                    url: "./pdf/6.pdf",
                  },
                  {
                    title: "Finance and Accounting",
                    url: "./pdf/7.pdf",
                  },
                  {
                    title: "Management Trainee",
                    url: "./pdf/8.pdf",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <span>{item.title}</span>
                    <span className="buttonCareer">
                      <button onClick={() => handleOpenModal(item.url)}>
                        View More
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
              <PdfModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                pdfUrl={currentPdfUrl}
              />

              <div className="text-center">
                <button className="apply-now" onClick={()=>setModel(true)} >Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
