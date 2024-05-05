import React, { useEffect } from "react";
import logo from "../assets/assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changLanguage } from "../Redux/Action";
const Navbar = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);
  const changeLang = (lng) => {
    lng == "en" ? dispatch(changLanguage("en")) : dispatch(changLanguage("ar"));

    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nav__main ">
        <div className="container-fluid px-5 mx-3">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li
                className="nav-item aos-init aos-animate"
                data-aos="fade-left"
              >
                <a className="" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Shop">
                  Shop
                </a>
              </li>{" "}
              <li className="nav-item dropdown">
                <a className="" href="#MedicalCare">
                  Medical Care
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Testmonial">
                  Testmonial
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex nav__list align-items-center" role="search">
              <div class="dropdown">
                <img
                  src=" https://cdn-icons-png.flaticon.com/512/9411/9411876.png "
                  width="36"
                  height="36"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  alt=""
                  title=""
                  className="img-small"
                />
                <ul class="dropdown-menu">
                  <li onClick={() => changeLang("ar")}>
                    <a class="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                  <li onClick={() => changeLang("en")}>
                    <a class="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6372/6372641.png"
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small aos-init aos-animate"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <img
                src="   https://cdn-icons-png.flaticon.com/512/3523/3523887.png "
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small"
              />
              <img
                src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
                width="26"
                height="26"
                alt=""
                title=""
                className="img-small"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
