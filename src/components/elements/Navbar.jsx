import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import Dropdown from "./Dropdown";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 190);
            if (window.innerWidth < 992) {
                setScroll(true);
            }
        });
    }, []);

    const Nav = styled.nav`
        background-color: #fff;
        transition: 2s;

        padding: 0rem 1rem;
        border-bottom: 12px solid rgb(226, 1, 41);
        #navbarSupportedContent {
            ul {
                li {
                    @media all and (max-width: 992px) {
                        border-bottom: 1px solid #dadada;
                        &:last-child {
                            border: 0;
                        }
                    }
                    .nav-link {
                        text-decoration: none;
                        width: 100%;
                        height: 100%;
                        position: relative;
                        color: rgb(226, 1, 41);
                        font-size: 15px;
                        font-weight: 400;
                        text-transform: uppercase;
                        cursor: pointer;
                        padding: 1.98rem 1rem !important;
                        @media all and (max-width: 1192px) {
                            font-size: 0.78rem;
                            padding: 1.2rem 0.34rem !important;
                        }
                        @media all and (max-width: 992px) {
                            padding: 0.5rem 1rem !important;
                        }

                        &:hover {
                            color: #106DFD;
                        }
                    }
                    .Active {
                        color: #000;
                    }
                }
            }
        }
    `;

    const Toggeler = styled.button`
        color: #ea0831;
        outline: none !important;
        margin: 0.6rem 0;
        box-shadow: none;
        margin-left: 0.3rem !important;
        box-shadow: none !important;

        i {
            backgroud: transparent !important;
            font-size: 22px;
        }
    `;

    const removeClass = () => {
        $("#navbarSupportedContent").removeClass("show");
    };

    return (
        <div className="container-fluid p-0">
            <Nav
                className={`navbar navbar-expand-lg p-0 fixed-top ${
                    scroll ? "fixedTop " : " "
                } `}
                style={{ width: "100vw", transition: "none" }}
            >
                <div className="container-fluid px-md-5 py-2-8">
                    <NavLink className="navbar-brand brand" to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </NavLink>
                    <Toggeler
                        className="navbar-toggler p-0 m-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-solid fa-bars toggleIcon me-1"></i>
                    </Toggeler>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    onClick={removeClass}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/Partners"
                                    onClick={removeClass}
                                >
                                    Partner with us
                                </NavLink>
                            </li>
                            
                            <Dropdown />
                            

                            <li className="nav-item">
                            
                                <NavLink
                                    className="nav-link"
                                    to="/our-services"
                                    onClick={removeClass}
                                >
                                    Our Services
                                </NavLink>
                            </li>

                            
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/shop-online"
                                    onClick={removeClass}
                                >
                                    Order Online
                                </NavLink>
                            </li>
                            
                            
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/careers"
                                    onClick={removeClass}
                                >
                                    Careers
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contact"
                                    onClick={removeClass}
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li className="nav-item d-none d-lg-flex">
                                <div className="navIcon">
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-lg-flex">
                                <div className="navIcon">
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-lg-flex">
                                <div className="navIcon">
                                    <a
                                        href="https://www.linkedin.com/company/ecossential-foods-corporation"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </div>
    );
};

export default Navbar;
