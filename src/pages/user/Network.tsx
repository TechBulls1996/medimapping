import SearchBar from "../../components/common/Search";
import UserCards from "../../components/user/UserCards";
import RecentDonars from "../../components/user/RecentDonars";
import Sidebar from "../../components/user/Sidebar";

const Network = () => {
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
                <h3 className="title-md">My Network</h3>
              </header>
              <div className="detailcheck-sec">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="form-label">Showing:</label>
                  </div>
                  <div className="col-md-8 mb-4 d-flex">
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
                        All Members
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
                        Recently Added
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <SearchBar placeholder="Search Networks..." />
                  </div>
                </div>
              </div>
              {/* start listing */}
              <div className="row">
                <UserCards className="col-6" style={{ width: "49%" }} />
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

export default Network;
