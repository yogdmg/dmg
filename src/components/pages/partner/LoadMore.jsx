import React, { useState } from "react";
import { loadMore } from "./data";

const LoadMore = () => {
  const [showTwo, setShowTwo] = useState(null);
  return (
    <>
      {loadMore.map((data, index) => {
        return (
          <>
            <div className="column" key={data.key}>
              <div className="brandUlImg">
                <img
                  src={data.image}
                  className="img-fluid"
                  alt=""
                  onClick={() => {
                    if (showTwo === null) {
                      setShowTwo(index);
                    } else {
                      setShowTwo(null);
                    }
                  }}
                />
              </div>
            </div>

            {showTwo === index ? (
              <div className="modle" onClick={() => setShowTwo(null)} key={index}>
                <div className="modelContent">
                  <div className="relative">
                    <i
                      className="fa-solid fa-xmark cross"
                      onClick={() => setShowTwo(null)}
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

export default LoadMore;
