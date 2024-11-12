import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { stateCityData } from '../constants/statecityData';

const CascadingDropdownComp = () => {
  return (
    <>
      <CascadingDropdown/>
    </>
  );
}

export default CascadingDropdownComp;

const CascadingDropdown = () => {
    // State to hold the selected state and city
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    // Handle state change (reset city on state change)
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
      setSelectedCity(''); // Reset city when state changes
    };
  
    // Get the cities for the selected state
    const availableCities = selectedState ? stateCityData[selectedState].cities : [];
  
    return (
      <div>
        <h1>Cascading Dropdown: State and City</h1>
  
        {/* State Dropdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <select onChange={handleStateChange} value={selectedState}>
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="UttarPradesh">Uttar Pradesh</option>
          </select>
        </motion.div>
  
        {/* City Dropdown (Only visible if a state is selected) */}
        {selectedState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
              <option value="">Select City</option>
              {availableCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </motion.div>
        )}
      </div>
    );
  };
  

// const CascadingDropdown = () => {
//     // Define the options for each dropdown
//     const options = {
//       country: ['USA', 'Canada'],
//       usaStates: ['California', 'New York', 'Texas'],
//       canadaProvinces: ['Ontario', 'Quebec', 'British Columbia'],
//       californiaCities: ['Los Angeles', 'San Francisco', 'San Diego'],
//       newYorkCities: ['New York City', 'Buffalo', 'Albany'],
//       texasCities: ['Houston', 'Austin', 'Dallas'],
//       ontarioCities: ['Toronto', 'Ottawa', 'Hamilton'],
//       quebecCities: ['Montreal', 'Quebec City', 'Gatineau'],
//       britishColumbiaCities: ['Vancouver', 'Victoria', 'Surrey'],
//     };
  
//     // Define state to hold the selected values for each dropdown
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [selectedState, setSelectedState] = useState('');
//     const [selectedCity, setSelectedCity] = useState('');
  
//     // Logic to handle cascading dropdowns based on previous selection
//     const handleCountryChange = (e) => {
//       setSelectedCountry(e.target.value);
//       setSelectedState('');  // Reset state and city when country changes
//       setSelectedCity('');
//     };
  
//     const handleStateChange = (e) => {
//       setSelectedState(e.target.value);
//       setSelectedCity('');  // Reset city when state changes
//     };
  
//     // Get the available states or provinces based on the selected country
//     const availableStates = selectedCountry === 'USA' ? options.usaStates : selectedCountry === 'Canada' ? options.canadaProvinces
//         : [];
  
//     // Get the available cities based on the selected state or province
//     const availableCities =
//       selectedState === 'California' ? options.californiaCities : selectedState === 'New York'
//         ? options.newYorkCities
//         : selectedState === 'Texas'
//         ? options.texasCities
//         : selectedState === 'Ontario'
//         ? options.ontarioCities
//         : selectedState === 'Quebec'
//         ? options.quebecCities
//         : selectedState === 'British Columbia'
//         ? options.britishColumbiaCities
//         : [];
  
//     return (
//       <div>
//         <h1>Cascading Dropdown with Animation</h1>
  
//         {/* Country Dropdown */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <select onChange={handleCountryChange} value={selectedCountry}>
//             <option value="">Select Country</option>
//             {Object.keys(options).includes('country') &&
//               options.country.map((country, index) => (
//                 <option key={index} value={country}>
//                   {country}
//                 </option>
//               ))}
//           </select>
//         </motion.div>
  
//         {/* State/Province Dropdown */}
//         {selectedCountry && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <select onChange={handleStateChange} value={selectedState}>
//               <option value="">Select State/Province</option>
//               {availableStates.map((state, index) => (
//                 <option key={index} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//           </motion.div>
//         )}
  
//         {/* City Dropdown */}
//         {selectedState && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
//               <option value="">Select City</option>
//               {availableCities.map((city, index) => (
//                 <option key={index} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </motion.div>
//         )}
//       </div>
//     );
//   };
