import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaCity,
  FaBuilding,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaVimeoV,
  FaPinterestP,
} from "react-icons/fa";
import Pay1 from "../assets/img/pay-01.webp";
import Pay2 from "../assets/img/pay-02.webp";
import Pay3 from "../assets/img/pay-03.webp";
import Pay4 from "../assets/img/pay-04.webp";

const Footer = () => {
  return (
    <footer>
      <div className="information-area off-white ptb100">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="single-information text-center">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p>+ (0192) 5184203</p>
                <p>+ (0185) 0950555</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-information text-center">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h4>E-Mail</h4>
                <p>
                  <a href="mailto:company@email.com">company@email.com</a>
                </p>
                <p>
                  <a href="mailto:we@company.info">we@company.info</a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-information text-center">
                <div className="info-icon">
                  <FaCity />
                </div>
                <h4>1st Venue</h4>
                <p>555 / 2A Sevent Streth</p>
                <p>Rampura, Bansree.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-information text-center">
                <div className="info-icon">
                  <FaBuilding />
                </div>
                <h4>1st Venue</h4>
                <p>689 / 2B Sevent Streth</p>
                <p>Rampura, Bansree.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGoogle />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaVimeoV />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPinterestP />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-area">
                <ul>
                  <li>
                    <a href="">
                      <img src={Pay1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Pay2} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Pay3} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={Pay4} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
