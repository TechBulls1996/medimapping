import Sidebar from "../../components/user/sidebar";
import { HistoryCard } from "../../components/user/userCards";

const History = () => {
  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 p-0">
              <Sidebar />
            </div>
            <div className="col-sm-9 pt-3">
              {/* start listing */}
              <div className="row">
                <HistoryCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
