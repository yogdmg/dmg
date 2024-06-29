import React,{useState} from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo-footer.png";
import shopOnlineImg from "../../assets/images/shop-now/Shop-online-1.png";
import shopOnlineBg from "../../assets/images/shop-now/shopBg.png";
import shopOnlineCross from "../../assets/images/shop-now/shopBgcross.png";
const Footer = () => {
    const [isShopNow, setShopNow] = useState(true);
    const location = useLocation();

    return (
        <>
            <section className="footer">
                <div className="container-fluid px-md-5">
                    <div className="row px-md-5">
                        <div className="col-lg-3 mb-3 pb-0 pb-lg-1 mb-lg-0">
                            <NavLink to="/">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="footerLogo"
                                    />
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-9 borderTop pt-3">
                            <div className="row">
                                <div className="col-lg-2 ">
                                    <ul className="footerUl">
                                        
                                
                                <li>
                                <NavLink to="/">Home
                                </NavLink>
                                </li>

                                        <li>
                                            <NavLink to="/partners">
                                                Partner with us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/story">
                                                About Us
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/our-services">
                                                Our Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/careers">
                                                Careers
                                            </NavLink>
                                        </li>
                                        
                                        <li>
                                            <NavLink to="/blog">Press</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/contact">
                                                Contact Us
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/privacy">
                                                Privacy Policy
                                            </NavLink>
                                        </li>

                                        

                                        
                                    </ul>
                                </div>

                                <div className="col-lg-6 mt-3 mt-lg-0">
                                    <div className="location d-flex">
                                        <div className="box">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>

                                        <div className="text colorGrey">
                                            <address classname="addressTB">
                                                <p>
                                                    METRO MANILA BRANCH OFFICE{" "}
                                                    <br />
                                                    Ignacio Complex<br />
                                                    48 Amang Rodriguez,
                                                    Manggahan
                                                    <br />
                                                    Pasig City, Philippines,
                                                    1611
                                                </p>
                                            </address>
                                        </div>
                                    </div>

                                    <div className="location d-flex">
                                        <div className="box">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>

                                        <div className="text colorGrey">
                                            <address classname="addressTB">
                                                <p>
                                                    {" "}
                                                    CEBU MAIN OFFICE <br />
                                                    357 San Miguel Street
                                                    <br />
                                                    Brgy. Linao Talisay
                                                    <br />
                                                    Cebu, Philippines, 6045
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-3 mt-lg-0">
                                    <div className="locationSocial">
                                        <div className="box">
                                            <a
                                                href="https://www.facebook.com/"
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a
                                                href="https://www.instagram.com/"
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a
                                                href="https://www.linkedin.com/company/ecossential-foods-corporation"
                                                target="_blank"
                                            >
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="locationSocial d-flex mt-3 mt-lg-5">
                                        <div>
                                            <div className="box">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                        </div>

                                        <div className="text colorGrey">
                                            <a
                                                href="tel:234567"
                                                className="phone"
                                            >
                                                (632) 8646-4407 Loc 100
                                            </a>
                                            <a
                                                href="tel:234567"
                                                className="phone"
                                            >
                                                (632) 8682-7850 Loc 100
                                            </a>
                                        </div>
                                    </div>

                                    <div className="locationSocial d-flex align-items-center mt-3 mt-lg-4">
                                        <div>
                                            <div className="box boxOne">
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                        </div>

                                        <div className="text colorGrey">
                                            <a
                                                href="mailto:efccustomercare@efc.com.ph"
                                                className="phone"
                                            >
                                                efccustomercare@efc.com.ph
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footerLower">
                <div class="container">
                    © Copyright 2024 efc.com.ph All rights reserved.
                </div>
            </section>
            {
                location.pathname !== '/shop-online' &&
                isShopNow &&   <div className="fixed-shop-btn show">
                <div className="shop_box">
                  <a href="/shop-online">
                    <img src={shopOnlineBg} alt="shop-img" />
                  </a>
                  <button onClick={()=>setShopNow(false)}>
                    <img src={shopOnlineCross} alt="shop-img" />
                  </button>
                </div>
              </div>
            }
          
        </>
    );
};

export default Footer;
