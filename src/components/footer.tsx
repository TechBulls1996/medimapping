import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer
        className=" small text-center text-black-50 p-3"
        style={{ borderTop: "1px solid beige" }}
      >
        <div className="container">
          Copyright © Medimapping {new Date().getFullYear()} <br />
          <NavLink
            to={"terms_conditions"}
            className=" text-primary font-weight-bold  align-items-center me-2 "
          >
            Terms & Conditions
          </NavLink>
          |{" "}
          <NavLink
            to={"privacy_policy"}
            className=" text-primary font-weight-bold align-items-center me-2 "
          >
            Privacy Policy
          </NavLink>
        </div>
      </footer>
    </>
  );
};
export default Footer;
