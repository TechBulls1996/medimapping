import dummyImg from "../../assets/images/dummy.png";
import { NavLink } from "react-router-dom";
import dummyLogoImg from "../../assets/images/hospital_dummy_logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faDollarSign,
  faRightLong,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { Key, useEffect, useState } from "react";
import { GetPublicDonars } from "../../services/DonarServices";
import { displayDate, getErrorMsg, getTimeAgo } from "../../helpers";
import MyAlert from "../common/Alert";

const UserCards = (props: any) => {
  const [donars, setDonars]: any = useState([]);
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [errors, setErrors]: any = useState([]);

  // will be used for auth users add if condition for GetPublicDonars and GetDonars
  const getDonars = GetPublicDonars;
  
  useEffect(() => {
    getDonars({
      page,
      pageSize,
    }).then((res) => {
      if (res?.status) {
        setDonars(res.data);
        return true;
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  }, [getDonars, page, pageSize]);

  const globalError = getErrorMsg(errors, "global");
  const { className='', style } = props
  return (
    <>
      <div className="col-sm-12 mb-5 network-row">
         {globalError?.length > 0 && (
              <MyAlert message={globalError} alertType="danger" />
            )}
          
          {donars && donars.map((donar: any, ind: Key) => {
                    return (
                      <div className={`user-card mt-3 col ${className}`} key={ind} style={style}>
                        <a href="/UserProfile/629449f183201e1dcc1407f4">
                          <figure className="figure">
                            <img src={dummyImg} className="figure-img img-fluid" alt="" />
                          </figure>
                        </a>
                        <div className="contect-sec">
                          <a href="/UserProfile/629449f183201e1dcc1407f4/">
                            <h3 className="title-xxs"> { donar?.user?.name } </h3>
                          </a>

                          <small className="subhead">
                            Helping from { donar.user.city.label}, { donar.user.state.label}
                          </small>

                          <small className="timeago text-muted">{getTimeAgo(donar?.createdAt)}</small>
                        </div>
                      </div>
                    );
              })}
          </div>
    </>
  );
};

export const VitalCards = () => {
  return (
    <>
      <div className="col-sm-12 mb-5 vital-row">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="text-outer">
                <h4>Today's Money</h4>
                <h2>
                  $53, 000 <span>+55%</span>
                </h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="text-outer">
                <h4>Today's Money</h4>
                <h2>
                  $53, 000 <span>+55%</span>
                </h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="text-outer">
                <h4>Today's Money</h4>
                <h2>
                  $53, 000 <span>+55%</span>
                </h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 mt-5">
            <div className="card">
              <div className="head w-100">
                <h4>Vital's History</h4>
                <p>
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className="text-success"
                  />{" "}
                  30 done this month
                </p>

                <div className="table-wrap w-100">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <td className="head">Record</td>
                        <td className="head">First</td>
                        <td className="head">Last</td>
                        <td className="head">Handle</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HistoryCard = () => {
  return (
    <>
      <div className="col-sm-12 mb-5 vital-row">
        <div id="tracking">
          <div className="text-center tracking-status-intransit">
            <p className="tracking-status text-tight">My History</p>
          </div>
          <div className="tracking-list">
            <div className="tracking-item">
              <div className="tracking-icon status-intransit">
                <FontAwesomeIcon icon={faTint} className="fa-2x" />
              </div>
              <div className="tracking-date">19 Mar, 2023 01:39PM</div>
              <div className="tracking-content text-capitalize">
                You had Requested blood.
                <span className="text-capitalize">
                  raj rishi chatterjee , India , Delhi
                  <br /> South Delhi , New Delhi
                </span>
              </div>
            </div>
            <div className="tracking-item status-donate">
              <div className="tracking-icon status-donate ">
                <FontAwesomeIcon icon={faTint} className="fa-2x" />
              </div>
              <div className="tracking-date">19 Mar, 2023 01:39PM</div>
              <div className="tracking-content text-capitalize">
                You had donated blood.
                <span className="text-capitalize">
                  raj rishi chatterjee , India , Delhi
                  <br /> South Delhi , New Delhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DoctorCards = () => {
  return (
    <>
      <div className="wfc-pointer col-md-12">
        <div className="doctorslist column-card w-100">
          <div className="fundingheader">
            <figure className="figure">
              <span className="circleimg logo-circle">
                <img
                  alt=""
                  src={dummyLogoImg}
                  className="figure-img img-fluid"
                />
              </span>
              <figcaption className="figure-caption">
                Dr. Rakesh Kumar
                <br />
                <NavLink to={"/doctor/12"} className="text-black ">
                  <span>MBBS, MS - Atlast Hospital</span>
                </NavLink>
              </figcaption>
            </figure>
            <div className="interested-sec text-center">
              <span className="doc-live">Top Rated</span>
            </div>
          </div>
          <div className="totalinvs">
            <div className="item">
              <span className="head-sec">Location</span>
              <span className="amount-sec ">New Delhi</span>
            </div>
            <div className="item">
              <span className="head-sec">Experience</span>
              <span className="amount-sec">8 Yrs</span>
            </div>
            <div className="item">
              <span className="head-sec">Time</span>
              <span className="amount-sec ">10AM-8PM</span>
            </div>
            <div className="item">
              <span className="head-sec">Specialist</span>
              <span className="amount-sec ">Heart, Eye, Ear</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MedicalRecordCard = (props: { record: any; key: number }) => {
  const { record, key } = props;
  return (
    <>
      <div className="wfc-pointer col-md-12" key={key}>
      <NavLink to={record._id} className="text-black ">
        <div className="doctorslist column-card w-100">
          <div className="fundingheader">
            <figure className="figure">
              <span className="circleimg icon-circle">
                <FontAwesomeIcon icon={faBriefcase} className="fa-2x" />
              </span>
              <figcaption className="figure-caption text-capitalize">
                {record.categoryOfIllness}
                <br />
                <NavLink to={"#"} className="text-black ">
                  <span>Dr. {record.doctor}, {record.hospital}</span>
                </NavLink>
              </figcaption>
            </figure>
            <div className="interested-sec text-center">
              <span className="doc-live">{displayDate(record.nextAppointment)}</span>
            </div>
          </div>
          <div className="totalinvs">
            <div className="item">
              <span className="head-sec">Location</span>
              <span className="amount-sec text-capitalize">{record.hospitalAddress}</span>
            </div>
            <div className="item">
              <span className="head-sec">Next Visit</span>
              <span className="amount-sec">{displayDate(record.nextAppointment)}</span>
            </div>

            <div className="item">
              <span className="head-sec">Priority</span>
              <span className="amount-sec text-capitalize">{record.priority}</span>
            </div>
          </div>
        </div>
      </NavLink>  
      </div>
    </>
  );
};

export default UserCards;
