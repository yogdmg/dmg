import React, { useState } from "react";
import saleOne from "../../../assets/images/supplyChain/service-supply-chain-demaind.jpg";
import saleTwo from "../../../assets/images/supplyChain/service-supply-chain-Importation.jpg";
import saleThree from "../../../assets/images/supplyChain/service-supply-chain-transport.jpg";
import saleFour from "../../../assets/images/supplyChain/service-supply-chain-warehousing.jpg";
import galleryMain from "../../../assets/images/Services/supplyChain/mainImg.jpg";
import Lightbox from "yet-another-react-lightbox";

const SupllyChain = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="row py-4">
                <div className="col-md-4 col-lg-3 d-flex flex-column align-items-start align-items-md-end">
                    <div className="sideHeadings">
                        <h3 className="headingTwo  text-start text-md-end m-0">
                            VAST
                        </h3>
                        <h3 className="headingTwo  text-start text-md-end m-0">
                            SUPPLY CHAIN
                        </h3>
                        <h3 className="headingTwo colorDark   text-start text-md-end m-0">
                            NETWORK
                        </h3>
                    </div>
                </div>

                <div className="col-md-8 col-lg-9 mt-4 mt-md-0">
                    <p>
                        We have distribution centers all across the Philippines.
                        These are strategically set up in key cities in Manila,
                        Luzon, Visayas, and Mindanao to ensure efficient flow of
                        goods.
                    </p>
                    <div className="row">
                        <div className="col-lg-6 mt-3 mt-md-0">
                            <img
                                src={saleOne}
                                alt="img_not_found"
                                className="img-fluid    "
                            />

                            <h5 className="colorRed mt-3">
                                Demand and Supply Planning
                            </h5>

                            <p className="justify">
                                The company follows a rigorous S&OP process with
                                data-driven and insights-driven demand
                                forecasting and dynamic supply planning,
                                allowing us to operate with higher transparency
                                and accuracy.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-3 mt-md-0">
                            <img
                                src={saleTwo}
                                alt="img_not_found"
                                className="img-fluid    "
                            />
                            <h5 className="colorRed mt-3">
                                Importation & Custom Clearance
                            </h5>

                            <p className="justify mt-3">
                                Our highly experienced team provide the best
                                solutions for clearing goods in the fastest and
                                most cost-effective way possible at all major
                                ports around the country.
                            </p>
                        </div>

                        <div className="col-lg-6 mt-3 mt-md-0">
                            <img
                                src={saleThree}
                                alt="img_not_found"
                                className="img-fluid maxHeight "
                            />

                            <h5 className="colorRed mt-3">
                                Transport and Logistics
                            </h5>

                            <p className="justify">
                                Our Transport and Logistics network support
                                hundreds of depot and delivery points backed by
                                massive fleet of trucks and sophisticated
                                process driven system. We guarantee you that
                                last mile fulfillment will arrive whenever and
                                wherever your products are needed around the
                                Philippines.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-3 mt-md-0">
                            <img
                                src={saleFour}
                                alt="img_not_found"
                                className="img-fluid w-100 maxHeight"
                            />
                            <h5 className="colorRed mt-3">
                                Warehousing & Inventory Management
                            </h5>

                            <p className="justify mt-3">
                                Our Integrated Distribution Centers are
                                strategically located from Luzon to Mindanao and
                                powered by a best-in-class storage and handling
                                systems that can support nationwide
                                requirements.
                            </p>
                        </div>
                    </div>

                    <div></div>
                </div>

                <div className="col-md-12 mt-3">
                    <div className="relative">
                        <img
                            src={galleryMain}
                            className="img-fluid pointer "
                            alt="img_not_found"
                            onClick={() => setOpen(true)}
                        />

                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/1.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/2.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/3.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/4.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/5.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/6.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/7.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/8.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/9.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/10.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/11.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/12.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/13.jpg")}`,
                                },
                                {
                                    src: `${require("../../../assets/images/Services/supplyChain/14.jpg")}`,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupllyChain;
