import { NavLink } from "react-router-dom";

import "./NavbarLink.scss";

const NavbarLink = ({ section, label, ...props }) => {
  return (
    <NavLink to={section}>
      <div className="navbar-link" {...props}>
        {label}
      </div>
    </NavLink>
  );
};

export default NavbarLink;
