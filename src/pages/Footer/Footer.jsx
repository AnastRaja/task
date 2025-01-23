import headerImage from "../../assets/Taskasset/light_logo.png";
import appdown from "../../assets/Taskasset/app-down.png";
import gpy from "../../assets/Taskasset/gpy.png";
import {Link} from "react-router-dom";
import {IconBrandTwitterFilled} from "@tabler/icons-react";
import {IconBrandLinkedinFilled} from "@tabler/icons-react";
import {IconBrandTelegram} from "@tabler/icons-react";
import {IconBrandYoutubeFilled} from "@tabler/icons-react";
import {IconBrandGmail} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="col-lg-12">
            <div className="footer-content">
              <img src={headerImage} alt="Header" style={{width: "180px"}} />
              <p>
                Stay updated on deals, new arrivals, and promotions. Sign up for
                our newsletter and unlock exclusive rewards!
              </p>
            </div>
            <div className="media-links">
              <ul>
                <li>
                  {" "}
                  <Link to="" className="step-text">
                    <IconBrandTwitterFilled />
                  </Link>
                </li>
                <li>
                  <Link to="" className="step-text">
                    <IconBrandLinkedinFilled />
                  </Link>
                </li>
                <li>
                  <Link to="" className="step-text">
                    <IconBrandTelegram stroke={2} />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="" className="step-text">
                    <IconBrandYoutubeFilled />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="" className="step-text">
                    <IconBrandGmail stroke={2} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-step">
                <h4>Support</h4>
                <ul>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="step-text">
                      exclusive@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="step-text">
                      +88015-88888-9999
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-step">
                <h4>Account</h4>
                <ul>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      My Account
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Login / Register
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Cart
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-step">
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-step">
                <h4> Download App</h4>
                <ul>
                  <li>
                    {" "}
                    <Link to="" className="step-text">
                      Save $3 with App New User Only
                    </Link>
                  </li>
                </ul>
                <img src={appdown} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_footer">
        <div className="terms">
          <p>
            {" "}
            All rights reserved. Copyright 2024 © Fitcart, All Right Reserved{" "}
          </p>
        </div>

        <img src={gpy} alt="img" className="img-fluid" />
      </div>
    </div>
  );
};
