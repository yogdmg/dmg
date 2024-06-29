import React, { useState } from "react";
import layerOne from "./data";

const LayerOne = () => {
  const [show, setShow] = useState(null);
  return (
    <>
      {layerOne.map((data, index) => {
        return (
          <>
            <div className="column" key={data.key}>
              <div className="brandUlImg">
                <img
                  src={data.image}
                  className="img-fluid"
                  alt=""
                  onClick={() => {
                    if (show === null) {
                      setShow(index);
                    } else {
                      setShow(null);
                    }
                  }}
                />
              </div>
            </div>

            {show === index ? (
              <div className="modle" onClick={() => setShow(null)} key={index}>
                <div className="modelContent">
                  <div className="relative">
                    <i
                      className="fa-solid fa-xmark cross"
                      onClick={() => setShow(null)}
                    ></i>
                  </div>

                  <div className="modelImg d-flex justify-content-center">
                    <img
                      src={data.largeImg}
                      className=" img-fluid"
                      alt="img_not_found"
                    />
                  </div>

                  <div className="modelText">
                    <h6 className="colorRed m-0 mt-3">{data.title}</h6>

                    <p className="small">
                      <b>
                        <span className="small">{data.semiTitleOne}</span>
                      </b>
                    </p>

                    <p className="small">{data.contentOne}</p>

                    <p className="small">
                      <b>
                        <span className="small">{data.semititleTwo}</span>
                      </b>
                    </p>

                    <p className="small">{data.contentTwo}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default LayerOne;
