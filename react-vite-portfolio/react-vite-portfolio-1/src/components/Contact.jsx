import React, { useState } from "react";

const Contact = () => {

   // Initialize state for form data and error messages
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({
        name: !formData.name ? "Please enter your name" : "",
        email: !formData.email ? "Please enter your email" : "",
        message: !formData.message ? "Please enter your message" : "",
      });
      return;
    }
    // Form submission logic goes here
    console.log("Form submitted:", formData);
    // Clear form data and errors
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    // Set formSubmitted to true to display success message
    setFormSubmitted(true);
    // Automatically hide success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValidName = /^[a-zA-Z]+$/.test(value);
    if (name === "name" && !isValidName) {
      setErrors({
        ...errors,
        [name]: "Name must contain only alphabetic characters",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: "",
        [email]:""
      });
    }
  };

  return (
    <div className="container py-16 md:py-20" id="contact">
      {/* Form title */}
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's a contact form
      </h2>
      {/* Form description */}
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
          condimentum turpis nisl sem, viverra habitasse urna ante lobortis
          fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
          accumsan.
        </p>
      </div>
      {/* Contact form */}
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border-gray-300 border px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name}</span>
          )}
          {/* Email input */}
          <input
            className="mt-6 w-full rounded border-gray-300 border px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email}</span>
          )}
        </div>
        {/* Message textarea */}
        <textarea
          className="mt-6 w-full rounded border-gray-300 border px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols={30}
          rows={10}
        />
        {errors.message && <span className="text-red-500">{errors.message}</span>}
        {/* Submit button */}
        <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl" />
        </button>
      </form>
      {/* Success message */}
      {formSubmitted && (
        <div className="absolute inset-x-0 bottom-0 mb-10 text-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg inline-block">
            Form submitted successfully!
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
