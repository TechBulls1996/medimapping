import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/images/dummy.png";
import { GetRecentRecievers } from "../../services/RequestServices";
import { getTimeAgo } from "../../helpers";

const RecentDonars = () => {
  const [donars, setDonars]: any = useState([]);
  const [pageSize]: any = useState(5);

  const handleRequest = () => {
    return GetRecentRecievers({ pageSize }).then((res) => {
      if (res?.status) {
        setDonars(res.data);
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <>
      <div className="rightbar pt-4" style={{ paddingLeft: "20px" }}>
        <h5 className="text-center mb-4">Recent Receivers</h5>
        <ul className="list-group list-group-flush">
          {donars &&
            donars.map((donar: any) => (
              <li className="list-group-item">
                <div className="pro-outer-sec mt-3">
                  <a href="/UserProfile/629449f183201e1dcc1407f4">
                    <figure className="figure">
                      <img
                        src={dummyImg}
                        className="figure-img img-fluid"
                        alt=""
                      />
                    </figure>
                  </a>
                  <div className="contect-sec">
                    <a href="/UserProfile/629449f183201e1dcc1407f4/">
                      <h3 className="title-xxs">{donar?.user?.name} </h3>
                    </a>

                    <small className="subhead">
                      Looking for AB+ in New Delhi, Delhi
                    </small>

                    <small className="timeago text-muted">
                      {getTimeAgo(donar.createdAt)}
                    </small>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default React.memo(RecentDonars);
function setErrors(errors: any) {
  throw new Error("Function not implemented.");
}
