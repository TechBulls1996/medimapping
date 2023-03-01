import { NavLink } from "react-router-dom";
import DonateImg from "../assets/images/5297890.jpg";
import BreadCrumb from "../components/common/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const background: any = {
    backgroundImage: "url('images/gradient.svg')",
  };

  return (
    <>
      <header>
        <div className="page-header pt-6">
          <div className="oblique position-absolute top-0 end-0 h-100 d-md-block d-none">
            <div
              className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n12"
              style={background}
            ></div>
          </div>
          <div className="container">
            <div className="row text-sm-start text-center">
              <div className="col-lg-6 col-md-7 mt-md-8 mb-lg-10 mb-5 mt-md-0">
                <h6 className="text-uppercase text-sm">
                  MediMapping | Need a Blood Donar, don't worry we are here.
                </h6>
                <h1 className="text-dark display-5 font-weight-black mt-3">
                  The perfect starting point to{" "}
                  <span className="text-primary"> Start Blood Donation.</span>
                </h1>
                <p className="text-lg me-sm-5">
                  Medimapping is a free Blood donation online platform, our
                  motive is to help people. Also, we provide apps to track your
                  medical reports. so, you can get easy treatment with any
                  doctor or hospital.
                </p>

                <NavLink to={"/login"} className="btn btn-dark mt-4">
                  Get Started
                </NavLink>
                <NavLink
                  to={"/auth/register"}
                  className="btn btn-primary mt-4 ms-2"
                >
                  Register with us
                </NavLink>
              </div>
              <div className="col-lg-6 col-md-7 mt-md-8 mb-lg-10 mb-5 mt-md-0">
                <img
                  src={DonateImg}
                  alt="Donate Blood Now"
                  className="position-absolute ms-md-0 d-none d-md-flex mt-12 mt-lg-0 circle-img img-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <BreadCrumb pages={["Contact us"]} />

      <div className="aboutus-secktion pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4>Contact Us</h4>
              <p>
                Medimapping is a project developed to serve society. The
                volunteers at Medimapping believe that there is no greater joy
                in the world than saving a life. With this idea at its core,
                Medimapping is developed as a platform to serve people in times
                of emergency. You can contact us via email or call, we are
                available to help you with all the information. You can also
                fill out the Login form for any inquiries.
              </p>
            </div>
            <div className="container contact-section pb-5">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <FontAwesomeIcon
                        icon={faMapMarkedAlt}
                        className="text-primary mb-2"
                      />
                      <h4 className="text-uppercase m-0">Address</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">
                        253 Narmada Apartments, Alaknanda, New Delhi 19
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-primary mb-2"
                      />

                      <h4 className="text-uppercase m-0">Email</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">
                        <NavLink to={"mailto:contact@medimapping.com"}>
                          contact@medimapping.com
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="text-primary mb-2"
                      />
                      <h4 className="text-uppercase m-0">Phone</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">+91 8595147942</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-style">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="Full Name"
                  placeholder="Your name.."
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email.."
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone.."
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your subject.."
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="discription"
                  name="discription"
                  placeholder="Write description.."
                  style={{ height: "150px" }}
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  id="submit1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  className="btn btn-block btn-primary py-2"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="col-md-6 image-style">
              <img
                className="img img-fluid img-thumbnail img-responsive"
                src="http://medimapping.com/assets/images/contact6.jpg"
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <iframe
              title="googleMaps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14018.956510090145!2d77.2151329!3d28.5475599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79535a6d4bfa1b7f!2sMedimapping!5e0!3m2!1sen!2sin!4v1604847282285!5m2!1sen!2sin"
              height="300"
              frameBorder="0"
              style={{ border: 0, width: "100%" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
