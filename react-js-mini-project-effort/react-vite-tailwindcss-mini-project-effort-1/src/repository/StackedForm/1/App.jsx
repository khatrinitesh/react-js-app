import React, { useState } from 'react';

const StackedFormApp = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('registered form', formData)
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Stacked Form</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="John"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Doe"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="john.doe@example.com"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="********"
                                required
                            />
                        </div>

                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
                        >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StackedFormApp
