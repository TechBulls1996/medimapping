import { NavLink } from "react-router-dom";
import donateImg from "../assets/images/donate.png";
import receiveImg from "../assets/images/receive.png";
import BreadCrumb from "../components/common/Breadcrumb";

const About = () => {
  return (
    <>
      <header className="masthead mb-5 py-5">
        <div className="container d-flex h-80 align-items-center">
          <div className="mx-auto text-center">
            <div className="row">
              <div className="col-4 mx-auto">
                <div className="hovereffect">
                  <NavLink to="/login">
                    <img src={donateImg} className="img-fluid" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-1 mx-auto p-1"></div>
              <div className="col-4 mx-auto">
                <div className="hovereffect">
                  <NavLink to="/auth/register">
                    <img src={receiveImg} className="img-fluid" alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 pt-5 pb-5">
                <h1 className="mx-auto my-0 text-uppercase">MediMapping</h1>
                <h2 className="text-white-50 mx-auto mt-2 mb-5">
                  A Free online Place where anyone can be a Hero and Save Lives.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BreadCrumb pages={["About us"]} />
      <div className="container">
        <div className="col-sm-12 py-5">
          <h2 className="text-center mt-2 mb-3 text-capitalize">
            Here’s our story, know more about us
          </h2>
          <p>
            Medimapping can save your life. We are an online platform to fulfil
            the blood transfusion needs of patients all over India. From
            Maharashtra to Manipur and Kashmir to Kanyakumari, from the most
            common blood group to the rarest, we have a huge database of blood
            donors that can come handy when saving the life of your loved ones.
            The blood donation system in India needs some major transformations
            and through Medimapping we wish to do that.
          </p>
          <p>
            We want to create a platform with a nationwide database so that
            donors can connect to receivers on a real-time basis and no time is
            lost. We hope to save millions of lives by making blood available
            anywhere, anytime. We have developed a platform that is easy to use
            and is free. Anyone can register on the platform as a donor or can
            easily find blood to save a life. Whether you need blood or want o
            become a donor, Medimapping is the place for you. Medimapping is a
            youth-run organization that is committed to encouraging healthy and
            young Indians to donate blood.
          </p>
          <p>
            We are dedicated to bringing a difference and believe that our
            dedication, hard work, and punctuality will help us achieve our
            goal. You can register with us with your blood group and other
            necessary medical information to help save a life. You can reach out
            to us through our website or mobile app, we are just a click away.
            We operate across India and have a strong network nationwide.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
