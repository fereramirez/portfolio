import { NavLink } from "react-router-dom";

const NavbarLink = ({ section, label, ...props }) => {
  //! VOLVER A VER agregar scss
  return (
    <NavLink to={section}>
      <div className="button" {...props}>
        {label}
      </div>
    </NavLink>
  );
};

export default NavbarLink;
