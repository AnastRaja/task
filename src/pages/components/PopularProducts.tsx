import React from "react";
import {Heart, ShoppingBag} from "lucide-react";
import FilterDropdown from "./FilterDropdown";
const products = [
  {
    id: 1,
    title: "OG Belt - Hip Thrust Belt – For Dumbbells",
    price: "$200",
    rating: 4,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659897/product/image11_etirly.png",
  },
  {
    id: 2,
    title: "Music Boxing Machine Wall Mounted Smart Bluetooth",
    price: "$300",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659897/product/image10_jjtopk.png",
  },
  {
    id: 3,
    title: "LFJ LAT Pull Down and Lift Weight Pulley ",
    price: "$100",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659897/product/image9_acgury.png",
  },
  {
    id: 4,
    title: "Jump Rope, Tangle-Free Rapid Speed Jumping ",
    price: "$50",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659897/product/image8_nq6mta.png",
  },
  {
    id: 5,
    title: "Adjustable Weight Bench Load 600LBS",
    price: "$400",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659896/product/image6_bmmhoo.png",
  },
  {
    id: 6,
    title: "Ab Roller, Vinsguir Ab Roller Wheel for Core Workout ",
    price: "$200",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659896/product/iamge7_c870no.png",
  },
  {
    id: 7,
    title: "YOSUDA Magnetic/Water Rowing Machine ",
    price: "$250",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659896/product/image12_dodwsh.png",
  },
  {
    id: 8,
    title: "Adjustable Dumbbell Set (40 Lbs)",
    price: "$150",
    rating: 5,
    img:
      "https://res.cloudinary.com/dp4ixfvbt/image/upload/v1737659896/product/iamge5_lshvjj.png",
  },
];

const PopularProducts = () => {
  const renderStars = (rating) => {
    return Array(rating)
      .fill(null)
      .map((_, index) => (
        <span key={index} className="text-warning">
          ★
        </span>
      ));
  };
  const handleFilterChange = (filter) => {
    console.log("Selected Filter:", filter);
    // Add your filter logic here
  };
  return (
    <div className="container py-2">
      <div className="filler_flecx">
        <h2 className="text-center mb-2">Popular Products</h2>
        <FilterDropdown onFilterChange={handleFilterChange} />
      </div>

      {/* Product Cards */}
      <div className="row mt-5">
        {products.map((product) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3 bottom_margin"
            key={product.id}
          >
            <div className="card border-0 shadow-sm">
              <div
                className="card-img-top bg-light"
                style={{
                  height: "300px",
                  padding: "0px",
                  overflow: "hidden    ",
                }}
              >
                <div className="imag_section">
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
                    <button className="btn btn-warning">
                      <ShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
