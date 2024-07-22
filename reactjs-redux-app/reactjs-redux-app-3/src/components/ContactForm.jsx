import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., dispatch an action to send email)
    // For simplicity, just show a success toast
    toast.success('Message sent successfully!', {
      position: 'top-center'
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
          <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleInputChange} />
      </div>
      <button type="submit">Send Message</button>
    </form>
    </>
  )
}

export default ContactForm