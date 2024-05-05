import React from "react";
import { useTranslation } from "react-i18next";

const DofMid = () => {
  const { t } = useTranslation();

  return (
    <div className="DogMid" id="Shop">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="dog_mid_col1">
              <h2>{t("Big Sales")}</h2>
              <h2>{t("Pets All Products")}</h2>
              <p>{t("Save Up To 30% All Products")}</p>
              <button className="btn2">{t("Shop Now")}</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dog_mid_col2">
              <h2>{t("Save Up To 25%")}</h2>
              <h2>{t("On Every Order")}</h2>
              <p>{t("Pets Food And Equipments")}</p>
              <button className="btn2">{t("Shop Now")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DofMid;
