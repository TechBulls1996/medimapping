import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dummyImg from "../../assets/images/dummy.png";
import { NavLink } from "react-router-dom";
import {
  faArrowAltCircleRight,
  faMapMarker,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <>
      <div className="col-sm-12  mb-5">
        <div className="request-tab shadow pt-2">
          <div className="timeline-box justify-content-between ">
            <div className="pro-outer-sec">
              <a href="/UserProfile/629449f183201e1dcc1407f4">
                <figure className="figure">
                  <img src={dummyImg} className="figure-img img-fluid" alt="" />
                </figure>
              </a>
              <div className="contect-sec">
                <a href="/UserProfile/629449f183201e1dcc1407f4/">
                  <h3 className="title-xxs">Sagar Kumar </h3>
                </a>

                <small className="subhead">
                  Looking for AB+ in New Delhi, Delhi
                </small>

                <small className="timeago text-muted">10 months ago</small>
              </div>
            </div>
            <div className="custom-toggle" style={{ maxWidth: "160px" }}>
              <div className="row">
                <div className="col-12 pb-2 ">
                  <button className="like-btn btn-block ">
                    <FontAwesomeIcon icon={faThumbsUp} /> Vote Up :{" "}
                    <span id="count">0</span>
                  </button>
                </div>

                <div className="col-12 pb-1">
                  <button className="like-btn btn-block">
                    <FontAwesomeIcon icon={faShareSquare} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-3 pl-5 border-top">
            <p>
              I need 1 unit AB+ as a replacement for my father's spine surgery.
            </p>
          </div>

          <div className="bg-grey p-3">
            <div className="pro-outer-sec">
              <div className="text-center">
                <small className="text-primary font-weight-bold text-sm text-uppercase">
                  Moderate
                </small>
                <h3>AB+</h3>
              </div>

              <div className="contect-sec" style={{ paddingTop: "3px" }}>
                <small className="subhead text-bold">
                  Blood Needed within 48 Hour
                </small>

                <small className="timeago text-muted">
                  <FontAwesomeIcon icon={faMapMarker} />{" "}
                  <span className="pl-2">
                    Vasant Kunj, South Delhi, New Delhi, Delhi
                  </span>
                </small>
              </div>

              <h5 className="pt-2">
                <NavLink
                  to={"/blogs"}
                  className="text-primary font-weight-bold"
                >
                  <span> Donate </span>{" "}
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
