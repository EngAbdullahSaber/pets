import React from "react";
import ReactStars from "react-rating-stars-component";
import { data2 } from "../data/ProductsInfo";
import { useTranslation } from "react-i18next";

const Hostel = () => {
  const { t } = useTranslation();

  return (
    <div className="products">
      <div className="container-fluid products__main hostels__main">
        <div className="contianer">
          <h2 className="h2__main">
            {t("Best Hostel for")} <span>{t("Pets")}</span>
          </h2>
          <p className="text-center p__main">
            {t(
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, accusamus."
            )}
          </p>
          <div className="row gy-4 pt-5 pt-md-5 d-flex justify-content-center">
            {data2.map((item) => (
              <div className="col-md-4" key={item.index}>
                <div className="products__col hostels__col">
                  <img src={item.img} alt="products" className="img-fluid" />
                  <div className="products__mid py-4 px-1">
                    <h4> {t(item.name)}</h4>
                    <h5 className="pt-2"> 60$</h5>
                    <div
                      classNames="react__star"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={item.rate}
                      />
                    </div>
                  </div>
                  <button className="btn1 "> {t("view cart")}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
