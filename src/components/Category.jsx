import React from "react";
import { data } from "../data/MedicalCare";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeInfo2 } from "../Redux/Action";
import { useTranslation } from "react-i18next";
const Category = () => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(storeInfo2(item));
  };
  const { t } = useTranslation();
  return (
    <div className="category" id="MedicalCare">
      <div className="container category__main">
        <h2 className="h2__main text-center">
          {t("Top")} <span>{t("Categories")}</span>
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          accusamus.
        </p>
        <Link to="/medicalcare">
          <div className="row align-items-center">
            {data.map((item) => (
              <div className="col-md-3" onClick={() => handleClick(item)}>
                <div className="category__col text-center">
                  <img
                    src={item.img}
                    alt="image category"
                    className="img-fluid"
                  />
                  <h3>{t(item.name)}</h3>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
