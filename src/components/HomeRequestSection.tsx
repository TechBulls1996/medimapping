import { NavLink } from "react-router-dom";
import Post from "./user/post";
import { useEffect, useState } from "react";
import { GetRequest } from "../services/RequestServices";
import { getErrorMsg } from "../helpers";
import MyAlert from "./common/Alert";

const HomeRequestSection = () => {
  const [post, setPost] = useState([]);
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [errors, setErrors]: any = useState([]);

  const getRequest = GetRequest;

  useEffect(() => {
    getRequest({
      page,
      pageSize,
    }).then((res) => {
      if (res?.status) {
        setPost(res.data);
        return true;
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  }, [getRequest, page, pageSize]);

  const globalError = getErrorMsg(errors, "global");

  return post?.length > 0 ? (
    <section className="position-relative pb-8" id="section-tools">
      <div className="container">
        <div className="row position-relative overflow-hidden mb-2">
          <div className="col-md-7 pb-4">
            <span className="text-primary font-weight-bold">
              Get inspired By,
            </span>
            <h2 className="mt-2 display-6 font-weight-black">
              To Be a Blood Donar
            </h2>
            <p>
              You can start helping directly to other people by clicking here.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-row-reverse row">
          <div className="col-lg-4">
            <div className="investors-column">
              <header className="entry-title">
                <small className="title-sm">For Blood Help</small>
                <h4 className="title-head">
                  <strong className="text-primary">Raise a</strong> Blood
                  Request
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
                  <li className="list-group-item">Raise Request</li>
                  <li className="list-group-item">Build Network</li>
                  <li className="list-group-item">Seek For Help AnyTime</li>
                </ul>
              </div>
              <div className="mt-4 mb-4">
                <NavLink to="/auth/login" className="btn btn-primary mr-3">
                  Raise Blood Request
                </NavLink>
                <NavLink
                  to="/auth/register/"
                  className="btn btn-outline-primary mx-4"
                >
                  Join as Donar
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-8 dealcol-sec cus-scr">
            {/* Blood Request listing here... */}
            {globalError?.length > 0 && (
              <MyAlert message={globalError} alertType="danger" />
            )}
            <div className="row">
              {post && post.map((post) => <Post post={post} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default HomeRequestSection;
