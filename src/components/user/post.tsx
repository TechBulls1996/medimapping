import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dummyImg from "../../assets/images/dummy.png";
import { NavLink } from "react-router-dom";
import {
  faArrowAltCircleRight,
  faMapMarker,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { getTimeAgo } from "../../helpers";
import { useEffect, useState } from "react";
import { createLike } from "../../services/RequestServices";
import ShareModal from "./shareModal";

const Post = ({ post }: any) => {
  const [like, setLike]: any = useState(post?.social.Likes.length || 0);
  const [modalStatus, setModalStatus] = useState(false);

  const handleLike = (postId: string) => {
    createLike({ requestId: postId }).then((res) => {
      let likes = like;
      if (res.status) {
        setLike(likes + 1);
      } else {
        setLike(likes - 1);
      }
      return true;
    });
  };

  useEffect(() => {}, [like]);
  return (
    <>
      <ShareModal modalStatus={modalStatus} setModalStatus={setModalStatus} />
      <div className="col-sm-12  mb-5" key={post?._id}>
        <div className="request-tab shadow pt-2">
          <div className="timeline-box justify-content-between ">
            <div className="pro-outer-sec">
              <NavLink to={"/UserProfile/" + post?.user[0]?._id}>
                <figure className="figure">
                  <img
                    src={post?.user[0]?.image || dummyImg}
                    className="figure-img img-fluid"
                    alt=""
                  />
                </figure>
              </NavLink>
              <div className="contect-sec">
                <a href={"/UserProfile/" + post?.user[0]?._id}>
                  <h3 className="title-xxs">{post?.user[0]?.name} </h3>
                </a>

                <small className="subhead">
                  Looking for {post?.bloodGroup} in {post?.city?.value},{" "}
                  {post?.state?.value}
                </small>

                <small className="timeago text-muted">
                  {getTimeAgo(post?.createdAt)}
                </small>
              </div>
            </div>
            <div className="custom-toggle" style={{ maxWidth: "160px" }}>
              <div className="row">
                <div className="col-12 pb-2 ">
                  <button
                    className="like-btn btn-block "
                    onClick={(e) => {
                      handleLike(post._id);
                    }}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} /> Vote Up :{" "}
                    <span id="count">{like}</span>
                  </button>
                </div>

                <div className="col-12 pb-1">
                  <button
                    className="like-btn btn-block"
                    onClick={(e) => setModalStatus(true)}
                  >
                    <FontAwesomeIcon icon={faShareSquare} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-3 pl-5 border-top">
            <p>{post?.desc}</p>
          </div>

          <div className="bg-grey px-3 pt-3 pb-2">
            <div className="pro-outer-sec">
              <div className="text-center">
                <small className="text-primary font-weight-bold text-sm text-uppercase">
                  {post?.time <= 3 ? "Urgent" : "Moderate"}
                </small>
                <h3 className="mb-0">{post?.bloodGroup}</h3>
              </div>

              <div
                className="contect-sec"
                style={{
                  paddingTop: "3px",
                  minWidth: "65%",
                  maxWidth: "70%",
                }}
              >
                <small className="subhead text-bold">
                  {post?.bloodType} Needed within {post?.time} Hours
                </small>

                <small className="timeago text-muted">
                  <FontAwesomeIcon icon={faMapMarker} />{" "}
                  <span className="pl-2">
                    {post?.hospitalAddress +
                      ", " +
                      post?.city?.value +
                      ", " +
                      post?.city?.stateCode +
                      " - " +
                      post?.pinCode}
                  </span>
                </small>
              </div>

              <h5 className="pt-2">
                <NavLink
                  to={"/request/" + post?._id}
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
