import { NavLink } from "react-router-dom";
import UserCards from "./user/UserCards";

const HomeDonarSection = () => {
  return (
    <section className="position-relative" id="section-tools">
      <div className="container">
        <div className="row position-relative overflow-hidden mb-2">
          <div className="col-md-7 pb-4">
            <span className="text-primary font-weight-bold">
              Get inspired By,
            </span>
            <h2 className="mt-2 display-6 font-weight-black">
              Meet Our Regular Donars
            </h2>
            <p>Our Donar's Helping 1000+ people daily</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-row-reverse row">
          <div className="col-lg-4">
            <div className="investors-column">
              <header className="entry-title">
                <small className="title-sm">For Good World</small>
                <h4 className="title-head">
                  <strong className="text-primary">Become a</strong> Regular
                  Donar
                </h4>
                <p>
                  Medimapping lets you effortlessly manage your Medical Reports,
                  Vitals, Doctors, Donations and more in one place. Get back to
                  building your Good Health, Better Bonding, Good Connection
                  with Family.
                </p>
              </header>
              <div className="investors-desc">
                <ul className="list-group">
                  <li className="list-group-item">Donate and Help</li>
                  <li className="list-group-item">Build Network</li>
                  <li className="list-group-item">Seek For Help AnyTime</li>
                </ul>
              </div>
              <div className="mt-4 mb-4">
                <NavLink
                  to="/auth/register"
                  className="btn btn-outline-primary mr-3"
                >
                  Raise Blood Request
                </NavLink>
                <NavLink to="/auth/register" className="btn btn-primary mx-4">
                  Join as Donar
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-8 dealcol-sec cus-scr">
            {/* Blood Request listing here... */}
            <div className="col-sm ">
              <UserCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDonarSection;
