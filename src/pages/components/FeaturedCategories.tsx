import React, {useState} from "react";
import {Heart, ShoppingBag, User} from "lucide-react";

const products = [
  {
    id: 1,
    title: "CAP Barbell Olympic Trap Bar, Hex Bar, Shrug Bar",
    price: "$100",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659342/product/image1_l0qm1x.png",
  },
  {
    id: 2,
    title: "Battle Ropes for Exercise Workout",
    price: "$300",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659343/product/iamge2_vcobth.png",
  },
  {
    id: 3,
    title: "Mini Stair Stepper for Exercise with Resistance Bands",
    price: "$200",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659342/product/iamge4_qznaqx.png",
  },
  {
    id: 4,
    title: "T Bar Row Platform, Landmine Attachment for Barbell fits 1",
    price: "$200",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659342/product/image3_xj4j2c.png",
  },
];

const FeaturedCategories = () => {
  const [activeTab, setActiveTab] = useState("Strength Training");

  const tabs = [
    "Strength Training",
    "Yoga Essentials",
    "Cardio Equipment",
    "Activewear",
    "Supplements",
    "Explore More",
  ];

  const renderStars = (rating) => {
    return Array(rating)
      .fill(null)
      .map((_, index) => (
        <span key={index} className="text-warning">
          ★
        </span>
      ));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Featured Categories</h2>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 ">
        <div className="nav nav-pills">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`nav-link ${
                activeTab === tab ? "active btn-warning text-dark" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="row mt-5">
        {products.map((product) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-3 bottom_margin"
            key={product.id}
          >
            <div className="card border-0 shadow-sm">
              <div
                className="card-img-top bg-light"
                style={{height: "300px", padding: "0px", overflow: "hidden"}}
              >
                <div className="imag_secrion">
                  {" "}
                  <img src={product.img} alt="img" className="img-fluid" />
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <div className="d-flex align-items-center mb-2">
                  {renderStars(product.rating)}
                </div>
                <div className="card_footer_section">
                  <p className="card-text mb-2 text-muted card_section_price">
                    Price: <strong>{product.price}</strong>
                  </p>
                  <div className="d-flex card_icons">
                    <button className="btn btn-outline-secondary">
                      <Heart />
                    </button>
                    <button className="btn btn-warning ">
                      <ShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-5 view_button">
        <button className="btn btn-outline-dark">View All</button>
      </div>
    </div>
  );
};

export default FeaturedCategories;
