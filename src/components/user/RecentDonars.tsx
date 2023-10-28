import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/images/dummy.png";
import { GetRecentDonars } from "../../services/RequestServices";
import { getTimeAgo } from "../../helpers";
import { NavLink } from "react-router-dom";

const RecentDonars = () => {
  const [donars, setDonars]: any = useState([]);
  const [pageSize]: any = useState(5);
  const [errors,setErrors]: any = useState([]);

  const handleRequest = () => {
    return GetRecentDonars({ pageSize }).then((res) => {
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
        <h5 className="text-center mb-4">Recent Donars</h5>
        <ul className="list-group list-group-flush">
          {donars &&
            donars.map((donar: any) => (
              <li className="list-group-item">
                <div className="pro-outer-sec mt-3">
                  <NavLink to={"/UserProfile/" + donar.user._id}>
                    <figure className="figure">
                      <img
                        src={donar?.user?.image || dummyImg}
                        className="figure-img img-fluid"
                        alt=""
                      />
                    </figure>
                  </NavLink>
                  <div className="contect-sec">
                    <NavLink to={"/UserProfile/" + donar.user._id}>
                      <h3 className="title-xxs">{donar?.user?.name} </h3>
                    </NavLink>

                    <small className="subhead">
                      {donar.user?.city.value}, {donar?.user?.state?.value}
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

