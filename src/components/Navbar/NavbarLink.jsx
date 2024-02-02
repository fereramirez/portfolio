import { NavLink } from "react-router-dom";

const NavbarLink = ({ section, label, ...props }) => {
  return (
    <NavLink to={section}>
      <div className="button" {...props}>
        {label}
      </div>
    </NavLink>
  );
};

export default NavbarLink;
