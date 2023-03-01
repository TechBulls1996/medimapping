import React from "react";
import dummyImg from "../../assets/images/dummy.png";
const RecentDonars = () => {
  return (
    <>
      <div className="rightbar pt-4" style={{ paddingLeft: "20px" }}>
        <h5 className="text-center mb-4">Recent Receivers</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="pro-outer-sec mt-3">
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
          </li>
          <li className="list-group-item">
            <div className="pro-outer-sec mt-3">
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
          </li>
          <li className="list-group-item">
            <div className="pro-outer-sec mt-3">
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
          </li>
        </ul>
      </div>
    </>
  );
};
export default React.memo(RecentDonars);
