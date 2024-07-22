import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const FillForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
      });
    
      const [formErrors, setFormErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data before submitting
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
          // Form is valid, send email using emailjs
          sendEmail(formData);
        } else {
          // Form is invalid, set errors to show to the user
          setFormErrors(errors);
        }
      };
    
      const validateForm = (data) => {
        let errors = {};
    
        // Name validation
        if (!data.from_name.trim()) {
          errors.from_name = 'Name is required';
        }
    
        // Email validation
        if (!data.from_email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.from_email)) {
          errors.from_email = 'Email is invalid';
        }
    
        // Message validation
        if (!data.message.trim()) {
          errors.message = 'Message is required';
        }
    
        return errors;
      };
    
      const sendEmail = (formData) => {
        const serviceId = 'service_60pxdoy';
        const templateId = 'template_i5spdsn';
        const userId = 'a1u_zKxDNiJ_YgFY0';
      
        // Make sure keys match placeholders in your EmailJS template
        const emailParams = {
          subject: 'Contact Form Submission', // Example subject
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message
        };
      
        emailjs.send(serviceId, templateId, emailParams, userId)
          .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
            setFormData({
                from_name: '',
                from_email: '',
              message: ''
            });
            setFormErrors({});
            toast.success('Message sent successfully!', {
              position: 'top-center'
            });
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            toast.error('Failed to send message. Please try again later.', {
              position: 'top-center'
            });
          });
      };
    
    

  return(
    <>
     <h2>Contact Us</h2>
     <ToastContainer />
     <form onSubmit={handleSubmit}>
        <div>
          <label className="font-bold text-[14px]">Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error text-red-500 text-[12px]">{formErrors.name}</span>}
        </div>
        <div>
          <label className="font-bold text-[14px]">Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error text-red-500 text-[12px]">{formErrors.email}</span>}
        </div>
        <div>
          <label className="font-bold text-[14px]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <span className="error text-red-500 text-[12px]">{formErrors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
};

export default FillForm;
