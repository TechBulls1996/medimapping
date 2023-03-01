import Post from "../../components/user/post";
import RecentDonars from "../../components/user/recentDonars";
import Sidebar from "../../components/user/sidebar";

const Community = () => {
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
                <h3 className="title-md">Hi, Surya</h3>
                <button type="button" className="btn btn-outline-primary mt-2">
                  + Add New Request
                </button>
              </header>
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
                        value="Funding Deal Announcement"
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
                        value="Pitch Day"
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
                        value="General Event"
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
                <Post />
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
