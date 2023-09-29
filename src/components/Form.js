import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import TranslateIcon from '@mui/icons-material/Translate';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import '../form.css'


const Form = () => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server or display it
    console.log(formData);
  };

  const handleAddressSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setFormData({
        ...formData,
        address: address,
        lat: latLng.lat,
        lng: latLng.lng,
      });
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <div className="patients-info">
            <h1>Referral Patients</h1>
            <h2>You can add up to five patients a a time</h2>
        </div>
     <div className="form-column">
     <div className="patient-number">
            <h1>1</h1>
            <h2>New Referral</h2>
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
                type="number"
                placeholder="Date of birth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                fullWidth
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
            fullWidth
            required
            className="input-field"
        />
        </div>
      </div>

      <div className="form-field">
      <div className="input-container">
      <PhoneIcon className="icon" />
        <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
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

        <div className="adress-notes">

        <div className="form-field">
      <div className="input-container">
        <HomeIcon className="icon" />
        <PlacesAutocomplete
            value={formData.address}
            onChange={(address) => setFormData({ ...formData, address })}
            onSelect={handleAddressSelect}
            googleCallbackName="initMap" // Add this line
            googleMapsApiKey='AIzaSyCvS-q861rtmBtpbmYfW7pAK-slA3aYkak' // Use your API key here
            >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                <input
                    {...getInputProps({
                    placeholder: 'Address',
                    className: 'input-field',
                    required: true,
                    })}
                />
                <div>
                    {suggestions.map((suggestion, index) => (
                    <div
                        key={index}
                        {...getSuggestionItemProps(suggestion,)}
                        className="suggestion-item"
                    >
                        {suggestion.description}
                    </div>
                    ))}
                </div>
                </div>
            )}
            </PlacesAutocomplete>
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
            fullWidth
            className="input-field"
        />
        </div>
      </div>
     
      </div>
        
     
      </div>
      <div className="new-patient">
        <h4>+ ADD ANOTHER PATIENT</h4>
      </div>
      <div className="submit-button" onClick={handleSubmit}>
        SEND REFERRALS
      </div>
    </form>
  
  );
};

  
  export default Form;


// import React, { useState, useRef } from 'react';
// import config from '../config';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     contactLanguage: '',
//     phone: '',
//     email: '',
//     address: '',
//     notes: '',
//   });

//   const placesAutocompleteRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission, e.g., send data to server or display it
//     console.log(formData);
//   };

//   const handleAddressSelect = async (address) => {
//     try {
//       const results = await geocodeByAddress(address);
//       const latLng = await getLatLng(results[0]);
//       setFormData({
//         ...formData,
//         address: address,
//         lat: latLng.lat,
//         lng: latLng.lng,
//       });
//     } catch (error) {
//       console.error('Error selecting address:', error);
//     }
//   };

//   const handleSelectFocus = () => {
//     // Manually trigger the suggestions when the select element is focused
//     if (placesAutocompleteRef.current) {
//       placesAutocompleteRef.current.search(formData.address);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="firstName"
//         placeholder="First Name"
//         value={formData.firstName}
//         onChange={handleInputChange}
//         required
//       />
//       <input
//         name="lastName"
//         placeholder="Last Name"
//         value={formData.lastName}
//         onChange={handleInputChange}
//         required
//       />
//       <input
//         name="dateOfBirth"
//         placeholder="Date of Birth"
//         type="date"
//         value={formData.dateOfBirth}
//         onChange={handleInputChange}
//         required
//       />
//       <input
//         name="contactLanguage"
//         placeholder="Contact Language"
//         value={formData.contactLanguage}
//         onChange={handleInputChange}
//         required
//       />
//       <input
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleInputChange}
//         required
//       />
//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         required
//       />
//       <PlacesAutocomplete
//         value={formData.address}
//         onChange={(address) => setFormData({ ...formData, address })}
//         onSelect={handleAddressSelect}
//         googleCallbackName="initMap" // Add this line
//         googleMapsApiKey={config.googleMapsApiKey} // Use the API key from config.js
//         ref={placesAutocompleteRef}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps }) => (
//           <div>
//             <select
//               {...getInputProps({
//                 placeholder: 'Address',
//                 className: 'address-input',
//                 required: true,
//                 onFocus: handleSelectFocus, // Call this function when focused
//               })}
//             >
//               <option value="" disabled hidden>
//                 Select an address
//               </option>
//               {suggestions.map((suggestion, index) => (
//                 <option
//                   key={index}
//                   value={suggestion.description}
//                   className="suggestion-item"
//                 >
//                   {suggestion.description}
//                 </option>
//               ))}
//             </select>
//             <div>
//               {suggestions.map((suggestion, index) => {
//                 const style = {
//                   backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
//                 };
//                 return (
//                   <div
//                     key={index}
//                     {...getSuggestionItemProps(suggestion, { style })}
//                     className="suggestion-item"
//                   >
//                     {suggestion.description}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//       <textarea
//         name="notes"
//         placeholder="Notes/Reason"
//         rows={4}
//         value={formData.notes}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;




