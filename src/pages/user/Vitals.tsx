import Sidebar from "../../components/user/Sidebar";
import { VitalCards } from "../../components/user/UserCards";

const Vitals = () => {
  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 p-0">
              <Sidebar />
            </div>
            <div className="col-sm-9 pt-3">
              <header className=" d-flex align-items-center pb-2">
                <h3 className="title-md">My Body Vital Records</h3>
              </header>

              {/* start listing */}
              <div className="row">
                <VitalCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vitals;
