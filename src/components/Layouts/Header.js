import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
// import { FiMail } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

const Header = () => {
  const scrollToTop = () => {
    removeShow();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const removeShow = () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");
    document.getElementById("btn-toggle").classList.add("collapsed");
  };
  return (
    <div className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to={""}>
            <img
              //   src={Logo}
              alt={"Logo"}
              style={{ height: "55px", width: "110px" }}
            />
          </Link> */}
          <button
            className="navbar-toggler"
            id="btn-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link text-center"
                  activeClassName="active"
                  aria-current="page"
                  to={"/"}
                  onClick={scrollToTop}
                >
                  Home
                  <RiHome2Line style={{ marginLeft: 5, marginBottom: 4 }} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-center"
                  aria-current="page"
                  to={"/quizzes/subjects"}
                  onClick={scrollToTop}
                >
                  Quizzes{" "}
                  <BsQuestionCircle
                    style={{ marginLeft: 5, marginBottom: 4 }}
                  />
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink
                  className="nav-link text-center"
                  to={"/contact"}
                  //   onClick={scrollToTop}
                >
                  Contact Us
                  <FiMail style={{ marginLeft: 5, marginBottom: 4 }} />
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
