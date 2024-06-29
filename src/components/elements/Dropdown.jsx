import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import styled from "styled-components";
const Dropdown = () => {
    const [isHovering, setIsHovering] = useState(false);

    const Ul = styled.ul`
        padding: 0.2rem !important;
        top: 4rem;
        border: 0;
        border-radius: 0 !important;
        background-color: #fff !important;
        border-bottom: 2px solid #ea0831;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `;

    const removeClass = () => {
        $("#navbarSupportedContent").removeClass("show");
    };

    return (
        <>
            <li className="nav-item dropdown d-none d-lg-block">
                <NavLink
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    About us
                </NavLink>

                <Ul
                    className={`dropdown-menu ${isHovering ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <li>
                        <NavLink className="dropdown-item" to="/story">
                            Our Story
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/partners-brand">
                            Our Partners
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/culture">
                            People & Culture
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/values">
                            Our Core Values
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/csr">
                            CSR
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item" to="/awards">
                            Awards
                        </NavLink>
                    </li>
                    <li>
                        <a className="dropdown-item" href="https://efc.com.ph/blog/">
                            Press
                        </a>
                    </li>
                </Ul>
            </li>

            <li className="nav-item d-lg-none navUl">
            <li>
                        <NavLink
                            className="navbarSupportedContent nav-link"
                            to="#"
                            onClick={removeClass}
                        >
                        About us
                        </NavLink>
                    </li>

                <ul className="list-unstyled ps-4">


                    
                    <li>
                    <NavLink
                            className="dropdown-item colorRed"
                            to="/story"
                            onClick={removeClass}
                        >
                            Our Story
                        </NavLink>
                    </li>    
                    
                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/partners-brand"
                            onClick={removeClass}
                        >
                            Our Partners
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/culture"
                            onClick={removeClass}
                        >
                            People & Culture
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/values"
                            onClick={removeClass}
                        >
                            Core Values
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/csr"
                            onClick={removeClass}
                        >
                            CSR
                        </NavLink>
                    </li>



                    {/* <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/brands"
                            onClick={removeClass}
                        >
                            Brands
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/awards"
                            onClick={removeClass}
                        >
                            Awards
                        </NavLink>
                    </li>


                    <li>
                        <NavLink
                            className="dropdown-item colorRed"
                            to="/blog"
                            onClick={removeClass}
                        >
                            News
                        </NavLink>
                    </li>

                    
                </ul>
            </li>
        </>
    );
};

export default Dropdown;
