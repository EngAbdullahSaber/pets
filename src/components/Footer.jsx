import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <div className="container">
        <div className="row gx-0">
          <div className="col-md-3">
            <div className="footer_col1">
              <h3>{t("About Us")}</h3>
              <p className="py-2">
                {t(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam  dicta labore officia dignissimos voluptates."
                )}
              </p>
              <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col2 ps-md-3">
              <h3>{t("Information")}</h3>
              <ul>
                <li>
                  <a href="#">{t("Home")}</a>
                </li>
                <li>
                  <a href="#">{t("About Us")}</a>
                </li>
                <li>
                  <a href="#">{t("Testimonial")}</a>
                </li>
                <li>
                  <a href="#">{t("Blogs")}</a>
                </li>
                <li>
                  <a href="#">{t("Contact US")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col2">
              <h3>{t("Our Policy")}</h3>
              <ul>
                <li>
                  <a href="#">{t("Privacy Policy")}</a>
                </li>
                <li>
                  <a href="#">{t("Shipping Policy")}</a>
                </li>
                <li>
                  <a href="#">{t("Copyright Policy")}</a>
                </li>
                <li>
                  <a href="#">{t("FAQs")}</a>
                </li>
                <li>
                  <a href="#">{t("Home")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col3">
              <h3>{t("Contact US")}</h3>
              <p className="py-2">
                {t(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptate."
                )}
              </p>
              <form>
                <input
                  className="form-control form-control-lg my-2 rounded-0"
                  type="email"
                  placeholder={t("Email")}
                />
                <button className="btn1  w-100" type="submit">
                  {t("Submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
