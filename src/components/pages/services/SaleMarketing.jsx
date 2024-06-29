import React, { useState } from "react";
import imageOne from "../../../assets/images/sales/services-sales.jpg";
import imageTwo from "../../../assets/images/sales/service-lacement.jpg";
import imageThree from "../../../assets/images/sales/services-promotion.jpg";
import Lightbox from "yet-another-react-lightbox";
import galleryMain from "../../../assets/images/Services/sales/mainImg.jpg";
const SaleMarketing = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="saleCards">
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="saleImg">
              <img
                src={imageOne}
                className="img-fluid"
                alt="sale_image_not_found"
              />

              <h4 className=" mt-3 mb-2 text-uppercase bold7 colorRed text-center">
                sales
              </h4>
            </div>
            <p className="justify">
              No limits. Our teams know and do what needs to be done. They are
              disciplined, and committed to excellence; traits that consistently
              earn us the preferred supplier status.
            </p>
          </div>

          <div className="col-md-4 mt-3">
            <div className="saleImg">
              <img
                src={imageTwo}
                className="img-fluid"
                alt="sale_image_not_found"
              />

              <h4 className=" mt-3 mb-2 text-uppercase bold7 colorRed text-center">
                PLACEMENT
              </h4>
            </div>
            <p className="justify">
              Over the years, we have built connections and partnerships with
              all distribution channels making sure our brands have the best
              retail locations and extensive geographic reach.
            </p>
          </div>

          <div className="col-md-4 mt-3">
            <div className="saleImg">
              <img
                src={imageThree}
                className="img-fluid"
                alt="sale_image_not_found"
              />

              <h4 className=" mt-3 mb-2 text-uppercase bold7 colorRed text-center">
                PROMOTIONS
              </h4>
            </div>
            <p className="justify">
              Market leadership for all our brands is always our top of mind. We
              constantly ensure speed and efficiency in the execution of all
              trade and consumer promotions.
            </p>
          </div>
        </div>
      </section>

      <div className="row py-3">
        <div className="col-md-4 mt-4 col-lg-3 d-flex flex-column align-items-start align-items-md-end">
          <div className="sideHeadings">
            <h3 className="headingTwo text-start text-md-end m-0">
              OUR FRONT-END
            </h3>
            <h3 className="headingTwo text-start text-md-end m-0">LEADERS.</h3>
            <h3 className="headingTwo colorDark  text-start text-md-end m-0">
              AGILE.
            </h3>
            <h3 className="headingTwo colorDark text-start text-md-end m-0">
              FOCUSED.
            </h3>
            <h3 className="headingTwo colorDark text-start text-md-end m-0">
              GROUNDED.
            </h3>
          </div>
        </div>

        <div className="col-md-8 col-lg-9 mt-4">
          <div>
            <p className="justify">
              Creating a synergy of both the expertise of experience and the
              enthusiasm of the youth, our Sales and Marketing teams are a
              league of excellent leaders, top-rank account managers, and
              innovative thinkers, highly adaptable to the needs, requirements,
              and cultures of our clients and partners.
            </p>
            <p className="justify">
              They focus their energies on what is vital to delivering our goals
              and are attuned to the changes in the marketplace; always staying
              current and relevant.
            </p>
            <p className="justify">
              Grouped into Modern Trade to handle National Accounts and General
              Trade to handle downline route-to-market, our Sales Teams not
              only make sure our clients’ products reach their necessary
              destination on time, but they also foster powerful relationships
              with all our partners. They exude high discipline and practice
              high proficiency in distribution and activation.
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
                  src: `${require("../../../assets/images/Services/sales/1.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/2.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/3.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/4.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/5.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/6.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/7.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/8.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/9.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/10.jpg")}`,
                },
                {
                  src: `${require("../../../assets/images/Services/sales/11.jpg")}`,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleMarketing;
