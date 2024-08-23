import React, { useState } from "react";
import InputField from "./InputField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "./TextField";
import Checkmark from './CheckboxLabel';

const FillForm = () => {
  const [formValues, setFormValues] = useState({
    nameWithSpaces: "",
    nameWithoutSpaces: "",
    email: "",
    phone: "",
    message: "", // Add message to form values
  });
  const [errors, setErrors] = useState({
    nameWithSpaces: "",
    nameWithoutSpaces: "",
    email: "",
    phone: "",
    message: "", // Add message to errors
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [promotionsAccepted, setPromotionsAccepted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: name === "nameWithoutSpaces"
        ? value.replace(/[^a-zA-Z\s]/g, "").trim()
        : name === "email"
        ? value.replace(/\s+/g, "")
        : name === "phone"
        ? value.replace(/[^0-9]/g, "")
        : value
    }));
  };

  

  const handleTermsChange = (checked) => {
    setTermsAccepted(checked);
  };

  const handlePromotionsChange = (checked) => {
    setPromotionsAccepted(checked);
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      nameWithSpaces: "",
      nameWithoutSpaces: "",
      email: "",
      phone: "",
      message: "",
      terms: "",
      promotions: "",
    };

    if (!formValues.nameWithSpaces) {
      newErrors.nameWithSpaces = "Name with spaces is required";
      valid = false;
    }

    if (
      !formValues.nameWithoutSpaces ||
      /[^a-zA-Z\s]/.test(formValues.nameWithoutSpaces)
    ) {
      newErrors.nameWithoutSpaces =
        "Name without spaces must be alphabetic characters only";
      valid = false;
    }

    const cleanedEmail = formValues.email.replace(/\s+/g, "");
    if (!cleanedEmail || !/\S+@\S+\.\S+/.test(cleanedEmail)) {
      newErrors.email = "A valid email is required";
      valid = false;
    }

    if (!formValues.phone || !/^[0-9]{10}$/.test(formValues.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      valid = false;
    }

    if (!formValues.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
      valid = false;
    }

    if (!promotionsAccepted) {
      newErrors.promotions = "You must accept to receive promotional communications";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      toast.success("Form submitted successfully!");
      console.log("Form Values:", formValues);
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 m-4 bg-white border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Custom Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium uppercase text-gray-700">
            Name (with spacing) <sup className="text-red-500">*</sup>
          </label>
          <InputField
            spellCheck={false} // Disable spell checking
            id="nameWithSpaces"
            name="nameWithSpaces"
            type="text"
            value={formValues.nameWithSpaces}
            onChange={handleChange}
            error={errors.nameWithSpaces}
            placeholder="Enter your name with spaces"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium uppercase text-gray-700">
            Name (without spacing) <sup className="text-red-500">*</sup>
          </label>
          <InputField
            spellCheck={false} // Disable spell checking
            id="nameWithoutSpaces"
            name="nameWithoutSpaces"
            type="text"
            value={formValues.nameWithoutSpaces}
            onChange={handleChange}
            error={errors.nameWithoutSpaces}
            placeholder="Enter your name without spaces"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium uppercase text-gray-700">
            Email <sup className="text-red-500">*</sup>
          </label>
          <InputField
            spellCheck={false} // Disable spell checking
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium uppercase text-gray-700">
            Phone <sup className="text-red-500">*</sup>
          </label>
          <InputField
            spellCheck={false} // Disable spell checking
            id="phone"
            name="phone"
            type="text"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="Enter your phone number"
            maxLength={10}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium uppercase text-gray-700">
            Message <sup className="text-red-500">*</sup>
          </label>
          <TextField
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Enter your message"
            spellCheck={false} // Disable spell checking for text area
            maxLength={500} // Example maxLength, adjust as needed
          />
        </div>
        <div className="mb-4">
          <div className="form-group">
            <Checkmark
              label="I accept Terms & Conditions and Privacy Policy of Mondelez (Cadbury)"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
          </div>
          <div className="form-group">
            <Checkmark
              label="I would like to receive promotional communication from Mondelez (Cadbury) about its products and offers."
              checked={promotionsAccepted}
              onChange={handlePromotionsChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FillForm;
