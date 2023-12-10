import { useEffect, useState } from "react";
import Sidebar from "../../components/user/Sidebar";
import { displayDateAndTime, getErrorMsg } from "../../helpers";
import { GetHistoryData } from "../../services/RequestServices";
import MyAlert from "../../components/common/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const History = () => {
  const [history, setHistory] = useState([]);
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [errors, setErrors]: any = useState([]);

  // will be used for auth users add if condition for GetPublicDonars and GetDonars
  const getHistory = GetHistoryData;

  useEffect(() => {
    getHistory({
      page,
      pageSize,
    }).then((res) => {
      if (res?.status) {
        setHistory(res.data);
        return true;
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  }, [getHistory, page, pageSize]);

  const globalError = getErrorMsg(errors, "global");
  
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
              {globalError?.length > 0 && (
                <MyAlert message={globalError} alertType="danger" />
               )}
          
              <div className="row">
                <HistoryCard data={history}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const HistoryCard = (props: { data: any; }) => {
  const userData = useSelector((state: any) => state.auth.user);
  const { data = [] } = props;
  return (
    <>
      <div className="col-sm-12 mb-5 vital-row">
        <div id="tracking">
          <div className="text-center tracking-status-intransit">
            <p className="tracking-status text-tight">My History</p>
          </div>
          <div className="tracking-list">
            
            { data?.map((data: any) => {
                let type = "Requested";
                if(data.userId!==userData.id){
                  type="Donated";
                }
                return (<div className={`tracking-item ${type==='Donated'?'status-donate':''}`}>
                  <div className={`tracking-icon status-intransit ${type==='Donated'?'status-donate':''}`}>
                    <FontAwesomeIcon icon={faTint} className="fa-2x" />
                  </div>
                  <div className="tracking-date">{ displayDateAndTime(data.createdAt) }</div>
                  <div className="tracking-content text-capitalize">
                    You had {type} blood.
                    <span className="text-capitalize">
                      { `${data.hospital}, ${data.hospitalAddress}` }
                      <br /> {data.city.label}, {data.state.label} 
                    </span>
                  </div>
                </div>)
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
