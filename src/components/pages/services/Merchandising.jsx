import React, {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import galleryMain from "../../../assets/images/Services/instore/mainImg.jpg";

const Merchandising = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="row py-3">
        <div className="col-md-4 mt-4 col-lg-3 d-flex flex-column align-items-start align-items-md-end">
          <div className="sideHeadings">
            <h5 className="headingTwo text-start text-md-end m-0">
              MERCHANDISING
            </h5>
            <h5 className="headingTwo text-start text-md-end m-0">
              EXPERTISE.
            </h5>
            <h5 className="headingTwo colorDark  text-start text-md-end m-0">
              MAKING THE MOST
            </h5>
            <h5 className="headingTwo colorDark text-start text-md-end m-0">
              OF THE REAL STATE
            </h5>
            <h5 className="headingTwo colorDark text-start text-md-end m-0">
              ON RETAIL SHELVES.
            </h5>
          </div>
        </div>

        <div className="col-md-8 col-lg-9 mt-4">
          <div>
            <p className="justify">
              Through the years, EFC has consistently delivered excellent
              in-store execution. Partnering with only the best merchandising
              agencies in the country, we develop winning visibility and field
              marketing campaigns that turn shoppers into loyal buyers.
              Highly-skilled field operations team, effective tools and
              efficient processes result to on-time, complete and accurate
              retail data allowing our sales and marketing teams to turn these
              insights into growth strategies.
            </p>
          </div>
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
                  src: `${require("../../../assets/images/Services/instore/1.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/2.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/3.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/4.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/5.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/6.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/7.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/8.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/9.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/10.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/instore/11.jpg")}`,
                },
              ]}
            />
          </div>
        </div>

        {/* <div className="col-md-3 mt-2 mt-md-5">
          <img src={imageOne} alt="not-Found" className="img-fluid" />
        </div>
        <div className="col-md-3 mt-2 mt-md-5">
          <img src={imageTwo} alt="not-Found" className="img-fluid" />
        </div>
        <div className="col-md-3 mt-2 mt-md-5">
          <img src={imageThree} alt="not-Found" className="img-fluid" />
        </div>
        <div className="col-md-3 mt-2 mt-md-5">
          <img src={imageFour} alt="not-Found" className="img-fluid" />
        </div> */}
      </div>
    </>
  );
};

export default Merchandising;
