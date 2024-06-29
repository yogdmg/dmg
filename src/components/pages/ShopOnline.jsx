import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../elements/Banner';

//Images

import bannerImg from "../../assets/images/shop-now/e-commerce-web-page_banner.jpg";
import mayoraImg from "../../assets/images/shop-now/mayora_image-left.png";
import mayoraLogo from "../../assets/images/shop-now/Mayora_logo.png";
import kalbelLogo from "../../assets/images/shop-now/KalbeLogo.png";
import addtocart from "../../assets/images/shop-now/add-to-cart-button-wide.png";
import kalbelImg from "../../assets/images/shop-now/Kalbe_image_rightside.png";
import addtocartText from "../../assets/images/shop-now/add-to-cart.png";
import addtocartbtn1 from "../../assets/images/shop-now/add-to-cart-2.png";
import addtocartbtn2 from "../../assets/images/shop-now/add-to-cart-3.png";









const ShopOnline = () => {
  return (
    <>
       <Helmet>

<title data-react-helmet="true">
Order Online - Ecossential Foods Corporation
</title>
<link rel="canonical" href="https://efc.com.ph" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="https://efc.com.ph/xmlrpc.php" />
<meta data-react-helmet="true" name="title" content="Group of Companies" />
<meta name="keywords" content="Ecossential Foods Corporation, distribution business, product distribution, distributors company, retail philippines, retail business in the philippines" />
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta
    data-react-helmet="true"
    name="description"
    content="World-class distributor and marketer of diverse consumer goods"
/>
<link rel="cannonical" href="/privacy" />

</Helmet>
<>
  <div className="page-wrapper">
  <Banner image={bannerImg} title="/OUR SHOPS" />
    <div className="shop-now">
      <div className="shop-now-title">
        <h1>Shop Now</h1>
      </div>
      <div className="shop-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mmb-30">
              <div className="img-box-1">
              <a href="https://www.lazada.com.ph/shop/kopiko-ph?path=index.htm&lang=en&pageTypeId=1" target="_blank">
                <img src={mayoraImg} alt="img" /></a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="img-box-logo">
                <img src={mayoraLogo} alt="img" />
              </div>
              <div className="add-to-cart-btn">
  
  <img src={addtocartText} alt="img" />
  <a href="https://www.lazada.com.ph/shop/kopiko-ph?path=index.htm&lang=en&pageTypeId=1" target="_blank" rel="noopener noreferrer">
    <img src={addtocartbtn1} alt="img" /></a>
  <a href="https://shopee.ph/kopikoofficial" target="_blank" rel="noopener noreferrer"><img src={addtocartbtn2} alt="img" /></a>
  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mmb-30">
              <div className="img-box-logo">
                <img src={kalbelLogo} alt="img" />
              </div>
              

  <div className="add-to-cart-btn">
  <img src={addtocartText} alt="img" />
  <a href="https://www.lazada.com.ph/shop/ecossential-foods?spm=a2o4l.searchlist.card.2.9e3b55a2ExVm1u&from=onesearch_brand_115482" target="_blank" rel="noopener noreferrer">
    <img src={addtocartbtn1} alt="img" /></a>
  <a href="https://shopee.ph/ecossentialfoods" target="_blank" rel="noopener noreferrer"><img src={addtocartbtn2} alt="img" /></a>
</div>


            </div>
            <div className="col-md-6 text-center">
              <div className="img-box-1">
                <a href="https://www.lazada.com.ph/shop/ecossential-foods?spm=a2o4l.searchlist.card.2.9e3b55a2ExVm1u&from=onesearch_brand_115482" target="_blank" rel="noopener noreferrer">
              <img src={kalbelImg} alt="img" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>

    
 
    </>
  )
}

export default ShopOnline