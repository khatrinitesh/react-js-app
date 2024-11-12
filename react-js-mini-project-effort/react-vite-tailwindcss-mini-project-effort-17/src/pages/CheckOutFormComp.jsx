import React, { useState } from 'react';

const CheckOutFormComp = () => {
  return (
    <>
      <CheckoutForm/>
    </>
  );
}

export default CheckOutFormComp;

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      paymentMethod: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
      address: '',
      paymentMethod: '',
    });
  
    const [submittedData, setSubmittedData] = useState(null);
  
    // Handle form input change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Basic form validation
    const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      if (!formData.name) {
        errors.name = 'Name is required';
        isValid = false;
      }
      if (!formData.email) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
        isValid = false;
      }
      if (!formData.address) {
        errors.address = 'Address is required';
        isValid = false;
      }
      if (!formData.paymentMethod) {
        errors.paymentMethod = 'Payment method is required';
        isValid = false;
      }
  
      setFormErrors(errors);
      return isValid;
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmittedData(formData);
        console.log(setFormData({
            name: '',
            email: '',
            address: '',
            paymentMethod: '',
        }))
        setFormData({
          name: '',
          email: '',
          address: '',
          paymentMethod: '',
        });
        setFormErrors({});
      }
    };
  
    return (
      <div className="checkout-container">
        <h1>Checkout Form</h1>
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
  
          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your shipping address"
            />
            {formErrors.address && <span className="error">{formErrors.address}</span>}
          </div>
  
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="">Select payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
            {formErrors.paymentMethod && <span className="error">{formErrors.paymentMethod}</span>}
          </div>
  
          <button type="submit" className="submit-btn">Submit</button>
        </form>
  
        {/* Display submitted data */}
        {submittedData && (
          <div className="submitted-data">
            <h2>Checkout Successful</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Payment Method:</strong> {submittedData.paymentMethod}</p>
          </div>
        )}
      </div>
    );
  };
