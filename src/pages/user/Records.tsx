import RecentDonars from "../../components/user/RecentDonars";
import Sidebar from "../../components/user/Sidebar";
import { MedicalRecordCard } from "../../components/user/UserCards";
import SearchBar from "../../components/common/Search";
import { useEffect, useState } from "react";
import RecordModal from "../../components/user/RecordModal";
import { GetRecords } from "../../services/RecordsServices";
import { getErrorMsg } from "../../helpers";
import { MyButton } from "../../components/common/MyButton";


const Records = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [records, setRecords]: any = useState([]);
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

    return GetRecords({ page, pageSize, sort: sortFiltered }).then((res) => {
      if (res?.status) {
        if (page === 1) {
          setRecords(res.data);
        } else {
          let newRecord = [...records, ...res.data];
          setRecords(newRecord);
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
      Recent: false,
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
                        onChange={handleChange}
                        checked={sort?.All ? true : false}
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
                        id="Recent"
                        className="form-check-input"
                        value="Recent"
                        onChange={handleChange}
                        checked={sort?.Recent ? true : false}
                      />
                      <label
                        title=""
                        htmlFor="Recent"
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
                {records?.map((record: any) => (
                    <MedicalRecordCard record={record} key={record._id}/>
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

export default Records;
