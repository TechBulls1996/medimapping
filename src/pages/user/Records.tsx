import RecentDonars from "../../components/user/RecentDonars";
import Sidebar from "../../components/user/Sidebar";
import { MedicalRecordCards } from "../../components/user/UserCards";
import SearchBar from "../../components/common/Search";
import { useState } from "react";
import RecordModal from "../../components/user/RecordModal";


const Records = () => {
  const [modalStatus, setModalStatus] = useState(false);
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
                <h3 className="title-md">My Medical Records</h3>
                <button
                  type="button"
                  className="btn btn-outline-primary mt-2"
                  onClick={(e) => setModalStatus(true)}
                >
                  + Add New Record
                </button>
              </header>
              <RecordModal
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
              />
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
                        All
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
                  <div className="col-md-4">
                    <SearchBar placeholder="Search Records..." />
                  </div>
                </div>
              </div>
              {/* start listing */}
              <div className="row">
                <MedicalRecordCards />
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

export default Records;
