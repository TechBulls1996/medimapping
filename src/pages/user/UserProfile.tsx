import { useEffect, useState } from "react";

import { displayDate, getErrorMsg, getTimeAgo } from "../../helpers";
import MyAlert from "../../components/common/Alert";
import Sidebar from "../../components/user/Sidebar";
import { useParams } from "react-router-dom";
import { GetUser } from "../../services/NetworkServices";
import dummyImg from "../../assets/images/dummy.png";
import tickImg from "../../assets/images/tick.svg";


const UserProfile = () => {
  const [user, setUser]: any = useState();
  const [errors, setErrors]: any = useState([]);
  let { userId } = useParams();
 
  useEffect(() => {
    GetUser(userId).then((res) => {
      if (res?.status) {
        setUser(res.data);
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  }, []);

  const globalError = getErrorMsg(errors, "global");

  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
          <div className="col-sm-3 p-0">
              <Sidebar />
            </div>
            <div className="col-sm-9 pt-4 ">
              <header className=" d-flex align-items-center">
                <h3 className="title-md">User Details</h3>
              </header>
            
              {/* start listing */}
              <div className="row">
                {globalError?.length > 0 && (
                  <MyAlert message={globalError} alertType="danger" />
                )}
                
                <div className="col-sm-12 p-3 mt-2">
                <div className="doctorslist column-card w-100 p-4">
                    <div className="fundingheader">
                      <figure className="figure">
                        <span className="circleimg icon-circle">
                        <img src={dummyImg} className="figure-img img-fluid" alt="" />
                        </span>
                        <figcaption className="figure-caption text-capitalize">
                          {user?.name}
                          <br />
                            <span className="text-muted">Connected since {displayDate(user?.nextAppointment)}</span>

                        </figcaption>
                      </figure>
                    
                    </div>
                  
                    <div className="totalinvs">
                      <div className="item">
                        <span className="head-sec">Country</span>
                        <span className="amount-sec">{user?.country.label}</span>
                      </div>

                      <div className="item">
                        <span className="head-sec">State</span>
                        <span className="amount-sec text-capitalize">{user?.state.label}</span>
                      </div>

                      <div className="item">
                        <span className="head-sec">City</span>
                        <span className="amount-sec text-capitalize">{user?.city.label}</span>
                      </div>
                      <div className="item">
                        <span className="head-sec">Last Updated</span>
                        <span className="amount-sec text-capitalize">{getTimeAgo(user?.updatedAt)}</span>
                      </div>
                    </div>
                  </div> 

                  <div className="column-card shadow-xs border ">
                    <div className="card-body p-lg-4">
                      <ul className="list-unstyled">
                        <li className="">
                          <div className="d-flex justify-content-between">
                            <p className="opacity-8">- Ready to Donate Blood</p>
                            <p className="fw-bold opacity-8 px-2">
                              <img src={tickImg} />
                            </p>
                          </div>
                        </li>
                        <li className="">
                          <div className="d-flex justify-content-between">
                            <p className="opacity-8">- Is the user eligible to create a blood donation request?</p>
                            <p className="fw-bold opacity-8 px-2">
                              <img src={tickImg} />
                            </p>
                          </div>
                        </li>
                        <li className="border-bottom">
                          <div className="d-flex justify-content-between">
                            <p className="opacity-8">- Promoting a culture of giving, our platform verifies user eligibility, empowering individuals to initiate and respond to life-saving blood donation requests</p>
                            <p className="fw-bold opacity-8 px-2">
                              <img src={tickImg} />
                            </p>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                
                </div>
              </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
