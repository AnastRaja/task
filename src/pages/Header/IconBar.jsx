import {Heart, ShoppingBag, User} from "lucide-react";
import PropTypes from "prop-types";

const IconWithBadge = ({icon: Icon, badgeCount}) => {
  return (
    <div className="icon">
      <Icon size={24} color="white" />
      {badgeCount && <span className="badge">{badgeCount}</span>}
    </div>
  );
};

// PropTypes for IconWithBadge
IconWithBadge.propTypes = {
  icon: PropTypes.elementType.isRequired,
  badgeCount: PropTypes.number,
};

const IconBar = () => {
  return (
    <div className="icon-container">
      <IconWithBadge icon={Heart} badgeCount={2} />
      <IconWithBadge icon={ShoppingBag} badgeCount={2} />
      <IconWithBadge icon={User} />
    </div>
  );
};

export default IconBar;
