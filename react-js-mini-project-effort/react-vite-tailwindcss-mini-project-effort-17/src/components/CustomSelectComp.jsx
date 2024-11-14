import React, { useState } from 'react';
import styled from 'styled-components';
import { countries } from './../constants/countryData';

const CustomSelectComp = () => {
  return (
    <>
      <h1>Custom Select with Country, State, City, Name, and Mobile Number</h1>
      <CustomSelectWithPhone />
    </>
  );
}

export default CustomSelectComp;

const CustomSelectWithPhone = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [countryCode, setCountryCode] = useState('');
  
    const handleCountryChange = (e) => {
      const country = e.target.value;
      setSelectedCountry(country);
      const countryData = countries.find((item) => item.name === country);
      setCountryCode(countryData ? countryData.code : '');
    };
  
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
    };
  
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleMobileChange = (e) => {
      setMobile(e.target.value);
    };
  
    // Get selected country's states
    const countryData = countries.find((country) => country.name === selectedCountry);
    const states = countryData ? countryData.states : [];
    const cities = selectedState ? ['City1', 'City2', 'City3'] : []; // Placeholder cities
    
    return (
      <Container>
        <CustomSelectOption
          label="Country"
          data={countries.map((item) => item.name)}
          onChange={handleCountryChange}
          value={selectedCountry}
        />
        {selectedCountry && (
          <CustomSelectOption
            label="State"
            data={states}
            onChange={handleStateChange}
            value={selectedState}
          />
        )}
        {selectedState && (
          <CustomSelectOption
            label="City"
            data={cities}
            onChange={handleCityChange}
            value={selectedCity}
          />
        )}
        <SelectWrapper>
          <Label>Name</Label>
          <Input type="text" onChange={handleNameChange} value={name} />
        </SelectWrapper>
        <PhoneWrapper>
          <CountryCode value={countryCode}>
            {countries
              .map((country) => country.code)
              .map((code, index) => (
                <option key={index} value={code}>
                  {code}
                </option>
              ))}
          </CountryCode>
          <PhoneInput
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={handleMobileChange}
          />
        </PhoneWrapper>
      </Container>
    );
  };

const CustomSelectOption = ({ data, label, onChange, value }) => {
    return (
      <SelectWrapper>
        <Label>{label}</Label>
        <CustomSelect onChange={onChange} value={value}>
          <option value="">Select {label}</option>
          {data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </CustomSelect>
      </SelectWrapper>
    );
  };
  

// styled components for UI 
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SelectWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const CustomSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CountryCode = styled.select`
  width: 30%; /* Country code takes 30% of the width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-right: 10px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const PhoneInput = styled.input`
  width: 70%; /* Mobile number input takes 70% of the width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
`;


