import React from "react";
import ReactStars from "react-rating-stars-component";
import { data } from "../data/ProductsInfo";
const Products = () => {
  return (
    <div className="products">
      <div className="container-fluid products__main">
        <div className="contianer">
          <h2 className="h2__main">
            Best Selling <span>Food & Medicine</span>
          </h2>
          <p className="text-center p__main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            accusamus.
          </p>
          <div className="row gy-4 pt-5 pt-md-5 d-flex justify-content-center">
            {data.map((item) => (
              <div className="col-md-4" key={item.index}>
                <div className="products__col">
                  <img src={item.img} alt="products" className="img-fluid" />
                  <div className="products__mid py-4 px-1">
                    <h4> {item.name}</h4>
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
                  <button className="btn1 "> view cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
