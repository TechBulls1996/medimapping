import RecentDonars from "../../components/user/RecentDonars";
import Sidebar from "../../components/user/Sidebar";
import Img from "../../assets/images/donate-hands.png";
const CommingSoon = () => {
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
                <h3 className="title-md">Comming Soon</h3>
              </header>
              <div className="detailcheck-sec">
                <div className="row">
                  <div className="col-sm-12 pb-5">
                    <label className="form-label">This feature will be added soon for everyone</label>
                  </div>
                  
                  
                </div>
              </div>
              {/* start listing */}
              <div className="row">
                 <img src={Img} />
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

export default CommingSoon;
