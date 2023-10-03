import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import TranslateIcon from '@mui/icons-material/Translate';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import '../form.css'

const PatientForm = ({ formData, handleInputChange, patientNumber, patientName }) => {
    return (
        <div className="form-column">
        <div className="patient-number">
               <h1>{patientNumber}</h1>
               <h2>{patientName}</h2>
           </div>
        <div className="form-field">
             <div className="input-container">
               <AccountCircleIcon className="icon" />
               <input
                   type="text"
                   name="firstName"
                   placeholder="First Name"
                   value={formData.firstName}
                   onChange={handleInputChange}
                   required
                   className="input-field"
                   />
   
             </div>
           </div>
   
           <div className="form-field">
             <div className="input-container">
               <AccountCircleIcon className="icon" />
               <input
                 type="text"
                 name="lastName"
                 placeholder="Last Name"
                 value={formData.lastName}
                 onChange={handleInputChange}
                 required
                 className="input-field"
               />
             </div>
           </div>
   
           <div className="form-field">
           <div className="input-container">
           <CakeIcon className="icon" />
               <input
                   name="dateOfBirth"
                   type="text"
                   placeholder="Date of birth"
                   value={formData.dateOfBirth}
                   onChange={handleInputChange}
                   required
                   className="input-field"
               />
               </div>
           </div>
   
         <div className="form-field">
         <div className="input-container">
         <TranslateIcon className="icon" />
           <input
               type="text"
               name="contactLanguage"
               placeholder="Contact language"
               value={formData.contactLanguage}
               onChange={handleInputChange}
               required
               className="input-field"
           />
           </div>
         </div>
   
         <div className="form-field">
         <div className="input-container">
         <PhoneIcon className="icon" />
           <input
               type="text"
               name="phone"
               placeholder="Phone"
               value={formData.phone}
               onChange={handleInputChange}
               required
               className="input-field"
           />
           </div>
         </div>
   
         <div className="form-field">
             <div className="input-container">
               <EmailIcon className="icon" />
               <input
                 type="email"
                 name="email"
                 placeholder="Email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 className="input-field"
               />
             </div>
           </div>
   
           <div>
   </div>
           <div className="adress-notes">
    
           <div className="form-field">
        <div className="input-container">
          <HomeIcon className="icon" />
          <input
            type="text"
            name="address" // Name should be "address" to match formData
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>
      </div>
   
           <div className="form-field">
           <div className="input-container">
               <TextSnippetIcon className="icon" />
           <input
               type="text"
               name="notes"
               placeholder="Notes/Reason"
               multiline
               rows={10}
               value={formData.notes}
               onChange={handleInputChange}
               className="input-field"
           />
           </div>
         </div>
        
         </div>
           
        
         </div>
    )
}

export default PatientForm;