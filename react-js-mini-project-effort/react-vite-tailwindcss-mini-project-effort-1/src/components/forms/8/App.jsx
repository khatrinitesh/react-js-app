import React, { useState } from "react";

const CustomApp = () => {
  // state to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // state to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // state to manage form errors
  const [errors, setErrors] = useState({});

  // function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form data
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // if there are no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // perform the form submission logic (e.g. send data to the server)
      console.log("form submitted", formData);
      // set submission status to true
      setIsSubmitted(true);
    }
  };

  // Function to validate form data
  const validateForm = (data) => {
    let errors = {};

    // Validate username (simple example: non-empty)
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    // Validate email (simple example: basic email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email address";
    }

    // Validate password (simple example: minimum length)
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };
  return (
    <>
      <h2>Form Example</h2>
      {isSubmitted ? (
        <p className="text-green-600 font-bold">Form submitted successfully!</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <p className="error text-[red] font-bold">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="error text-[red] font-bold">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                maxLength={6}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="error text-[red] font-bold">{errors.password}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default CustomApp;
