import {useState, useEffect} from "react";
import Header from "./Header/Header";
import HeaderMobile from "./Header/HeaderMobile";
import {SlidersHorizontal, ChevronRight} from "lucide-react";
import PopularProducts from "./components/PopularProducts";

import {Footer} from "./Footer/Footer";

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
      <section className="List_Secion">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="Navication">
                <ul>
                  <li>
                    Home{" "}
                    <span>
                      <ChevronRight size={15} />
                    </span>
                  </li>
                  <li>Strength Training</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="Filter">
                <div className="Filter-Head">
                  <h4>Filters</h4> <SlidersHorizontal size="22" color="#999" />
                </div>

                <div className="Filter-Body">
                  <ul>
                    <li>
                      Strength Training <ChevronRight size={15} />
                    </li>
                    <li>
                      Yoga Essentials <ChevronRight size={15} />
                    </li>

                    <li>
                      Cardio Equipment <ChevronRight size={15} />
                    </li>

                    <li>
                      Activewear <ChevronRight size={15} />
                    </li>
                    <li>
                      Supplements <ChevronRight size={15} />
                    </li>
                  </ul>
                </div>
                <div className="Filter-Head">
                  <h4>Price</h4>
                </div>
                <Button className="button_Filter">Strength Training</Button>
              </div>
            </div>
            <div className="col-lg-9">
              <PopularProducts />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default Login;
