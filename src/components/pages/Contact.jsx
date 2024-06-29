import React from "react";
import $, { event } from "jquery";
import BannerBottom from "../elements/BannerBottom";
import ReCAPTCHA from "react-google-recaptcha";
import axios, { Axios } from 'axios';
import { Helmet } from "react-helmet";

const Contact = () => {
    // const SendMain = () => {
    //     let name = $("#contact-2-name").val();
    //     let number = $("#contact-2-number").val();
    //     let email = $("#contact-2-email").val();
    //     let company = $("#contact-2-company").val();
    //     let subject = $("#contact-2-subject").val();
    //     let message = $("#message").val();

    //     if (
    //         name === "" ||
    //         number === "" ||
    //         email === "" ||
    //         company === "" ||
    //         subject === "" ||
    //         message === ""
    //     ) {
    //         $(".info").slideDown().delay(3000).slideUp();
    //     } else {
    //         $(".done").slideDown().delay(2000).slideUp();

    //         $.ajax({
    //             method: "POST",
    //             url: "https://formsubmit.co/ajax/efccustomercare@efc.com.ph",
    //             dataType: "json",
    //             accepts: "application/json",
    //             data: {
    //                 Name: name,
    //                 Number: number,
    //                 Email: email,
    //                 Company: company,
    //                 Subject: subject,
    //                 Message: message,
    //             },
    //             success: (data) => {
    //                 $(".thankyou").slideDown().delay(2000).slideUp();

    //                 document.getElementById("myform").reset();
    //             },
    //             error: (err) => {
    //                 $(".error").slideDown().delay(3000).slideUp();
    //                 console.log("error");
    //             },
    //         });
    //     }



    // };



    const submitHandler= (event) => {
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const tel=event.target.tel.value;
        const company=event.target.company.value;
         const Subject=event.target.Subject.value;
         const message=event.target.message.value;

        

        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('tel',tel);
       
        formdata.append('email',email);
        formdata.append('company',company);
        formdata.append('Subject',Subject);
         formdata.append('message',message);

        axios.post("https://tiktok.simboz.com/form.php",
            formdata
        )
        .then(response => {
            $(".thankyou").slideDown().delay(2000).slideUp();

                    document.getElementById("myform").reset();
            console.log(response.data);
        })
        .catch(function (error) {
             $(".error").slideDown().delay(3000).slideUp();
                    console.log("error");
            console.log(error);
        });
    }

    return (
        <>
          <Helmet>
        <title data-react-helmet="true">
        Contact us | Ecossential Foods Corporation
        </title>
        <link rel="canonical" href="https://efc.com.ph" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
        <meta data-react-helmet="true" name="title" content="Contact us" />
        <meta name="keywords" content="Ecossential Foods Corporation, Top distribution partner for fmcg companies, Product distribution"/>
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          data-react-helmet="true"
          name="description"
          content="Contact Ecossential Foods Corporation, the leading FMCG distribution in Philippines."/>
         <link rel="cannonical" href="/contact" />
      </Helmet>
            <section className="contactTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <h2 className="headingOne text-center text-uppercase">
                                <br></br>
                                <br></br>
                                <br></br>
                                Please Reach Out To Us
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <form action="" id="myform" onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-md-8 py-3 py-md-5 ">
                                <div className="contactSec">
                                    <div className="row">
                                        <div className="col-md-6 mt-3 ">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                id="contact-2-name"
                                                name="name"
                                                required
                                                className="customField"
                                            />
                                        </div>

                                        <div className="col-md-6 mt-3 ">
                                            <input
                                                type="number"
                                                placeholder="Your Phone Number"
                                                id="contact-2-number"
                                                name="tel"
                                                className="customField"
                                            />
                                        </div>

                                        <div className="col-md-6 mt-3 ">
                                            <input
                                                id="contact-2-email"
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Your Email"
                                                className="customField"
                                            />
                                        </div>

                                        <div className="col-md-6 mt-3 ">
                                            <input
                                                type="text"
                                                placeholder="Your Company"
                                                id="contact-2-company"
                                                name="company"
                                                className="customField"
                                            />
                                        </div>

                                        <div className="col-md-12 mt-3 ">
                                            <input
                                                type="text"
                                                id="contact-2-subject"
                                                placeholder="Subject"
                                                className="customField"
                                                name="Subject"
                                            />
                                        </div>

                                        <div className="col-md-12 mt-3 ">
                                            <textarea
                                                rows="4"
                                                id="message"
                                                name="message"
                                                className="customField"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>








                                        <div className="col-md-12">
                                            <div className="info hide">
                                                <p className="m-0 text-danger  ">
                                                    Please Fill All the fields
                                                </p>
                                            </div>
                                            <div className="done hide">
                                                <p className="m-0 text-danger  ">
                                                    Please wait a while
                                                </p>
                                            </div>
                                            <div className="error hide">
                                                <p className="m-0 text-danger  ">
                                                    Sorry! Please check your
                                                    internet
                                                </p>
                                            </div>

                                            <div className="thankyou hide">
                                                <p className="m-0 text-danger  ">
                                                    Thanks for contacting. We'll
                                                    get back to you very soon.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mt-3 ">
                                         <button
                                                className="buttonMain"
                                                type="submit"
                                               
                                                id="formSubmit"
                                            >
                                                Submit
                                            </button>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 py-3 py-md-5">
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-location-dot fontawesome"></i>
                                    </div>

                                    <div className="col-11">
                                        <p className="m-0">
                                            <b>Location:</b>
                                        </p>
                                        <address className="  colorGrey">
                                            <p>
                                                METRO MANILA BRANCH OFFICE{" "}
                                                <br />
                                                Ignacio Complex <br />
                                                48 Amang Rodriguez, Manggahan
                                                <br />
                                                Pasig City, Philippines, 1611
                                            </p>
                                        </address>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-1">
                                        <i className="fa-solid fa-phone fontawesome"></i>
                                    </div>

                                    <div className="col-11">
                                        <p className="m-0">
                                            <b>Phone:</b>
                                        </p>

                                        <p className="m-0 colorGrey">
                                            <a
                                                href="tel:(632)8546-4407"
                                                className="phone"
                                            >
                                                (632) 8646-4407 Loc 100
                                            </a>
                                        </p>
                                        <p className="m-0 colorGrey">
                                            <a
                                                href="tel:(632)8682-7850"
                                                className="phone"
                                            >
                                                (632) 8682-7850 Loc 100
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-1">
                                        <i className="fa-solid fa-envelope fontawesome"></i>
                                    </div>

                                    <div className="col-11">
                                        <p className="m-0">
                                            <b>Email:</b>
                                        </p>

                                        <p className="m-0 colorGrey">
                                            <a
                                                href="mailto:efccustomercare@efc.com.ph"
                                                className="phone"
                                            >
                                                efccustomercare@efc.com.ph
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
