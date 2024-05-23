import React from 'react'

const FormWithIconsApp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md w-96">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>

                    <div className="mb-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 mr-2 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 mr-2 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M22 12h-4l-3 9L9 3l-3 9H2"
                            ></path>
                        </svg>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormWithIconsApp
