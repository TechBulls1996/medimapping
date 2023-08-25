import { useEffect, useState } from "react";
import Post from "../../components/user/post";
import RecentDonars from "../../components/user/recentDonars";
import RequestModal from "../../components/user/requestModal";
import Sidebar from "../../components/user/sidebar";
import { useSelector } from "react-redux";
import { GetRequest } from "../../services/RequestServices";
import { getErrorMsg } from "../../helpers";
import MyAlert from "../../components/common/Alert";
import { MyButton } from "../../components/common/MyButton";

const Community = () => {
  const authState = useSelector((state: any) => state.auth.user);
  const [modalStatus, setModalStatus] = useState(false);
  const [posts, setPosts]: any = useState([]);
  const [page, setPage]: any = useState(1);
  const [pageSize]: any = useState(2);
  const [nextPage, setNextPage]: any = useState(true);
  const [sort, setSort]: any = useState(false);
  const [errors, setErrors]: any = useState([]);

  const handleRequest = () => {
    let sortFiltered = sort;
    if (sort) {
      const sortKeys = Object.keys(sort);
      sortFiltered =
        sortKeys.filter(function (key) {
          return sort[key] === true;
        })[0] || false;
    }

    return GetRequest({ page, pageSize, sort: sortFiltered }).then((res) => {
      if (res?.status) {
        if (page === 1) {
          setPosts(res.data);
        } else {
          let newPost = [...posts, ...res.data];
          setPosts(newPost);
        }

        setNextPage(res.pagination.nextPage);
        if (res.pagination.nextPage) {
          setPage(page + 1);
        }
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  };

  useEffect(() => {
    handleRequest();
  }, [sort]);

  const handleChange = (e: any) => {
    let newSort: any = {
      All: false,
      Higest: false,
      Recent: false,
      NearBy: false,
    };

    newSort[e.target.value] = e.target.checked;
    setSort(newSort);
    setPage(1);
    return true;
  };

  const globalError = getErrorMsg(errors, "global");

  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 p-0">
              <Sidebar />
            </div>
            <div className="col-sm-6 pt-4">
              <header className=" d-flex align-items-center">
                <h3 className="title-md">
                  Hi, {authState?.name?.split(" ")[0] || authState.name}
                </h3>
                <button
                  type="button"
                  className="btn btn-outline-primary mt-2"
                  onClick={(e) => setModalStatus(true)}
                >
                  + Add New Request
                </button>
              </header>
              <RequestModal
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
              />
              <div className="detailcheck-sec">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="form-label">Showing:</label>
                  </div>
                  <div className="col-md-12 mb-4 d-flex">
                    <div className="btn-checkbox form-check">
                      <input
                        name="filter"
                        type="checkbox"
                        id="All-Posts"
                        className="form-check-input"
                        value="All"
                        onChange={handleChange}
                        checked={sort?.All ? true : false}
                      />
                      <label
                        title=""
                        htmlFor="All-Posts"
                        className="form-check-label"
                      >
                        All Request
                      </label>
                    </div>
                    <div className="btn-checkbox form-check">
                      <input
                        name="filter"
                        type="checkbox"
                        id="Announcements"
                        className="form-check-input"
                        value="Higest"
                        onChange={handleChange}
                        checked={sort?.Higest ? true : false}
                      />
                      <label
                        title=""
                        htmlFor="Announcements"
                        className="form-check-label"
                      >
                        Higest Votes
                      </label>
                    </div>
                    <div className="btn-checkbox form-check">
                      <input
                        name="filter"
                        type="checkbox"
                        id="Pitchdays"
                        className="form-check-input"
                        value="Recent"
                        onChange={handleChange}
                        checked={sort?.Recent ? true : false}
                      />
                      <label
                        title=""
                        htmlFor="Pitchdays"
                        className="form-check-label"
                      >
                        Recent Request
                      </label>
                    </div>
                    <div className="btn-checkbox form-check">
                      <input
                        name="filter"
                        type="checkbox"
                        id="General Events"
                        className="form-check-input"
                        value="NearBy"
                        onChange={handleChange}
                        checked={sort?.NearBy ? true : false}
                      />
                      <label
                        title=""
                        htmlFor="General Events"
                        className="form-check-label"
                      >
                        Near By Me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* start listing */}
              <div className="row">
                {globalError?.length > 0 && (
                  <MyAlert message={globalError} alertType="danger" />
                )}
                {posts?.map((post: any) => (
                  <Post post={post} key={post._id} />
                ))}

                {nextPage && (
                  <div className="col-sm-12 text-center ">
                    <MyButton
                      text="Load More"
                      afterText="Load More"
                      extraClass="btn btn-primary "
                      extraStyle={{ width: "180px" }}
                      onClick={(e: any) => handleRequest()}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm">
              <RecentDonars />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
