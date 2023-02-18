import HeadImg from "../assets/images/heading1.png";
import FindImg from "../assets/images/find.png";
import NotifyImg from "../assets/images/notify.png";
import SmsileImg from "../assets/images/smiley.png";
import redNoiseImg from "../assets/images/red-noise.jpeg";
import AstroImg from "../assets/images/astro.png";
import { NavLink } from "react-router-dom";
import DonateImg from "../assets/images/5297890.jpg";

const Home = () => {
  const backgroundRedImg = {
    backgroundImage: "url(" + redNoiseImg + ")",
    backgroundPosition: "center center",
  };

  const background: any = {
    backgroundImage: "url('images/gradient.svg')",
  };
  return (
    <>
      <header>
        <div className="page-header pt-8">
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

                <NavLink to={"login"} className="btn btn-dark mt-4">
                  Get Started
                </NavLink>
                <NavLink
                  to={"auth/register"}
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
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <img src={HeadImg} className="img-fluid" alt="" />
            </div>
            <div className="row align-items-center no-gutters mt-5 mb-4 mb-lg-5">
              <div className="col-xl-4 col-lg-4 text-center pl-3 pr-3">
                <div className="featured-text">
                  <img src={FindImg} className="img-fluid mb-3 mt-3" alt="" />
                  <h5 className="text-xl mt-3 mb-1 font-weight-black">
                    Find Blood
                  </h5>
                  <p className="text-black-50 mb-0 text-center">
                    Find the blood group you need and get it delivered. Check
                    availability of specific blood groups instantly.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 text-center pl-3 pr-3">
                <div className="featured-text">
                  <img src={NotifyImg} className="img-fluid mb-3 mt-3" alt="" />

                  <h5 className="text-xl mt-3 mb-1 font-weight-black">
                    Get Notified
                  </h5>
                  <p className="text-black-50 mb-0 text-center">
                    Get notifications on real-time basis. Be informed about the
                    latest developments and events.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 text-center pl-3 pr-3 ">
                <div className="featured-text">
                  <img src={SmsileImg} className="img-fluid mb-3 mt-3" alt="" />
                  <h5 className="text-xl mt-3 mb-1 font-weight-black">
                    Completly Free
                  </h5>
                  <p className="text-black-50 mb-0 text-center">
                    Get notifications on real-time basis. Be informed about the
                    latest developments and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 my-7">
        <div className="container">
          <div className="row position-relative mb-2">
            <div className="col-12">
              <div
                className="card position-relative shadow-lg"
                style={backgroundRedImg}
              >
                <div className="card-body p-md-5 p-4">
                  <span className="text-white text-lg font-weight-bold">
                    For Everyone
                  </span>
                  <h4 className="my-2 text-white text-4xl font-weight-black col-md-6">
                    Let's join forces for a better world!
                  </h4>
                  <p className="text-white w-lg-50">
                    Join us, start saving lifes from today. Every step helps
                    many lives and its not very hard to connect with other, we
                    are here to help. Become a regular donar with us.
                  </p>

                  <NavLink
                    to={"login"}
                    className="btn btn-sm btn-outline-white text-white btn-blur mb-0 mt-2"
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
              <img
                src={AstroImg}
                className="position-absolute w-30 end-3 top-0 mt-sm-n6 d-md-block d-none"
                alt="github"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
