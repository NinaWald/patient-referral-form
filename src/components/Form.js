import React, { useState } from 'react';
import PatientForm from './PatientForm';
import DeleteIcon from '@mui/icons-material/Delete';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import '../form.css';

const Form = () => {
  // Initialize the state using React hooks useState for patients and form data
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactLanguage: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  // Initialize patientNumber and patientName state
  const [patientNumber, setPatientNumber] = useState(1);
  const [patientName, setPatientName] = useState('New Referral');

   // Initialize state for open and closed forms
   const [openForms, setOpenForms] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    // the page doesn't reload after you submit the form 
    event.preventDefault();
    // Clone the current formData and add it to the patients list
    const updatedPatients = [...patients, { ...formData }];
    setPatients(updatedPatients);

    // Clear the form data
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      contactLanguage: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    });

    // Update patientNumber and patientName
    setPatientNumber(patientNumber + 1);
    setPatientName('New Referral');
  };

    // Toggle the open and closed state of a form
    const toggleForm = (index) => {
        const updatedOpenForms = [...openForms];
        updatedOpenForms[index] = !updatedOpenForms[index];
        setOpenForms(updatedOpenForms);
      };

  return (
    <div className="main">

      <div className="form-container">
        <div className="patients-info">
          <h1>Referral Patients</h1>
          <h2>You can add up to five patients at a time</h2>
        </div>
        {/* Display the saved forms */}
        <div className="saved-forms">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`saved-form ${openForms[index] ? 'open' : 'closed'}`}
            onClick={() => toggleForm(index)}
          >
            {openForms[index] ? (
              // Display open form with patient data
              <PatientForm
                formData={patient}
                patientNumber={index + 1}
                patientName={`${patient.firstName} ${patient.lastName}`}
              />
            ) : (
              // Display closed form with patient number and name
              <div className="patient-number">
                <h1>{index + 1}</h1>
                <h2>{`${patient.firstName} ${patient.lastName}`}</h2>
                <DeleteIcon className="icon-delete" />
              </div>
            )}
          </div>
        ))}
      </div>
        <form onSubmit={handleSubmit}>
          {/* Input fields */}
          <PatientForm
            formData={formData}
            handleInputChange={handleInputChange}
            patientNumber={patientNumber} // Pass patientNumber to the form
            patientName={patientName}     // Pass patientName to the form
          />
          <div className="new-patient" onClick={handleSubmit}>
            <h4>+ ADD ANOTHER PATIENT</h4>
          </div>
          <div className="submit-button">SEND REFERRALS</div>
        </form>
      </div>

    
    </div>
  );
};

export default Form;

