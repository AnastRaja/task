import {useState, useEffect} from "react";
import Header from "./Header/Header";
import HeaderMobile from "./Header/HeaderMobile";
import FeatureGrid from "./components/FeatureGrid";
import FeaturedCategories from "./components/FeaturedCategories";
import PopularProducts from "./components/PopularProducts";

import {Footer} from "./Footer/Footer";

import banner_hero from "../assets/Taskasset/banner_imag.png";

import Button from "@mui/material/Button";

function Login() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect window size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust width breakpoint as needed
  };

  // Use effect to listen for window resize
  useEffect(() => {
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  return (
    <div className="landing-main">
      <div>{isMobile ? <HeaderMobile /> : <Header />}</div>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="hero_content">
                <h1>
                  New Year, <span>New You!</span>
                </h1>
                <p>Up to 50% off on top workout gear and fitness essentials.</p>
                <Button className="button_primary">Shop Now</Button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={banner_hero} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="option_cart">
        <FeatureGrid />
      </section>
      <section className="tabs_secion">
        <FeaturedCategories />
      </section>
      <section className="deals_section py-5 pt-2">
        <h3 className="deals_heading">Today Deals</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="deals-grid">
                <div className="deal-card">
                  <div className="paddingf_deals">
                    <h3>Limited Time Offer - Adjustable Dumbbell Set</h3>
                    <p className="price">
                      <span className="current-price">$74.99</span>
                      <span className="original-price">$99.99</span>
                    </p>
                    <p className="offer-ends">Offer Ends In 3 Days!</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737660572/product/deals_skkhpz.png"
                    alt=" "
                    className="img-fluid imag_1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="deals-grid">
                <div className="deal-card">
                  <h3>Bundle Deal - Resistance Bands + Kettlebell</h3>
                  <p className="price">
                    <span className="current-price"> $139.99</span>
                    <span className="original-price">$159.99</span>
                  </p>
                  <p className="offer-ends">Offer Ends In 3 Days!</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737660573/product/deals2_pxn6kn.png"
                  alt=" "
                  className="img-fluid imag_2"
                />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className="deals-grid">
                <div className="deal-card">
                  <h3>Flash Sale - Olympic Weightlifting Barbell</h3>
                  <p className="price">
                    <span className="current-price">$179.99</span>
                    <span className="original-price">$199.99</span>
                  </p>
                  <p className="offer-ends">Offer Ends In 3 Days!</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737660572/product/deals3_sxqmpe.png"
                  alt=" "
                  className="img-fluid imag_3"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="deals-grid">
                <div className="deal-card">
                  <div className="paddingf_deals">
                    <h3>
                      Boldfit Double Spring Tummy Trimmer Men and Women for Abs
                    </h3>
                    <p className="price">
                      <span className="current-price">$74.99</span>
                      <span className="original-price">$99.99</span>
                    </p>
                    <p className="offer-ends">Offer Ends In 3 Days!</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737660572/product/deals5_cukp9b.png"
                    alt=" "
                    className="img-fluid imag_4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="deals-grid">
                <div className="deal-card">
                  <div className="paddingf_deals">
                    <h3>Sportneer Pull up Bar for Home Pull up Bar Max Load</h3>
                    <p className="price">
                      <span className="current-price">$74.99</span>
                      <span className="original-price">$99.99</span>
                    </p>
                    <p className="offer-ends">Offer Ends In 3 Days!</p>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737660573/product/deals4_kuzu2r.png"
                    alt=" "
                    className="img-fluid imag_5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tabs_secion">
        <PopularProducts />
      </section>

      {/* <section className="slider-section">
        <Slider {...settings}>
          <div data-aos="fade-left" data-aos-duration="500">
            <img src={Asset1} alt="assets" className="dark-img" />
            <img src={Assetdark1} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset2} alt="assets" className="dark-img" />
            <img src={Assetdark2} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset3} alt="assets" className="dark-img" />
            <img src={Assetdark3} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset4} alt="assets" className="dark-img" />
            <img src={Assetdark4} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset5} alt="assets" className="dark-img" />
            <img src={Assetdark5} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset6} alt="assets" className="dark-img" />
            <img src={Assetdark6} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset7} alt="assets" className="dark-img" />
            <img src={Assetdark7} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset8} alt="assets" className="dark-img" />
            <img src={Assetdark8} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset9} alt="assets" className="dark-img" />
            <img src={Assetdark9} alt="assets" className="light-img" />
          </div>
        </Slider>
      </section> */}

      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default Login;
