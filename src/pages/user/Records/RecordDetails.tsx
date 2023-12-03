import { useEffect, useState } from "react";

import { displayDate, getErrorMsg } from "../../../helpers";
import MyAlert from "../../../components/common/Alert";
import moment from "moment";
import Sidebar from "../../../components/user/Sidebar";
import { MedicalRecordCard } from "../../../components/user/UserCards";
import { useParams } from "react-router-dom";
import { GetRecord } from "../../../services/RecordsServices";

const RecordDetails = () => {
  const [record, setRecord]: any = useState();
  const [errors, setErrors]: any = useState([]);
  let { recordId } = useParams();
 
  useEffect(() => {
    GetRecord(recordId).then((res) => {
      if (res?.status) {
        setRecord(res.data);
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  }, []);

  const globalError = getErrorMsg(errors, "global");

  return (
    <>
      <section className="container container-fluid benefits-section pt-7 pb-7 px-0 ">
        <div className="container">
          <div className="row">
          <div className="col-sm-3 p-0">
              <Sidebar />
            </div>
            <div className="col-sm-9 pt-4 ">
              <header className=" d-flex align-items-center">
                <h3 className="title-md">Record Details</h3>
              </header>
            
              {/* start listing */}
              <div className="row">
                {globalError?.length > 0 && (
                  <MyAlert message={globalError} alertType="danger" />
                )}
                
                <div className="col-sm-12 p-3 mt-4">
                  {record &&
                  <MedicalRecordCard record={record} key={record._id} extra={true} /> }
                    
                  {record?.appointments?.map((app: any, key: any) => {
                         return  <div className="doctorslist column-card w-100">
                            <div className="fundingheader">
                                <div className="interested-sec text-center" style={{maxWidth:'150px'}}>
                                    <span className="doc-live">Appointments: {++key}</span>
                                </div>
                            </div>

                            <div className="totalinvs">
                                <div className="item pb-4">
                                <span className="head-sec">Date</span>
                                <span className="amount-sec text-capitalize">{displayDate(app.date)}</span>
                                </div>

                                <div className="item pb-4">
                                <span className="head-sec">Hospital</span>
                                <span className="amount-sec text-capitalize">{app?.hospital}</span>
                                </div>

                                <div className="item pb-4">
                                <span className="head-sec">Location</span>
                                <span className="amount-sec text-capitalize">{app?.location}</span>
                                </div>
                            
                                <div className="item pb-4">
                                <span className="head-sec">Doctor</span>
                                <span className="amount-sec text-capitalize">{app.doctor}</span>
                                </div>

                                <div className="item pb-4">
                                <span className="head-sec">Phone</span>
                                <span className="amount-sec text-capitalize">{app.phone}</span>
                                </div>
                            </div>
                            </div>   
                  })}  
                  


                </div>
              </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecordDetails;
