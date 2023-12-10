import {
  faChartArea,
  faClockRotateLeft,
  faFileClipboard,
  faHeartbeat,
  faNetworkWired,
  faRightFromBracket,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="app-sidebar">
        <nav className=" navbar-expand-md navbar-app">
          <div className="navbar-collapse collapse" id="app-navbar-nav">
            <div className="navbar-nav">
              <NavLink to={"/user/community"} className="nav-link">
                <i className="timeline-ico ico ">
                  <FontAwesomeIcon icon={faHeartbeat} />
                </i>
                Community
              </NavLink>
              <NavLink to={"/user/network"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faNetworkWired} />
                </i>
                My Network
              </NavLink>
              {/* <NavLink to={"/user/doctors"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </i>
                Find Doctors
              </NavLink> */}

              <NavLink to={"/user/records"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faFileClipboard} />
                </i>
                My Medical Records
              </NavLink>

              {/* <NavLink to={"/user/vitals"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faChartArea} />
                </i>
                My Vitals Records
              </NavLink> */}
              <NavLink to={"/user/history"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                </i>
                My History
              </NavLink>
              <NavLink to={"/auth/logout"} className="nav-link">
                <i className="network-ico ico">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </i>
                Logout
              </NavLink>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};
export default React.memo(Sidebar);
