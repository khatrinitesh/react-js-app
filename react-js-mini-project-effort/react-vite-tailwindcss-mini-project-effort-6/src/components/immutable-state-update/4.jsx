import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

const Immutable = () => {
    const [form,setForm] = useState({
        first:'',
        last:'',
        email:''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target; 
        setForm((prevState) => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        // For now, just log the form data to the console
        console.log('Form submitted:', form);
        setIsSubmitted(true);

        if(!form.first || !form.last || !form.email){
            toast.error('please fill form in all fields.');
            return;
        }

          // Email validation logic
          if (form.email.includes('@')) {
            // Email contains '@', show success message
            toast.success('Data submitted successfully!');
        } else {
            // Email does not contain '@', show error message
            toast.error('Please enter a valid email address.');
        }

        // show success toast
        toast.success('Data submitted successfully')
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="first"></label>
            <input required className="border p-1" type="text" id="first" name='first' value={form.first} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="last"></label>
            <input required className="border p-1" type="text" id="last" name='last' value={form.last} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="email"></label>
            <input required className="border p-1" type="text" id="email" name='email' value={form.email} onChange={handleChange} />
        </div>
        <button type='submit'>submit</button>
        </form>
          {/* Toast container for displaying toasts */}
          <ToastContainer />
        {isSubmitted && <p>Data submitted successfully</p>}
    </div>
  )
}

export default Immutable