import React, { useState, ChangeEvent, useEffect } from 'react';

interface Appointment {
  date: string;
  hospital: string;
  location: string;
  doctor: string;
  phone: string;
}

interface AddAppointmentProps {
    appointments: any;
    setAppointments: any;
    setNextAppointment: any;
    hospital: string;
    hospitalAddress: string;
    phone: string;
    doctor: string;
}

const AddAppointment: React.FC<AddAppointmentProps> = (props) => {
  const {appointments, setAppointments, hospital, hospitalAddress, doctor, phone, setNextAppointment } = props;
  const [appointmentData, setAppointmentData] = useState<Appointment>({
    date: '',
    hospital,
    location: hospitalAddress,
    doctor,
    phone,
  });
 const [error, setError] = useState(false);

 useEffect(()=>{
    setAppointmentData({
    date: '',
    hospital,
    location: hospitalAddress,
    doctor,
    phone,
    })
 },[props])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };
   
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setNextAppointment(e.target.value);
  };
  

  const handleAddAppointment = () => {
    const {date, hospital, location, doctor, phone} = appointmentData;
    if(date.length < 1 || hospital.length < 1 || location.length < 1 || doctor.length < 1 || phone.length < 1){
      setError(true);  
      return false;
    }
    setAppointments([...appointments, appointmentData]);
    setAppointmentData({
      date: '',
      hospital: '',
      location: '',
      doctor: '',
      phone: '',
    });
  };

  
  const handleRemoveAppointment = (index: number) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <>
    <div className='card shadow-xs border p-3 p-md-4 mb-4'>
      <div className="mb-3">Add New Appointment</div>
      <div className="row">
        <div className="form-group col-md-3">
          <input
            className={`form-control ${error?'border-primary':''}`}
            id="date"
            name="date"
            type="date"
            value={appointmentData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-3">
          <input
            className={`form-control ${error?'border-primary':''}`}
            id="hospital"
            name="hospital"
            placeholder="Hospital Name"
            value={appointmentData.hospital}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            className={`form-control ${error?'border-primary':''}`}
            id="location"
            name="location"
            placeholder="Hospital/Clinic Address"
            value={appointmentData.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-3">
          <input
            className={`form-control ${error?'border-primary':''}`}
            id="doctor"
            name="doctor"
            placeholder="Doctor Name"
            value={appointmentData.doctor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-3">
          <input
            type="number"
            className={`form-control ${error?'border-primary':''}`}
            id="phone"
            name="phone"
            placeholder="Doctor's Phone No."
            value={appointmentData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-1">
          <button className="btn btn-info py-2"  type="button" onClick={handleAddAppointment}>
            Add
          </button>
        </div>
        <div className="form-group col-md-12 table-responsive">
        <table className="table table-hover" style={{ marginTop: '20px' }}>
          <thead>  
          <tr>
            
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>#</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>Date</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>Hospital</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>Location</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>Doctor</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'>Phone</th>  
            <th className='text-secondary text-xs font-weight-bold border-light ps-2'></th>  
          </tr>   
          </thead>
          <tbody>
          {appointments.map((appointment: any, index: number) => (
            <tr key={index}>
                <td className='text-sm text-body align-middle pt-3'>
                   <input type='radio' name="nextAppointment" value={appointment.date} onChange={handleRadio}/> 
                </td>
                <td className='text-sm text-body align-middle pt-3 w-20'>{appointment.date}</td>
                <td className='text-sm text-body align-middle pt-3 w-20'>{appointment.hospital}</td>
                <td className='text-sm text-body align-middle pt-3 w-20'>{appointment.location}</td>
                <td className='text-sm text-body align-middle pt-3 w-20'>{appointment.doctor}</td>
                <td className='text-sm text-body align-middle pt-3 w-20'>{appointment.phone}</td>
                <td className='text-sm text-body align-middle pt-3 w-20'>
                <button type="button" className="btn btn-info py-2"  onClick={() => handleRemoveAppointment(index)}>
                    Remove
                </button>
                </td> 
            </tr>
          ))}
          </tbody>
        </table>
        <p className="text-sm mt-4">***Select Radio for next your appointment***</p>
       </div> 
      </div>
      </div>  
    </>
  );
};

export default AddAppointment;
