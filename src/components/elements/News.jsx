import React from "react";

import agora from "../../assets/images/news/agora.jpg";
import primduta from "../../assets/images/news/primduta.jpg";
import latestNews from "../../assets/images/news/latest-news-bg.jpg";
import axios from "axios";
import $, { event } from "jquery";

const News = () => {
    const submitHandler= (event) => {
        event.preventDefault();
        const email=event.target.email.value;
       
        

        const formdata = new FormData();
        formdata.append('email',email);
   

        axios.post("https://efc.com.ph/newsletter.php",
            formdata
        )
        .then(response => {
            $(".thankyou").slideDown().delay(2000).slideUp();

            document.getElementById("newsForm").reset();
    console.log(response.data);
            
        })
        .catch(function (error) {
            $(".error").slideDown().delay(3000).slideUp();
            console.log("error");
    console.log(error);
        });
    }
    return (
        <section className="news">
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-md-4 mt-0 mt-md-3">
                        <div className="relative newsImg">
                            <img
                                src={latestNews}
                                alt="img_not_found"
                                className="img-fluid newsImgBg"
                            />
                            <div className="overlay d-flex flex-column justify-content-center -overlayOne px-3 px-md-4 py-5">
                                <h5 className="white l-news">Latest News</h5>
                                <p className="white">
                                    Subscribe for future updates
                                </p>
                                <div className="form">
                                    <form action="" id="newsForm" onSubmit={submitHandler}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="newsCustomField"
                                        />
                                        <button className="submitBtn">
                                            Submit
                                        </button>
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
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="formAlt mt-3">
                            <form action="">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="customFieldOne"
                                />

                                <button className="submitBtn submitBtnAlt">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <div className="normalCard">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ backgroundColor: "#3D0613" }}
                            >
                                <img
                                    src={agora}
                                    alt="img_not_found"
                                    className="img-fluid col-7 col-md-12"
                                />
                            </div>

                            <h4 className="colorNews mt-3 mb-4">
                                <span>AGORA</span> AWARDS
                            </h4>
                            <p className="justify mt-3 font300 height21">
                                Philippine Marketing Association Excellence in
                                Marketing Management
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <div className="normalCard">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ backgroundColor: "#030708" }}
                            >
                                <img
                                    src={primduta}
                                    alt="img_not_found"
                                    className="img-fluid col-7 col-md-12"
                                />
                            </div>

                            <h4 className="colorNews mt-3 mb-4">
                                <span>PRIMADUTA</span> AWARDS
                            </h4>
                            <p className="justify mt-3 font300 height21">
                                Outstanding performance in doing business with
                                Indonesia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
