import { useEffect, useState } from "react";
import Post from "../components/user/post";
import RecentDonars from "../components/user/recentDonars";

import { GetRequest } from "../services/RequestServices";
import { getErrorMsg } from "../helpers";
import MyAlert from "../components/common/Alert";
import moment from "moment";

const RequestDetails = () => {
  const [post, setPost]: any = useState({});
  const [errors, setErrors]: any = useState([]);
  const [donate, upLiftDonate] = useState(post?.response?.length || 0);
  const [donateStatus, setDonateStatus] = useState(post?.response?.length || 0);

  useEffect(() => {
    GetRequest({
      page: 1,
      pageSize: 1,
    }).then((res) => {
      if (res?.status) {
        setPost(res.data[0]);
        upLiftDonate(res.data[0]?.response?.length);
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
            <div className="col-sm-8 pt-4 ">
              <h2 className="title-lg text-center">Blood Request</h2>
              <p className="text-muted text-center mb-5">
                Donar Needed at Vasant Kunj, New Delhi, South Delhi, Delhi,
                India
              </p>
              {/* start listing */}
              <div className="row">
                {globalError?.length > 0 && (
                  <MyAlert message={globalError} alertType="danger" />
                )}

                {post?._id && (
                  <Post
                    post={post}
                    donateAction={true}
                    upLiftDonate={(donate: any, donateStatus: any) => {
                      upLiftDonate(donate);
                      setDonateStatus(donateStatus);
                    }}
                  />
                )}

                <div className="col-sm-12 m-auto  mb-2 pt-3 pl-3">
                  {donateStatus && (
                    <MyAlert message={donateStatus} alertType="success" />
                  )}

                  <h5>More Details</h5>
                </div>
                <div className="col-sm-12 p-3">
                  <table className="table table-sm table-stripped table-hover  ">
                    <tbody>
                      <tr>
                        <th>Request Status : </th>
                        <td className="">
                          {" "}
                          <span className="text-danger text-bold">
                            {post?.status === "pending" &&
                              "Requirement is not fulfilled. Please consider your help."}

                            {!post?.status &&
                              "Requirement is not fulfilled. Please consider your help."}
                          </span>
                          <span className="text-warning text-bold">
                            {post?.status === "moderate" &&
                              "Requirement is still not fulfilled completely."}
                          </span>
                          <span className="text-success text-bold">
                            {post?.status === "done" &&
                              "Requirement is fulfilled. Thanks for your Support."}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>People Responded : </th>
                        <td className="">
                          <code>{donate}</code>
                        </td>
                      </tr>
                      <tr>
                        <th>Blood Type : </th>
                        <td className="">{post?.bloodType} </td>
                      </tr>

                      <tr>
                        <th>Blood Required : </th>
                        <td className="">
                          {post?.bloodUnit && post?.bloodUnit + " Units"}{" "}
                        </td>
                      </tr>
                      <tr>
                        <th>Hospital Name : </th>
                        <td className=""> {post?.hospital} </td>
                      </tr>
                      <tr>
                        <th>Hospital Address : </th>
                        <td className="">{post?.hospitalAddress} </td>
                      </tr>

                      <tr>
                        <th>City : </th>
                        <td className="">{post?.city?.value} </td>
                      </tr>

                      <tr>
                        <th>State : </th>
                        <td className="">{post?.state?.value} </td>
                      </tr>
                      <tr>
                        <th>Country : </th>
                        <td className="">{post?.country?.value} </td>
                      </tr>

                      <tr>
                        <th>Date : </th>
                        <td className="border-bottom">
                          {post?.createdAt &&
                            moment(post?.createdAt).format(
                              "do MMMM, YYYY  h:mm:ss A"
                            )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm px-3">
              <RecentDonars />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDetails;
