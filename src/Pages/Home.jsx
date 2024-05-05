import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Products from "../components/Products";
import DofMid from "../components/DofMid";
import Models from "../components/Models";
import ProfileModels from "../components/ProfileModels";
import Hostel from "../components/Hostel";
const Home = () => {
  let [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Models />
      <Hero />
      <ProfileModels />
      <Category />
      <DofMid />
      <Products />
      <Hostel />
      {visible ? (
        <button onClick={goToTop} className="scrollToTop ">
          <i className="fa-solid fa-angle-up"></i>
        </button>
      ) : null}
    </>
  );
};

export default Home;
