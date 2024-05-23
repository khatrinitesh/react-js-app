import React from 'react';
import './custom.css';

const FormOnImgApp = () => {
    return (
        <>
            <div className="background-image">
                <div className="form-container">
                    <form>
                        <h1>Contact Us</h1>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={4} required defaultValue={""} />
                        <input type="submit" defaultValue="Submit" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default FormOnImgApp
