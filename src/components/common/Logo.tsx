import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className="navbar-brand font-weight-bolder ms-lg-0 text-lg"
      >
        <span className="text-primary">Medi</span>Mapping
      </NavLink>
    </>
  );
};

export default Logo;
