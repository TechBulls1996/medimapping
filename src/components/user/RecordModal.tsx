import { FormEvent, useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import MyAlert, { InputErrorMessage } from "../common/Alert";
import { getErrorMsg } from "../../helpers";
import { AddRecords } from "../../services/RecordsServices";

import { useSelector } from "react-redux";
import { illnessCategories } from "../../helpers/constant";
import AddAppointment from "./appointments/AddAppointment";

const RecordModal = ({ modalStatus, setModalStatus }: any) => {
  const authState = useSelector((state: any) => state.auth?.user || state.auth);
  const [show, setShow] = useState(false);

  const [illnessName, setIllnessName]: any = useState("");
  const [category, setCategory]: any = useState("");
  const [illnessStatus, setIllnessStatus]: any = useState("");
  const [priority, setPriority]: any = useState(false);
  const [hospital, setHospital]: any = useState("");
  const [hospitalAddress, setHospitalAddress]: any = useState("");
  const [phone, setPhone]: any = useState("");
  const [name, setName]: any = useState("");
  const [instructions, setInstructions]: any = useState("");
  const [medications, setMedication]: any = useState("");
  const [appointments, setAppointments] = useState([]);
  const [nextAppointment, setNextAppointment] = useState("");

  const [documents, setDocuments]: any = useState([]);
  const [errors, setErrors]: any = useState([]);
  const [successMsg, setSuccessMsg]: any = useState(false);

  const onRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg(false);

    AddRecords({
      illness: illnessName,
      categoryOfIllness: category,
      illnessStatus,
      priority,
      name,
      phone,
      hospital,
      doctor: name,
      hospitalAddress,
      instructions,
      medications,
      appointments,
      nextAppointment,
      documents,
     
    }).then((res) => {
      if (res?.status) {
        //success
        setSuccessMsg(
          "Your Record has been successfully created."
        );
        setTimeout(handleClose, 3000);
        return true;
      } else {
        setErrors(res?.errors);
        return false;
      }
    });
  };

  const handleClose = () => {
    setShow(false);
    setModalStatus(false);
  };

  useEffect(() => {
    setShow(modalStatus);
  }, [modalStatus]);

  const globalError = getErrorMsg(errors, "global");
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <h4 className="text-center text-uppercase mb-0">
            Add Your Record
          </h4>
        </Modal.Header>
        <Modal.Body>
          <form
            encType="multipart/form-data"
            className="contact-form"
            onSubmit={(e) => onRequest(e)}
          >
            <div className="row">
            <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control"
                  id="illnessName"
                  name="illnessName"
                  placeholder="Illness Name"
                  value={illnessName}
                  onChange={(e) => setIllnessName(e.target.value)}
                />
                <InputErrorMessage
                  message={getErrorMsg(errors, "illnessName")}
                  alertType="danger"
                />
              </div>
              <div className="form-group col-md">
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category Of illness</option>
                  {
                  illnessCategories.map((val) => {
                    return <option>{val}</option>
                  })
                  }
                </select>
                <InputErrorMessage
                  message={getErrorMsg(errors, "category")}
                  alertType="danger"
                />
              </div>
              <div className="form-group col-md">
                <select
                  className="form-control "
                  id="illnessStatus"
                  name="illnessStatus"
                  value={illnessStatus}
                  onChange={(e) => setIllnessStatus(e.target.value)}
                >
                  <option value="">illness Status</option>
                  <option>active</option>
                  <option>resolved</option>
                  <option value="acute">acute (short-time)</option>
                
                </select>
                <InputErrorMessage
                  message={getErrorMsg(errors, "illnessStatus")}
                  alertType="danger"
                />
              </div>
            
              <div
                className="form-group col-md"
                style={{ position: "relative" }}
              >
                <select
                  className="form-control "
                  id="priority"
                  value={priority}
                  onChange={(e: any) => {
                    setPriority(e.target?.value);
                  }}
                >
                  <option>Priority</option>
                  <option value="high">High</option>
                  <option value="moderate">Moderate</option>
                  <option value="low">Low</option>
                 
                </select>
                <InputErrorMessage
                  message={getErrorMsg(errors, "priority")}
                  alertType="danger"
                />

                {priority && (
                  <Badge
                    pill
                    bg={priority === "high" ? "danger" : "warning"}
                    className="mx-2"
                    style={{
                      marginTop: "-20px",
                      position: "absolute",
                      top: "10px",
                      right: "5px",
                    }}
                  >
                    {priority}
                  </Badge>
                )}
              </div>
            </div>
            <div className="mb-3">Hospital/Clinic Details</div>
            <div className="row">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="hospital_name"
                  name="hospital_name"
                  placeholder="Hospital Name"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                />
                <InputErrorMessage
                  message={getErrorMsg(errors, "hospital")}
                  alertType="danger"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="local_address"
                  name="local_address"
                  placeholder="Hospital Address"
                  value={hospitalAddress}
                  onChange={(e) => setHospitalAddress(e.target.value)}
                />
                <InputErrorMessage
                  message={getErrorMsg(errors, "hospitalAddress")}
                  alertType="danger"
                />
              </div>
              <div className="form-group col-md-4">
                <label className="sr-only" htmlFor="fname">
                  Doctor's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  placeholder="Doctor's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputErrorMessage
                  message={getErrorMsg(errors, "doctor")}
                  alertType="danger"
                />
              </div>
              <div className="form-group col-md-4">
                <label className="sr-only" htmlFor="Phone">
                  Doctor's Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Doctor's Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <InputErrorMessage
                  message={getErrorMsg(errors, "phone")}
                  alertType="danger"
                />
              </div>
      
            </div>
            <div className="mb-3">Doctor's Instructions</div>
            <div className="row">
              <div className="form-group col-md-12">
                <textarea
                  name="instructions"
                  id="instructions"
                  className="form-control"
                  placeholder="Mention your doctor's instructions for medications usage, adhere to the prescribed dosage, and report any side effects or concerns promptly.
                  "
                  rows={5}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
                <InputErrorMessage
                  message={getErrorMsg(errors, "instructions")}
                  alertType="danger"
                />
              </div>
         
            </div>

            <div className="mb-3">Disease Medication</div>
            <div className="row">
              <div className="form-group col-md-12">
                <textarea
                  name="medications"
                  id="medications"
                  className="form-control"
                  placeholder="The prescribed medications Like: Paracetamol for pain relief, Ibuprofen as an anti-inflammatory, Lisinopril for blood pressure control, Metformin for managing diabetes, Levothyroxine for thyroid regulation, Atorvastatin for cholesterol management, and Sertraline for mood stabilization etc."
                  rows={5}
                  value={medications}
                  onChange={(e) => setMedication(e.target.value)}
                ></textarea>
                <InputErrorMessage
                  message={getErrorMsg(errors, "medications")}
                  alertType="danger"
                />
              </div>
         
            </div>
            <AddAppointment 
              appointments={appointments} 
              setAppointments={setAppointments} 
              hospital={hospital} 
              hospitalAddress={hospitalAddress} 
              phone={phone} 
              doctor={name}
              setNextAppointment={setNextAppointment}
            />
            <InputErrorMessage
                  message={getErrorMsg(errors, "appointments")}
                  alertType="danger"
                />
            
            {globalError?.length > 0 && (
              <MyAlert message={globalError} alertType="danger" />
            )}
            {successMsg?.length > 0 && (
              <MyAlert message={successMsg} alertType="success" />
            )}
            <div className="form-row">
              <div className="form-group col-md-2 mt-4">
                <button
                  id="submit"
                  type="submit"
                  className="btn btn-block btn-primary py-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RecordModal;
