import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="contact py-5 " id="Contact">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-4 order-1 order-md-0">
            <div className="contact_col1"></div>
          </div>
          <div className="col-md-8 order-0 order-md-1 pb-5 pb-md-0">
            <h2 className="h2_main text-center">
              <span>{t("Contact")}</span> {t("Us Form")}
            </h2>
            <p className="text-center p_main">
              {t(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ducimus."
              )}
            </p>
            <div className="contact_col2 pt-md- pt-3">
              <form action="">
                <div className="Contact_col d-md-flex d-block">
                  <input
                    className="form-control form-control-lg me-md-2 my-md-0 my-3"
                    type="text"
                    placeholder={t("Name")}
                  />
                  <input
                    className="form-control form-control-lg ms-md-2 my-md-0 my-3"
                    type="number"
                    placeholder={t("Number")}
                  />
                </div>
                <input
                  className="form-control form-control-lg my-3"
                  type="email"
                  placeholder={t("Email")}
                />
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option>{t("Open this select menu")}</option>
                  <option value="1">{t("One")}</option>
                  <option value="2">{t("Two")}</option>
                  <option value="3">{t("Three")}</option>
                </select>
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  rows="6"
                  placeholder={t("Subject")}
                ></textarea>
                <button className="btn1 mt-3 w-100" type="submit">
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

export default ContactUs;
