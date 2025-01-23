import {Truck, ShieldCheck, CreditCard, Headphones} from "lucide-react";
import PropTypes from "prop-types";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On all orders over $115",
  },
  {
    icon: ShieldCheck,
    title: "Money Guarantee",
    subtitle: "15 Days money back",
  },
  {
    icon: CreditCard,
    title: "Payment Secured",
    subtitle: "Secure all your payments",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    subtitle: "Online Support 24/7",
  },
];

const FeatureItem = ({icon: Icon, title, subtitle}) => {
  return (
    <div className="d-flex align-items-center gap-3 alighn_center">
      <Icon size={40} color="#000" />
      <div>
        <h6 className="mb-1 fw-bold">{title}</h6>
        <p className="mb-0 text-muted">{subtitle}</p>
      </div>
    </div>
  );
};

// Correct placement of propTypes
FeatureItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const FeatureGrid = () => {
  return (
    <div className="container py-4">
      <div className="row ">
        {features.map((feature, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
            <FeatureItem
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
