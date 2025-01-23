import React from "react";

const deals = [
  {
    id: 1,
    title: "Limited Time Offer - Adjustable Dumbbell Set",
    price: "$74.99",
    originalPrice: "$99.99",
    offerEnds: "Offer Ends In 3 Days!",
    large: true, // This card will span more columns
  },
  {
    id: 2,
    title: "Bundle Deal - Resistance Bands + Kettlebell",
    price: "$139.99",
    originalPrice: "$159.99",
    offerEnds: "Offer Ends In 3 Days!",
    large: false,
  },
  {
    id: 3,
    title: "Flash Sale - Olympic Weightlifting Barbell",
    price: "$179.99",
    originalPrice: "$199.99",
    offerEnds: "Offer Ends In 3 Days!",
    large: false,
  },
  {
    id: 4,
    title: "Limited Time Offer - Adjustable Dumbbell Set",
    price: "$74.99",
    originalPrice: "$99.99",
    offerEnds: "Offer Ends In 3 Days!",
    large: true,
  },
];

const DealsGrid = () => {
  return (
    <div className="deals-grid">
      {deals.map((deal) => (
        <div key={deal.id} className={`deal-card ${deal.large ? "large" : ""}`}>
          <h3>{deal.title}</h3>
          <p className="price">
            <span className="current-price">{deal.price}</span>
            <span className="original-price">{deal.originalPrice}</span>
          </p>
          <p className="offer-ends">{deal.offerEnds}</p>
        </div>
      ))}
    </div>
  );
};

export default DealsGrid;
