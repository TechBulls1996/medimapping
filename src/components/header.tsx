import NavbarButton from "./common/navbar-toggle";
import Logo from "./common/logo";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import dummyImg from "../assets/images/dummy.png";

const Header = () => {
  const [popup, setPopup] = useState(false);
  const handleDropdown = (e: any) => {
    e.preventDefault();
    popup ? setPopup(false) : setPopup(true);
  };

  return (
    <>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-2">
              <div className="container-fluid px-1">
                <Logo />
                <NavbarButton />

                <div className="collapse navbar-collapse" id="navigation">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink
                        to={"/blogs"}
                        className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"/contact"}
                        className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                      >
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to={"/about"}
                        className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 "
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>

                  <ul className="navbar-nav d-lg-block d-none ">
                    <li className="nav-item ms-2">
                      <NavLink
                        to={"/login"}
                        className="btn btn-sm mb-0 bg-gradient-dark border-radius-sm"
                      >
                        Login <FontAwesomeIcon icon={faCoffee} />
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="navbar-nav d-lg-block d-none user-sec">
                    <li className="nav-item dropdown">
                      <NavLink
                        to="/login"
                        onClick={(e) => handleDropdown(e)}
                        className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2"
                      >
                        <span className="user-pic ">
                          <img alt="" id="user-pic" src={dummyImg} />
                        </span>
                        <span>
                          Surya Pratap <br />
                          <span>User</span>
                        </span>
                      </NavLink>

                      <ul
                        className={
                          popup ? " dropdown-menu show" : "dropdown-menu"
                        }
                        aria-labelledby="pagesExample"
                      >
                        <li>
                          <NavLink
                            to="/user/community"
                            className="dropdown-item"
                          >
                            Community
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/user/profile" className="dropdown-item">
                            Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/user/settings"
                            className="dropdown-item"
                          >
                            Settings
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/auth/logout" className="dropdown-item">
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
