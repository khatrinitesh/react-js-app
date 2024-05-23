import React, { useState } from 'react';
import './style.css';

const CheckoutFormApp = () => {
    return (
        <>
            <CheckoutForm />
        </>
    )
}

export default CheckoutFormApp

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        e.preventDefault();
        console.log('checkout data', formData)
    }

    return (
        <>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h2>Checkout</h2>

                {/* Billing Information */}
                <h3>Billing Information</h3>
                <div className="form-group">
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                {/* Shipping Information */}
                <h3>Shipping Information</h3>
                <div className="form-group">
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Zip Code:
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                {/* Payment Information */}
                <h3>Payment Information</h3>
                <div className="form-group">
                    <label>
                        Card Number:
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Expiration Date:
                        <input
                            type="text"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        CVV:
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Place Order</button>
            </form>
        </>
    )
}
