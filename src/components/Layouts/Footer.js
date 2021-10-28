import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FiInstagram,
  //   FiFacebook,
  //   FiTwitter,
  FiPhoneCall,
  FiMail,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
// import Logo from "../../images/HexTechSoft.png";
import "../../Styles/main.css";
import ScrollToTop from "../ScrollToTop";
// import ScrollToTop from "../ScrollToTop ";

function Footer() {
  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  return (
    <div className="app-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3 col-md-6 footer-info" data-aos="fade-in">
            <h3>
              <img
                // src={Logo}
                alt={"Logo"}
                style={{ height: "80px", width: "160px" }}
              />
            </h3>
            <p>Practice Hard,Get Results.</p>
          </div> */}

          <div className="col-lg-6 col-md-6 footer-links">
            <h4>Navigation</h4>
            <ul className="mt-3">
              <li data-aos="fade-in">
                <MdKeyboardArrowRight />
                <Link to={"/"} className="foot-link">
                  Home
                </Link>
              </li>
              <li data-aos="fade-in">
                <MdKeyboardArrowRight />
                <Link to={"/quizzes/subjects"}>Quizzes</Link>
              </li>

              {/* <li data-aos="fade-in">
                <MdKeyboardArrowRight />
                <Link to={"/contact"} className="foot-link">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="col-lg-6 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p className="mt-3">
              <ul>
                <li data-aos="fade-in">
                  <MdKeyboardArrowRight />
                  <a href="tel:+91 8999575998">
                    <strong>
                      <FiPhoneCall /> Phone:
                    </strong>{" "}
                    +91 7888008290
                  </a>
                </li>
                <li data-aos="fade-in">
                  <MdKeyboardArrowRight />
                  <a href="mailto:tejasborde99@gmail.com">
                    <strong>
                      <FiMail /> {/* Email: */}
                    </strong>{" "}
                    tejasborde99@gmail.com
                  </a>
                </li>
              </ul>
            </p>

            <div className="social-links mt-4">
              {/* <Link target="blank" href="#" className="link">
                <FiPhoneCall />
              </Link>
              <Link target="blank" href="#" className="link">
                <FiMail />
              </Link> */}
              <a
                target="blank"
                href={"https://www.instagram.com/tejas._borde/"}
                className="link"
                data-aos="fade-in"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/tejas-borde-17577a191/"
                className="link"
                data-aos="fade-in"
              >
                <FaLinkedinIn />
              </a>
              {/* <Link target="blank" href="#" className="link" data-aos="fade-in">
                <FiFacebook />
              </Link>
              <Link target="blank" href="#" className="link" data-aos="fade-in">
                <FiTwitter />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="copy-container">
        <div className="copyright container">
          &copy; Copyright 2021 | <strong>Made By Tejas Borde</strong>. All
          Rights Reserved
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Footer;
