import React, { useState } from 'react';

const NewsLetterApp = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your newsletter subscription logic here
        console.log(`Subscribed with email: ${email}`);
        // Reset the form after submission
        setEmail('');
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Subscribe to our Newsletter</h2>

                    <form onSubmit={handleSubscribe}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="john.doe@example.com"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewsLetterApp
