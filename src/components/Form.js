import React, { useState } from 'react';
import PatientForm from './PatientForm';
import '../form.css';

const Form = () => {
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
  
  const [patientNumber, setPatientNumber] = useState(1);
  const [patientName, setPatientName] = useState('New Referral');
  const [openForms, setOpenForms] = useState([]);
  const [notification, setNotification] = useState(''); // State for notification message

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the number of patients is already 4
    if (patients.length >= 4) {
      setNotification('You cannot add more than 5 patients.');
      return;
    }

    // Add patient to the list
    const updatedPatients = [...patients, { ...formData }];
    setPatients(updatedPatients);

    // Clear form data and reset notification
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
    setPatientNumber(patientNumber + 1); // Only increment if patient is successfully added
    setPatientName('New Referral');
    setNotification(''); // Clear any previous notification
  };

  const toggleForm = (index) => {
    const updatedOpenForms = [...openForms];
    updatedOpenForms[index] = !updatedOpenForms[index];
    setOpenForms(updatedOpenForms);
  };

  const handleDeletePatient = (index) => {
    const updatedPatients = [...patients];
    updatedPatients.splice(index, 1); 
    setOpenForms((prevOpenForms) => prevOpenForms.filter((_, i) => i !== index));
    setPatients(updatedPatients);
    setPatientNumber(patientNumber - 1); // Decrease patient number when one is deleted
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
            >
              <PatientForm
                formData={patient}
                patientNumber={index + 1}
                patientName={`${patient.firstName} ${patient.lastName}`}
                handleInputChange={(event) => handleInputChange(event, index)}
                onDelete={() => handleDeletePatient(index)}
                onToggle={() => toggleForm(index)}
              />
            </div>
          ))}
        </div>

        

        {/* Only render the form if there are less than 5 patients */}
        {patients.length < 5 && (
          <form onSubmit={handleSubmit} className="initial-form">
            <PatientForm
              formData={formData}
              handleInputChange={handleInputChange}
              patientNumber={patientNumber}
              patientName={patientName}
            />
            <div className="new-patient" onClick={handleSubmit}>
              {/* Notification message */}
              {notification && <div className="notification">{notification}</div>}
              <h4>+ ADD PATIENT</h4>
            </div>
          </form>
        )}

        {/* The submit button should always be visible */}
        <div className="submit-button">SEND REFERRALS</div>
      </div>
    </div>
  );
};

export default Form;

  
  