import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Partners from "./components/pages/partner/Partners";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import Story from "./components/pages/Story";
import Culture from "./components/pages/culture/Culture";
import Service from "./components/pages/services/Service";
import Awards from "./components/pages/Awards";
import Brands from "./components/pages/Brands";
import Values from "./components/pages/culture/Values";
import Landing from "./components/pages/Landing";
import News from "./components/elements/News";
import PartnerBrands from "./components/pages/partner/PartnerBrands";
import Careers from "./components/pages/Careers";
import Contact from "./components/pages/Contact";
import CSR from "./components/pages/CSR";
import "yet-another-react-lightbox/styles.css";
import Privacy from "./components/pages/Privacy";
import ShopOnline from "./components/pages/ShopOnline";
import Cookie from "./components/pages/Cookie.jsx";
const App = () => {
  let location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    < >
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/story" element={<Story />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/our-services" element={<Service />} />
        <Route path="/awards" element={<Awards />} />
        {/* <Route path="/brands" element={<Brands />} /> */}
        <Route path="/values" element={<Values />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/partners-brand" element={<PartnerBrands />} />
        <Route path="/shop-online" element={<ShopOnline />} />
        <Route path="/cookie" element={<Cookie />} />
        
      </Routes>


      {location.pathname !== '/contact' && <News /> }
 
      <Footer />
    </>
  );
};

export default App;
